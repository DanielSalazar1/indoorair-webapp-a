from django.http import HttpResponse, JsonResponse
from django.contrib.auth.models import User
from django.shortcuts import render


def dashboard(request):
    user = request.user
    print("THE USER IS", user)

    # if user.is_authenticated == False:
    #     return HttpResponse("Cannot view page - you must log in first!")
    #
    # context = {
    #     'user': user,
    # }

    return render(request, "dashboard/dashboard.html", {})


def get_temperature(request):
    temperature_avg = request.POST.get("temperature")

    return JsonResponse({"temperature": temperature_avg})

def get_pressure(request):
    pressure_avg = request.POST.get("pressure")

    return JsonResponse({"pressure": pressure_avg})

def get_co2(request):
    co2_avg = request.POST.get("co2")

    return JsonResponse({"co2": co2_avg})

def get_tvoc(request):
    tvoc_avg = request.POST.get("tvoc")

    return JsonResponse({"tvoc": tvoc_avg})

def get_humidity(request):
    humidity_avg = request.POST.get("humidity")

    return JsonResponse({"humidity": humidity_avg})
