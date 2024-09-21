from django.urls import path
from django.urls import include

from core.api import api

urlpatterns = [path("", api.urls)]
