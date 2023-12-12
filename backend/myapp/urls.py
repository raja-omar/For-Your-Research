from django.urls import path, include
from .views import scrape_data, PaperViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'papers', PaperViewSet, basename='paper')

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/scrape/', scrape_data, name='scrape_data'),
]
