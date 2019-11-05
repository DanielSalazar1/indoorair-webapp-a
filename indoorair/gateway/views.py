from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout


def register_page(request):
    user = request.user

    context = {
        'user' : user,
    }

    return render (request, "gateway/register.html", {})

def register_success(request):
    return render(request, "gateway/register_successfuly.html", {})

def contact(request):
    user = request.user

    context = {
        'user' : user,
    }

    return render (request, "homepage_page/contact.html", context)

def login_page(request):
    return render (request, "gateway/login.html", {})

def post_login_api(request):
    username = request.POST.get("username")
    password = request.POST.get("password")

    print("For debugging purposes", username, password)

    try:
        user = authenticate(username=username, password=password)
        if user:
            print("PRE-LOGIN", user.get_full_name())
            login(request, user)
            print("POST-LOGIN", user.get_full_name())

            # A backend authenticated the credentials
            return JsonResponse({
                 "was_successful": True,
                 "reason": None,
            })
        else:
            # No backend authenticated the credentials
            return JsonResponse({
                 "was_successful": False,
                 "reason": "Cannot log in, username or password is wrong.",
            })

    except Exception as e:
        print(e)
        return JsonResponse({
             "was_successful": False,
             "reason": "Cannot log in, username or password is wrong.",
        })

def post_register_api(request):
    first_name = request.POST.get("first_name")
    last_name = request.POST.get("last_name")
    username = request.POST.get("username")
    password = request.POST.get("password")

    print(first_name, last_name, username, email, password)

    try:
        user = User.objects
        return JsonResponse({
            "was_registered": True,
            "reason": None,
        })

    except Exception as e:
        return JsonResponse({
            "was_registered": False,
            "reason": str(e),
        });
