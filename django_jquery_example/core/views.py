# -*- coding: utf-8 -*-
from time import sleep

from django.shortcuts import render
from django.http import JsonResponse


def index(request):
    return render(request, 'core/index.html')


def myendpoint(request):
    # Simulate slow process
    sleep(10)
    return JsonResponse({"mykey": "Hello!"})
