from django.shortcuts import render,redirect

from django.http import HttpResponseRedirect
from django.urls import reverse_lazy, reverse
from django.contrib.auth import views as auth_views
from django.contrib.auth.mixins import PermissionRequiredMixin
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.decorators import user_passes_test
from django.views import generic

#permission imports
from django.contrib.auth.decorators import permission_required
from django.contrib.auth.decorators import login_required #use this  import  on class based views
from django.utils.decorators import method_decorator


#forms, models and views imports
from .forms import CustomUserForm, UpdateCustomUserForm, LoginForm, RegistrationForm
from .models import CustomUser

from django.views.generic import (
    DeleteView,
    ListView,
    UpdateView
)
# Create your views here.
@user_passes_test(lambda u:u.is_staff, login_url=reverse_lazy('home'))
def create_user(request):
    form = CustomUserForm(request.POST or None)
    if form.is_valid():
        form.save()
        return HttpResponseRedirect(reverse('users:All_Users'))
    context = {
        'form': form
    }
    return render(request, "UserTemps/create_user.html", context)

def user_registration(request):
    form = RegistrationForm(request.POST or None)
    if form.is_valid():
        form.save()
        return HttpResponseRedirect(reverse('home'))
    context = {
        'form': form
    }
    return render(request, "registration/register.html", context)

def login_request(request):
    if request.method == 'POST':
        form = AuthenticationForm(request=request, data=request.POST)
        if form.is_valid():
            email= form.cleaned_data.get('email')
            password = form.cleaned_data.get('password')
            user = authenticate(email=email, password=password)
            if user is not None:
                login(request, user)
                return redirect('/')
            else:
                messages.error(request, "Invalid username or password.")
        else:
            messages.error(request, "Invalid username or password.")
    form = AuthenticationForm()
    return render(request=request,
                  template_name="users/login.html",
                  context={"form": form})


class UsersListView(PermissionRequiredMixin,ListView):
    permission_required = 'is_admin'
    redirect_field_name = '/'
    model = CustomUser
    paginate_by = 100
    context_object_name = 'users_list'
    queryset = CustomUser.objects.all()
    template_name = 'UserTemps/users_list_view.html'