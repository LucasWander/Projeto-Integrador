from django.http import HttpResponse
from django.template import loader

# Create your views here.
def index(request):
  template = loader.get_template("green_area/index.html")

  bairros = [
    {
      "name": "Centro",
      "id": "bairro-centro"
    },
    {
      "name": "Chervezon",
      "id": "bairro-chervezon"
    },
    {
      "name": "Floridiana",
      "id": "bairro-floridiana"
    }
  ]
  context = {
    "neighborhoods":bairros,
    "name": "teste testando"
  }

  return HttpResponse(template.render(context, request))

def neighborhoods(request):
  return HttpResponse("Bairros")

def neighborhoodDetail(request, neighborhood_id):
  return HttpResponse("Você está na página do bairro %s" % neighborhood_id)