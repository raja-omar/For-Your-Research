import requests
from bs4 import BeautifulSoup
from myapp.models import Paper
from urllib.parse import quote

class Scraper:
    def __init__(self, query):
        self.query = query
        self.page = 0

    def scrape_and_save_data(self):
        while True:
            base_url = self.construct_url()

            # Zyte proxies
            proxies = {
                "http": "http://b0dfd592769e41d89f698d4388cfe576:@proxy.crawlera.com:8011/",
                "https": "http://b0dfd592769e41d89f698d4388cfe576:@proxy.crawlera.com:8011/",
            }

            # Full path to the CA certificate
            ca_cert_path = '/Users/rajamuhammedomar/Downloads/zyte-ca.crt'

            try:
                response = requests.get(base_url, proxies=proxies, verify=ca_cert_path)
                response.raise_for_status()

                soup = BeautifulSoup(response.text, 'html.parser')
                citedNumber = self.extract_cited_by_number(soup)
                citedlink = self.extract_cited_by_link(soup)
                relatedArticles = self.extract_related_articles_link(soup)
                all_versions_link, all_versions_number = self.extract_all_versions_link_and_number(soup)
                

                for res in soup.select("h3.gs_rt"):
                    try:
                        article_title = res.text
                        article_link = res.a["href"]

                        paper = Paper(title=article_title, link=article_link, cited_by_link=citedlink, cited_by_number =citedNumber, version_link=all_versions_link, version_number = all_versions_number, related_articles_link= relatedArticles)
                        paper.save()
                    except Exception as e:
                        print(f"Error processing paper: {e}")

                # Parent element of containers that have paper title/links
                if not soup.select("div.gs_ri"):
                    break

                self.page += 10

            except requests.RequestException as e:
                print(f"Request error: {e}")
                # Handle the error (e.g., retry, raise, etc.)

    def construct_url(self):
        formatted_query = quote(self.query) if ' ' in self.query else self.query
        return f"https://scholar.google.com/scholar?start={self.page}&q={formatted_query}&hl=en&as_sdt=0,5"

    @staticmethod
    def extract_cited_by_number(soup):
        cited_by_tag = soup.find('a', href=True, text=lambda t: t and 'Cited by' in t)
        if cited_by_tag:
            # Extract the number from the text (assuming it's the last part)
            cited_by_text_parts = cited_by_tag.get_text().split()
            cited_by_number = int(cited_by_text_parts[-1]) if cited_by_text_parts else 0
            return cited_by_number
        return 0  # Return 0 if 'Cited by' is not found


    @staticmethod
    def extract_related_articles_link(soup):
        related_articles_tag = soup.find('a', href=True, text='Related articles')
        if related_articles_tag:
            related_articles_link = related_articles_tag['href']
            return related_articles_link
        return None

    @staticmethod
    def extract_all_versions_link_and_number(soup):
        all_versions_tag = soup.find('a', href=True, text=lambda t: t and 'All' in t and 'versions' in t)
        if all_versions_tag:
            # Extract the link and number from the text
            all_versions_link = all_versions_tag['href']
            all_versions_text_parts = all_versions_tag.get_text().split()
            all_versions_number = int(all_versions_text_parts[1]) if len(all_versions_text_parts) > 1 else 0
            return all_versions_link, all_versions_number
        return None, 0  # Return None if 'All versions' is not found

    @staticmethod
    def extract_cited_by_link(soup):
        cited_by_tag = soup.find('a', href=True, text=lambda t: t and 'Cited by' in t)
        if cited_by_tag:
            # Check if the link is present in the 'data-href' attribute
            cited_by_link = cited_by_tag.get('data-href') or cited_by_tag.get('href')
            return cited_by_link
        return None