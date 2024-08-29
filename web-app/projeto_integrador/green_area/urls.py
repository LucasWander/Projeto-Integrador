from django.urls import path
from . import views

urlpatterns = [
  path("", views.index, name="index"),
  path("bairros", views.neighborhoods, name="bairros"),
  path("bairros/<str:neighborhood_id>", views.neighborhoodDetail, name="detalhe-bairro")
]