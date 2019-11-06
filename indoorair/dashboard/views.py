from django.shortcuts import render
from django.http import JsonResponse


def dashboard_page(request):
    return render(request, "dashboard/dashboard.html", {})


def get_dashboard_api(request):
    return JsonResponse({
         'avg_temperature': 0,
         'avg_pressure': 0,
         'avg_co2': 0,
         'avg_tvoc': 0,
         'avg_humidity': 0,
    })
