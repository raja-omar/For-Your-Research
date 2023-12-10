import requests
from bs4 import BeautifulSoup
from myapp.models import Paper, ScrapingStatus
from urllib.parse import quote

class Scraper:
    def __init__(self, query):
        self.query = query
        self.page = 0

    def scrape_and_save_data(self):
        while True:
            base_url = self.construct_url()
            print(base_url)
            # Zyte proxies
            proxies = {
                #"http": "http://9c9523aa9eda4426bb2b224187fe21da:@proxy.crawlera.com:8011/",
                #"https": "http://9c9523aa9eda4426bb2b224187fe21da:@proxy.crawlera.com:8011/",
                #"b0dfd592769e41d89f698d4388cfe576"
                "http": "http://b0dfd592769e41d89f698d4388cfe576:@proxy.crawlera.com:8011/",
                "https": "http://b0dfd592769e41d89f698d4388cfe576:@proxy.crawlera.com:8011/",
            }

            #response = requests.get(base_url, proxies=proxies, verify='C:\zyte-ca.crt')

            response = requests.get(base_url, proxies=proxies, verify='/Users/haydenchurch/Downloads/zyte-ca.crt')

            soup = BeautifulSoup(response.text, 'html.parser')
            for res in soup.select("h3.gs_rt"):
                try:
                    article_title = res.text
                    article_link = res.a["href"]

                    # killing myself if it still doesn't work
                    paper = Paper(title=article_title, link=article_link)
                    paper.save()
                except Exception as e:
                    # Handle any exceptions
                    pass

            # Parent element of containers that have paper title/links
            # If there's no longer such element, then all available pages have been scraped.
            if not soup.select("div.gs_ri"):
                ss = ScrapingStatus(status=1)
                ss.save()
                break

            # Doesn't work with 20 results per page, so going with 10 for now
            self.page += 10

    def construct_url(self):
        # Use quote only if the query contains spaces
        formatted_query = quote(self.query) if ' ' in self.query else self.query
        return f"https://scholar.google.com/scholar?start={self.page}&q={formatted_query}&hl=en&as_sdt=0,5"
