from rest_framework import serializers
from rest_framework.response import Response

from rest_auth.registration.serializers import RegisterSerializer

from .models import Accounts

class AccountSerializer(serializers.ModelSerializer):

	class Meta:
		model = Accounts
		fields = (
			'id',
			'email',
			'alias',
			'status_msg'
		)

