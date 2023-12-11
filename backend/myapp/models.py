from django.db import models

class Paper(models.Model):
    title = models.CharField(max_length=500, default="")
    link = models.URLField(default='http://example.com')
    related_articles_link = models.URLField(default='http://example.com')
    year = models.IntegerField(default=0)

class Patent(models.Model):
    title = models.CharField(max_length=500, default="")
    link = models.URLField(default='http://example.com')
    related_patents = models.URLField(default='http://example.com')
    year = models.IntegerField(default=0)
    patent_host =models.CharField(max_length=500, default="")

class PatentCitation(models.Model):
    cited_by_link = models.URLField(default='http://example.com')
    cited_by_number = models.IntegerField(default=0)

class PatentVersion(models.Model):
    version_link = models.URLField(default='http://example.com')
    version_number = models.IntegerField(default=0)   

class Inventor:
    name = models.CharField(max_length=300, default="")
    # forign key = patent

class PaperCitation(models.Model):
    cited_by_link = models.URLField(default='http://example.com')
    cited_by_number = models.IntegerField(default=0)

class PaperVersion(models.Model):
    version_link = models.URLField(default='http://example.com')
    version_number = models.IntegerField(default=0)

class Author(models.Model):
    name = models.CharField(max_length=300, default="")
    # forign key = paper


# Update, delete
class Record(models.Model):
    name = models.CharField(max_length=300, default="")
    year = models.IntegerField(default=0)
    author = models.CharField(max_length=300, default="")
    publication = models.CharField(max_length=300, default="")
    field = models.CharField(max_length=300, default="")

    def __str__(self):
        return self.title

    
