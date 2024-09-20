from django.db import models

# Create your models here.
class Neighborhood(models.Model):
  name = models.CharField(max_length=200)
  pub_data = models.DateTimeField("data published")
  pcv_index = models.FloatField(default=0);
  total_area = models.FloatField(default=0);
  total_green_area = models.FloatField(default=0)
  description = models.TextField()

class Neighborhood_Image(models.Model):
  neighborhood = models.ForeignKey(Neighborhood, on_delete=models.CASCADE)
  image_link = models.CharField(max_length=500)
  description = models.CharField(max_length=30)



