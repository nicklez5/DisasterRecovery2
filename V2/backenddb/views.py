from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from backenddb.models import Machine, Job, Timecard
from backenddb.serializers import SerializeMachine, SerializeJob, SerializeTimecard

from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

class ProfileView(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        content = {
            'user': str(request.user),  # `django.contrib.auth.User` instance.
            'auth': str(request.auth),  # None
        }
        return Response(content)

@csrf_exempt
def machineApi(request,id=0):
    if request.method=='GET':
        machine = Machine.objects.all()
        machine_serializer = SerializeMachine(machine, many=True)
        return JsonResponse(machine_serializer.data, safe=False)

    elif request.method=='POST':
        machine_data=JSONParser().parse(request)
        machine_serializer = SerializeMachine(data=machine_data)
        if machine_serializer.is_valid():
            machine_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        machine_data = JSONParser().parse(request)
        machine=Machine.objects.get(machine_code=machine_data['machine_code'])
        machine_serializer=SerializeMachine(machine,data=machine_data)
        if machine_serializer.is_valid():
            machine_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        machine=Machine.objects.get(machine_code=id)
        machine.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

##############################################################Job API#################################################################### 

@csrf_exempt
def jobApi(request,id=0):
    if request.method=='GET':
        job = Job.objects.all()
        job_serializer = SerializeJob(job, many=True)
        return JsonResponse(job_serializer.data, safe=False)

    elif request.method=='POST':
        job_data=JSONParser().parse(request)
        job_serializer = SerializeJob(data=job_data)
        if job_serializer.is_valid():
            job_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        job_data = JSONParser().parse(request)
        job=Job.objects.get(code=job_data['code'])
        job_serializer=SerializeJob(job,data=job_data)
        if job_serializer.is_valid():
            job_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        job=Job.objects.get(code=id)
        job.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

#########################################################TimeCard API###############################################################

@csrf_exempt
def timecardApi(request,id=0):
    if request.method=='GET':
        timecard = Timecard.objects.all()
        timecard_serializer = SerializeTimecard(timecard, many=True)
        return JsonResponse(timecard_serializer.data, safe=False)

    elif request.method=='POST':
        timecard_data=JSONParser().parse(request)
        timecard_serializer = SerializeTimecard(data=timecard_data)
        if timecard_serializer.is_valid():
            timecard_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        timecard_data = JSONParser().parse(request)
        timecard=Job.objects.get(sitecode=timecard_data['sitecode'])
        timecard_serializer=SerializeTimecard(timecard,data=timecard_data)
        if timecard_serializer.is_valid():
            timecard_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        timecard=Timecard.objects.get(code=id)
        timecard.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)
