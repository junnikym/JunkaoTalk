from django.db import models
from django.db.models import fields
from django.db.models.base import Model
from allauth.account.adapter import get_adapter
from rest_framework import serializers
from rest_framework.response import Response

from rest_auth.registration.serializers import RegisterSerializer

from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email

from . import models

ACCOUNT_COMMON_FILED = (
	'pk',
	'email',
	'alias',
	'status_msg',
)

class FriendSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.Accounts
		fields = ACCOUNT_COMMON_FILED

class AccountSerializer(serializers.ModelSerializer):

	friends = serializers.SerializerMethodField()

	class Meta:
		model = models.Accounts
		fields = ACCOUNT_COMMON_FILED + tuple(['friends', ])

	def get_friends(self, obj):
		if 'request' in self.context:
			request = self.context['request']

			if obj in request.user.friends.all():
				return True

		return False

class SignUpSerializer(RegisterSerializer):

	name = serializers.CharField(required=True, write_only=True)

	def get_cleaned_data(self):
		return {
			'email': self.validated_data.get('email', ''),
			'password1': self.validated_data.get('password1', ''),
			'password2': self.validated_data.get('password2', ''),
			# 'alias' : self.validated_data.get('alias', '')
		}

	def save(self, request):
		adapter = get_adapter()
		new_account = adapter.new_user(request)

		self.cleaned_data = self.get_cleaned_data()

		adapter.save_user(request, new_account, self)
		setup_user_email(request, new_account, [])
		new_account.save()
		
		return new_account