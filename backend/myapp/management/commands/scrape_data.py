from django.core.management.base import BaseCommand
from myapp.scraper import Scraper

class Command(BaseCommand):
    help = 'Scrape and save articles from Google Scholar'

    def add_arguments(self, parser):
        # Modify the argument to accept multiple values and join them into a single query
        parser.add_argument('query', nargs='+', type=str, help='Search query for Google Scholar')

    def handle(self, *args, **options):
        # Join the query parts into a single string
        query = ' '.join(options['query'])
        scraper = Scraper(query)
        scraper.scrape_and_save_data()
        self.stdout.write(self.style.SUCCESS(f'Articles successfully scraped and saved for query: {query}.'))
