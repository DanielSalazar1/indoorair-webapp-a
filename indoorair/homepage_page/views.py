from django.http import HttpResponse
from django.shortcuts import render
from django.http import JsonResponse


def index(request):
    return render(request, 'homepage_page/index.html', {

    })

def contact(request):
    return render (request, "homepage_page/contact.html", {})

def get_version(request):
    return JsonResponse({'version': '0.1.0-beta'})
