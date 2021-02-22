from django.shortcuts import render
from django.http import Http404

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Groups
from . import serializers

from common.manager import relManager

class CreateGroup(APIView):

    def createGroupModel(**kwargs):
        model = Groups(title=kwargs["title"])
        
        if "invite" in kwargs:
            for user in kwargs["invite"]:
                model.accounts.add(user)

        return model

    def ApplyCreateGroup(account, target):
        target.accounts.add(account)
	
    @relManager(Groups, ApplyCreateGroup, createGroupModel)
    def post(self, request, title, invite, format=None):
        pass

class GroupList(APIView):

    def get(self, request, format=None):
        result = request.user.friends

        serializer = serializers.ChatSerializer(
            result, many=True, context={"request": request})

        return Response(data=serializer.data, status=status.HTTP_200_OK)