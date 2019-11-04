from django.urls import path

from . import views

urlpatterns = [
    path('dashboard', views.dashboard, name='dashboard'),
    path('temperature', views.get_temperature, name='temperature_page'),
    path('pressure', views.get_pressure, name='pressure_page'),
    path('co2', views.get_co2, name='co2_page'),
    path('tvoc', views.get_tvoc, name='tvoc_page'),
    path('humidity', views.get_humidity, name='humidity_page'),
]
