from django.contrib import admin

# Register your models here.
from .models import Neighborhood
from .models import Neighborhood_Image

admin.site.register(Neighborhood_Image);
admin.site.register(Neighborhood)