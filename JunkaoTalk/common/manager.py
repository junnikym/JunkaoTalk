from django.http import Http404

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

def relManager(model, work_func, targeting_func):
    def outter(func):
        def inner(*args, **kwargs):

            user = args[1].user
            target = None

            try:
                target = targeting_func( kwargs )
            except model.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)

            work_func(user, target)

            func(*args, **kwargs)

            user.save()

            return Response(status=status.HTTP_200_OK)
        return inner
    return outter