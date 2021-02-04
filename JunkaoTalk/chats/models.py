from accounts.models import Accounts

import uuid
from django.db import models
from django.utils import timezone

class Group(models.Model):
	title = models.CharField(max_length=64, null=False)
	accounts = models.ManyToManyField("self", blank=False)

	def __str__(self):
		return self.title

	@property
	def accounts_count(self):
		return self.friends.all().count()

class Chats(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	contents = models.TextField("self", blank=False)
	group = models.ForeignKey(Group, null=False, on_delete=models.CASCADE)
	writer = models.ForeignKey(Accounts, null=True, on_delete=models.SET_NULL)

	def __str__(self):
		return self.contents