# myapp/views.py
from django.http import JsonResponse, HttpResponse
from django.core.management import call_command
from .models import Paper, ScrapingStatus, Citation
from rest_framework import viewsets
from .serializers import PaperSerializer
from openai import OpenAI
import numpy as np

def scrape_data(request):
    
    Paper.objects.all().delete()
    ScrapingStatus.objects.all().delete()
    Citation.objects.all().delete()

    query = request.GET.get('query', '')
    paragraph = request.GET.get('paragraph', '')  # Retrieve the paragraph from the request
    # print(query, paragraph)

    call_command('scrape_data', query, paragraph)  # Pass both query and paragraph to the management command
    articleTitles = (list(Paper.objects.values_list('title', flat=True)))
    getRelevance(query, articleTitles)
    return JsonResponse({'message': 'Scraping initiated successfully'})

def get_scraping_status(request):
    if ScrapingStatus.objects.exists():
        return HttpResponse('scraped')
    return HttpResponse('nuh uh')
    
class PaperViewSet(viewsets.ModelViewSet):
    queryset = Paper.objects.all()
    serializer_class = PaperSerializer



def cosine_sim(a, b):
    '''
        Remade to calculate cosine similarity

        Takes 2 lists of embeddings as input
    '''
    return np.dot(a, b) / (np.linalg.norm(np.array(a).astype(float)) * np.linalg.norm(np.array(b).astype(float)))


def get_emb(term, client):
    '''
        Creates an embedding of a string

        Takes a string as input
        Takes client as input
    '''
    resp = client.embeddings.create(
    input=term,
    model="text-embedding-ada-002"
    )
    return resp.data[0].embedding


def createStrucArr(initial_array):
    '''
        Creates an array with structure that we can use 
        to store our embeddings and ranking scores

        Takes a 1d list of strings as input
    '''
    data = []
    for i in range(len(initial_array)):
        _ = [initial_array[i], '', 0.0]
        data.append(_)
    return data


def sortByRelevance(search_term, article_titles):
    '''
        Generates embeddings and returns the sorted array

        Takes a string for search term as input
        Takes a 1d list of strings as input
    '''
    OPENAI_API_KEY = ''
    client = OpenAI(api_key=OPENAI_API_KEY)

    search_response = get_emb(search_term, client)

    data = createStrucArr(article_titles)

    for i in range(len(data)):
        data[i][1] = get_emb(data[i][0], client)
        data[i][2] = cosine_sim(data[i][1], search_response)

    sorted_data = sorted(data, key=lambda x: x[2], reverse=True)
    return_data = []

    for i in range(len(sorted_data)):
        _ = [sorted_data[i][0], sorted_data[i][2]]
        return_data.append(_)
    
    return return_data

def getRelevance(search_var, articles):
# Call to sort function
    sorted_data = sortByRelevance(search_var, articles)

    # Print in terminal for proof of concept
    print(search_var)
    for i in range(len(sorted_data)):
        paper = Paper.objects.get(title=sorted_data[i][0])
        paper.relevance = sorted_data[i][1]
        paper.save()        
        print(sorted_data[i][0], "SIM =", sorted_data[i][1])



    
