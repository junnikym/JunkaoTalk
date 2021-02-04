from accounts.models import Accounts
from django.db import models
from django.db.models import fields
from django.db.models.base import Model

from rest_framework import serializers
from rest_framework.response import Response

from . import models

class ChatSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.Group
		fields = (
			'title',
			'accounts',
		)