from django.urls import path

from . import views

urlpatterns = [
    path('register', views.register_page, name='register_page'),
    path('api/register', views.post_register_api, name='register_api'),
    path('register/success', views.register_success, name='register_success'),
    path('contact', views.contact, name='contact'),
    path('login', views.login_page, name='login_page'),
    path('api/login', views.post_login_api, name='post_login_api'),

]
