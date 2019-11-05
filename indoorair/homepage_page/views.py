from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect


def index_page(request):
    return render(request, 'homepage_page/index.html', {})

def contact_page(request):
    return render (request, "homepage_page/contact.html", {})

def get_version_api(request):
    return JsonResponse({'version': '0.1.0-beta'})
