from django.conf import settings
from allauth.account.adapter import DefaultAccountAdapter

class AccountAdapter(DefaultAccountAdapter):
	def is_open_for_signup(self, request):
		return getattr(settings, 'ACCOUNT_ALLOW_REGISTRATION', True)

	def save_user(self, request, user, form):

		if len(user.socialaccount_set.all()) == 0:
			email = request.data.get('email', None)
			password1 = request.data.get('password1', None)
			password2 = request.data.get('password2', None)
			phone = request.data.get('phone', None)
			alias = request.data.get('alias', None)

			user.email = email
			user.phone = phone
			user.alias = alias

			if(password1 == password2):
				user.set_password(password1)

			user.save()
