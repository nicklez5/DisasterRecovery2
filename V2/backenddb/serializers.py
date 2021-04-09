from rest_framework import serializers
from backenddb.models import Machine, Job, Timecard

class SerializeMachine(serializers.ModelSerializer):
    class Meta:
        model=Machine
        fields= '__all__'

class SerializeJob(serializers.ModelSerializer):
    class Meta:
        model=Job
        fields= '__all__'

class SerializeTimecard(serializers.ModelSerializer):
    class Meta:
        model=Timecard
        fields= '__all__'