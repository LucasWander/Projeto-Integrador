from django.http import HttpResponse
from django.http import Http404
from django.template import loader

from .models import Neighborhood

# Create your views here.
def index(request):
  template = loader.get_template("green_area/index.html")

  neighborhoods = Neighborhood.objects.order_by("name")

  context = {
    "neighborhoods":neighborhoods,
  }

  return HttpResponse(template.render(context, request))

def neighborhoods(request):
  return HttpResponse("Bairros")

def neighborhoodDetail(request, neighborhood_id):
  template = loader.get_template("green_area/bairro.html")

  try:
    neighborhood = Neighborhood.objects.get(pk=neighborhood_id)
  except Neighborhood.DoesNotExist:
        raise Http404("Question does not exist")

  context = {
    "neighborhood": neighborhood  
  }

  return HttpResponse(template.render(context, request))