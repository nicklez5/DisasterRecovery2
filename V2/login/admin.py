from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser
from backenddb.models import Machine,Job,Timecard

class AdminAccount(UserAdmin):
    list_display = ('username', 'name','is_admin')
    search_fields =('username')
    readonly_fields = ('id')
    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()




# Register your models here.
# admin.site.register(CustomUser, AdminAccount)

admin.site.register(CustomUser)
admin.site.register(Machine)
admin.site.register(Job)
admin.site.register(Timecard)
