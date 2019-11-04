from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index_page'),
    path('contact', views.contact, name='contact_page'),
    path('version', views.get_version, name='version'),
]
