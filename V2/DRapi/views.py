from django.shortcuts import render
def homepage(request):
    context = {}
    return render(request,"Home.html",context)