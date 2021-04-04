import uuid
from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager
from django.conf import settings
from django.utils.translation import ugettext_lazy as _
from django.db.models.signals import post_save
from django.dispatch import receiver
from backenddb.models import Job
from backenddb.models import Timecard
from backenddb.models import Machine

from .managers import UserManager
def get_id():
    x = uuid.uuid4().hex[:6].upper()
    return x

class CustomUser(AbstractUser):
    username = models.CharField(max_length=40,unique=True,default='')
    name = models.CharField(max_length=40,unique=False,default='')
    is_admin = models.BooleanField(_('admin status'),default=False)
    password = models.CharField(max_length=100,editable=False,default='')
    listofjobs = models.ManyToManyField(settings.AUTH_USER_MODEL,through="JobMembers")
    listofmachines = models.ManyToManyField(settings.AUTH_USER_MODEL,through="MachineMembers")
    listoftimecards = models.ManyToManyField(settings.AUTH_USER_MODEL,through="TimecardMembers")

    objects = UserManager()
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['name','password','is_admin']

    def __str__(self):
        return self.username

    def has_perm(self,perm,obj=None):
        return self.is_admin

    class Meta:
        verbose_name = _('user')
        verbose_name_plural = _('users')
        ordering = ['-username']

class AdminIntermediate(models.Model):
    machine = models.ForeignKey(Machine)
    job = models.ForeignKey(Job)
    timecard = models.ForeignKey(Timecard)
    
class MachineMembers(models.Model):
    machine = models.ForeignKey(Machine,on_delete=models.CASCADE)

class JobMembers(models.Model):
    job = models.ForeignKey(Job,on_delete=models.CASCADE)

class TimecardMembers(models.Model):
    timecard = models.ForeignKey(Timecard,on_delete=models.CASCADE)


