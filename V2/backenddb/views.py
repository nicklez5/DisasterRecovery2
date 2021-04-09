from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http import HttpResponse, JsonResponse

from backenddb.models import Machine, Job, Timecard
from backenddb.serializers import SerializeMachine, SerializeJob, SerializeTimecard

from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status


class MachineList(APIView):
    permission_classes = [AllowAny]

    def get(self,request,format=None):
        machines = Machine.objects.all()
        machine_serializer = SerializeMachine(machines,many=True)
        return Response(machine_serializer.data)

    def post(self,request,format=None):
        machine_serializer = SerializeMachine(data=request.data)
        if machine_serializer.is_valid():
            machine_serializer.save()
            return Response(machine_serializer.data, status=status.HTTP_201_CREATED)
        return Response(machine_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MachineDetail(APIView):
    permission_classes = [AllowAny]

    def get_object(self,pk):
        try:
            return Machine.objects.get(pk=pk)
        except Machine.DoesNotExist:
            raise HTTP_404_NOT_FOUND

    def get(self,request,pk,format=None):
        machine = self.get_object(pk)
        serializer = SerializeMachine(machine)
        return Response(serializer.data)

    def put(self,request,pk,format=None):
        machine = self.get_object(pk)
        serializer = SerializeMachine(machine, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self,request,pk,format=None):
        machine = self.get_object(pk)
        machine.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class JobList(APIView):
    permission_classes = [AllowAny]

    def get(self,request,format=None):
        jobs = Job.objects.all()
        job_serializer = SerializeJob(jobs,many=True)
        return Response(job_serializer.data)

    def post(self,request,format=None):
        job_serializer = SerializeJob(data=request.data)
        if job_serializer.is_valid():
            job_serializer.save()
            return Response(job_serializer.data, status=status.HTTP_201_CREATED)
        return Response(job_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class JobDetail(APIView):
    permission_classes = [AllowAny]

    def get_object(self,pk):
        try:
            return Job.objects.get(pk=pk)
        except Job.DoesNotExist:
            raise HTTP_404_NOT_FOUND

    def get(self,request,pk,format=None):
        job = self.get_object(pk)
        serializer = SerializeJob(job)
        return Response(serializer.data)

    def put(self,request,pk,format=None):
        job = self.get_object(pk)
        serializer = SerializeJob(job, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self,request,pk,format=None):
        job = self.get_object(pk)
        job.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class TimecardList(APIView):
    permission_classes = [AllowAny]

    def get(self,request,format=None):
        timecards = Timecard.objects.all()
        timecard_serializer = SerializeTimecard(timecards,many=True)
        return Response(timecard_serializer.data)

    def post(self,request,format=None):
        timecard_serializer = SerializeTimecard(data=request.data)
        if timecard_serializer.is_valid():
            timecard_serializer.save()
            return Response(timecard_serializer.data, status=status.HTTP_201_CREATED)
        return Response(timecard_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TimecardDetail(APIView):
    permission_classes = [AllowAny]

    def get_object(self,pk):
        try:
            return Timecard.objects.get(pk=pk)
        except Timecard.DoesNotExist:
            raise HTTP_404_NOT_FOUND

    def get(self,request,pk,format=None):
        timecard = self.get_object(pk)
        serializer = SerializeTimecard(timecard)
        return Response(serializer.data)

    def put(self,request,pk,format=None):
        timecard = self.get_object(pk)
        serializer = SerializeTimecard(timecard, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self,request,pk,format=None):
        timecard = self.get_object(pk)
        timecard.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ProfileView(APIView):
    permission_classes = [AllowAny]


    def get(self, request, format=None):
        content = {
            'user': str(request.user),  # `django.contrib.auth.User` instance.
            'auth': str(request.auth),  # None
        }
        return Response(content)
