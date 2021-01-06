from .manager import AccountManager
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
from django.db import models
from django.db.models.deletion import CASCADE
from django.utils import timezone

class Accounts(AbstractUser):

	""" User's Account Model """

	GENDER_OP = (
		('M', 'Male'), 
		('F', 'Female'), 
		('NOT', 'Nothing')
	)

	alias = models.CharField(max_length=64, blank=True)
	phone = models.CharField(max_length=32, null=True)
	gender = models.CharField(max_length=80, choices=GENDER_OP, null=True)
	status_msg = models.CharField(blank=True, max_length=255)
	birth = models.DateField(blank=True, null=True)

	friends = models.ManyToManyField("self", blank=True)
	groups = models.ManyToManyField("self", blank=True)

	# Manager

	username = None
	email = models.EmailField(_('email address'), unique=True)

	USERNAME_FIELD = 'email'
	REQUIRED_FIELDS = []

	objects = AccountManager()

	def __str__(self):
		return self.email

	@property
	def firends_count(self):
		return self.friends.all().count()

	@property
	def groups_count(self):
		return self.groups.all().count()

class AccountImgs(models.Model):

	""" User's Profile Image Model """

	account = models.ForeignKey(Accounts, null=False, related_name='img')

	isBackground = models.BooleanField(default=False, null=False);
	ImageField = models.ImageField(upload_to='profile/', null=False);