from rest_framework import serializers
from backenddb.models import Machine, Job, Timecard

class SerializeMachine(serializers.ModelSerializer):
    class Meta:
        model=Machine
        fields=('machine_code','description','hourly_rent','maxhoursperday')

class SerializeJob(serializers.ModelSerializer):
    class Meta:
        model=Job
        fields=('code','description','hourly_rate','maxhoursperday')

class SerializeTimecard(serializers.ModelSerializer):
    class Meta:
        model=Timecard
        fields=('sitecode','contractor_name','total_hours','total_amount','status')