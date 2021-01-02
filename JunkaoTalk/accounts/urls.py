from django.contrib import admin
from django.urls import path, include

from . import views

urlpatterns = [
    path('short_info/<int:pk>/', views.ShortInfo.as_view(), name="short info"),
]
