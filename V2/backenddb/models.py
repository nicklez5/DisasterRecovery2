from django.db import models

class Machine(models.Model):
    
    machine_code = models.CharField(max_length=50,primary_key=True,unique=True,default='')
    description = models.CharField(max_length=100,unique=False,default='')
    hourly_rent = models.FloatField(null=True,blank=True,default=None)
    maxhoursperday = models.IntegerField(default=0)

    class Meta:
        ordering = ['machine_code']

    def __str__(self):
        return self.machine_code



class Job(models.Model):
    
    code = models.CharField(max_length=50,primary_key=True,unique=True,default='')
    description = models.CharField(max_length=100,default='')
    hourly_rate = models.FloatField(null=True,blank=True,default=None)
    maxhoursperday = models.IntegerField(default=0)


    class Meta:
        ordering = ['code']

    def __str__(self):
        return self.code


class Timecard(models.Model):
 
    sitecode = models.CharField(max_length=50,primary_key=True,unique=True,default='')
    contractor_name = models.CharField(max_length=75,default='')
    total_hours = models.IntegerField(default=0)
    total_amount = models.FloatField(null=True,blank=True,default=None)
    status = "review"


    class Meta:
        ordering = ['sitecode']

    def __str__(self):
        return self.sitecode



