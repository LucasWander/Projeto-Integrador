import factory
from faker import Faker
from green_area.models import Neighborhood

fake = Faker('pt_BR')

class NeighborhoodFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Neighborhood
    
    # name = fake.neighborhood()
    # pub_data=fake.date_this_year(before_today=True)
    # total_area=fake.pyfloat(positive=True,max_value=3.99, min_value=0.01)
    # total_green_area=fake.pyfloat(positive=True,max_value=2.99)
    # description=fake.text()
    # pcv_index=(total_green_area/total_area)*100

    name = factory.Faker('city')
    pub_data=factory.Faker('date_this_year', before_today=True)
    #total_area=factory.Faker('pyfloat', positive=True,max_value=3.99, min_value=0.01)
    # total_green_area=factory.Faker('pyfloat', positive=True,max_value=2.99)
    description=factory.Faker('text')
    
    @factory.lazy_attribute
    def total_area(self):
        return fake.pyfloat( positive=True,max_value=3.99, min_value=0.01)

    @factory.lazy_attribute
    def total_green_area(self):
        total_area = self.total_area if self.total_area else 1.0
        return fake.pyfloat( positive=True, max_value=total_area*0.90, min_value=0.001)

    @factory.lazy_attribute
    def pcv_index(self):
        if self.total_area == 0:
            return 0
        return (self.total_green_area / self.total_area) * 100
    
    