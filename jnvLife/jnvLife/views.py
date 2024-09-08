from django.shortcuts import render
# from django.http import HttpResponse

def home(request):
    login=True
    user=request.user.is_authenticated
    return render(request,'home.html',{'login':login,'user':user})