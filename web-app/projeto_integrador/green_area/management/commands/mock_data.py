from django.core.management.base import BaseCommand
from green_area.NeighborhoodFactory import NeighborhoodFactory

class Command(BaseCommand):
    help = 'Generate mock Neighborhood'

    def handle(self, *args, **kwargs):
        for _ in range(50):
            NeighborhoodFactory.create()

        self.stdout.write(self.style.SUCCESS('50 mock neighborhoods created'))
    