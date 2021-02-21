from django.http import Http404

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Accounts

from . import serializers

class FriendList(APIView):
    
    def get(self, request):
        result = request.user.friends

        serializer = serializers.FriendSerializer(
            result, many=True, context={"request": request})

        return Response(data=serializer.data, status=status.HTTP_200_OK)

def AccountRefManager(work_func):
    def outter(func):
        def inner(*args, **kwargs):

            user = args[1].user

            try:
                target = Accounts.objects.get(pk=kwargs["target_pk"])
            except Accounts.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)

            work_func(user, target)

            func(*args, **kwargs)

            user.save()

            return Response(status=status.HTTP_200_OK)
        return inner
    return outter

class Friend(APIView):

    # def get(self, request, target_pk, format=None):

    #     try:
    #         target = Accounts.objects.get(pk=target_pk)
    #     except Accounts.DoesNotExist:
    #         return Response(status=status.HTTP_404_NOT_FOUND)

    #     result = target.friends.all()

    #     serializer = serializers.AccounstListSerializer(
    #         result, many=True, context={"request": request})

    #     return Response(data=serializer.data, status=status.HTTP_200_OK)
        

    def ApplyFriend(account, target):
        account.friends.add(target)

    @AccountRefManager(ApplyFriend)
    def post(self, request, target_pk, format=None):
        pass

class Unfriend(APIView):

    def ApplyUnfriend(account, target):
        account.friends.remove(target)
	
    @AccountRefManager(ApplyUnfriend)
    def post(self, request, target_pk, format=None):
        pass

class Search(APIView):

    def get(self, request, format=None):
        alias = request.query_params.get('query', None)

        if alias is not None:
            results = Accounts.objects.filter(alias__istartswith=alias)

            serializer = serializers.AccountSerializer(
                results, many=True, context={"request": request}
            )

            return Response(data=serializer.data, status=status.HTTP_200_OK)

        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)