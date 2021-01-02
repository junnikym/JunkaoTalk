from django.http import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Accounts

from .serializers import AccountSerializer
from .models import Accounts

class ShortInfo(APIView):
	def get(self, request, pk):
		try :
			who = Accounts.objects.get(pk=pk)
		except :
			raise Http404
		
		serializer = AccountSerializer(who)
		return Response(data=serializer.data, status=status.HTTP_200_OK)
