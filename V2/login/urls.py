from django.contrib import admin
from django.urls import path, include
from .views import (
    create_user,
    user_registration,
    login_request,
    UsersListView
)
app_name = 'login'

urlpatterns = [
    path('createUser/',create_user,name='Create_User'),
    path('register/',user_registration,name='Register_User'),
    path('allusers/',UsersListView.as_view(),name='All_Users'),
    path('login/',login_request,name='login'),
    path('',include("django.contrib.auth.urls")),
]