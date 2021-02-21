from django.contrib import admin
from django.urls import path, include

from . import views

urlpatterns = [
    path('friend/', views.FriendList.as_view(), name="Friend List"),
    path('<int:target_pk>/friend/', views.Friend.as_view(), name="friend"),
    path('<int:target_pk>/unfriend/', views.Unfriend.as_view(), name="unfriend"),
    path('search/', views.Search.as_view(), name="search accounts"),
]
