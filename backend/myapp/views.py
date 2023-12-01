# myapp/views.py
from django.http import JsonResponse, HttpResponse
from django.core.management import call_command
from .models import Paper, ScrapingStatus, Citation
from rest_framework import viewsets
from .serializers import PaperSerializer

def scrape_data(request):
    
    Paper.objects.all().delete()
    ScrapingStatus.objects.all().delete()
    Citation.objects.all().delete()

    query = request.GET.get('query', '')
    print(query)
    # call_command = python3 manage.py

    call_command('scrape_data', query)

    return JsonResponse({'message': 'Scraping initiated successfully'})

def get_scraping_status(request):
    if ScrapingStatus.objects.exists():
        return HttpResponse('scraped')
    return HttpResponse('nuh uh')
    
class PaperViewSet(viewsets.ModelViewSet):
    queryset = Paper.objects.all()
    serializer_class = PaperSerializer