from django.urls import path, include, re_path

from rest_framework.urlpatterns import format_suffix_patterns
from backenddb import views

urlpatterns=[
    path('profile/',views.ProfileView.as_view()),
    re_path(r'^machine/$',views.MachineList.as_view()),
    re_path(r'^machine/([0-9a-zA-Z]+)$',views.MachineDetail.as_view()),

    re_path(r'^job/$',views.JobList.as_view()),
    re_path(r'^job/([0-9a-zA-Z]+)$',views.JobDetail.as_view()),

    re_path(r'^timecard/$',views.TimecardList.as_view()),
    re_path(r'^timecard/([%0-9a-zA-Z]+)$',views.TimecardDetail.as_view()),
    

]

urlpatterns = format_suffix_patterns(urlpatterns)