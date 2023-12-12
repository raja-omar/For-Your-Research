# myapp/views.py
from django.http import JsonResponse, HttpResponse
from django.core.management import call_command
from .models import Paper
from rest_framework import viewsets
from .serializers import PaperSerializer

def scrape_data(request):
    
    Paper.objects.all().delete()

    query = request.GET.get('query', '')
    print(query)
    # call_command = python3 manage.py

    call_command('scrape_data', query)
    # after this line we have all our scraped data in the data base

    return JsonResponse({'message': 'Scraping initiated successfully'})
    
class PaperViewSet(viewsets.ModelViewSet):
    queryset = Paper.objects.all()
    serializer_class = PaperSerializer