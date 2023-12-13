from django.db import models

class Paper(models.Model):
    title = models.CharField(max_length=500)
    link = models.URLField(default='http://example.com')
    relevance = models.FloatField(default=0)
    cited_by_number = models.IntegerField(default=0)
    cited_by_link = models.URLField(default='http://example.com')
    versions_link = models.URLField(default='http://example.com')
    versions_number = models.IntegerField(default=0)

    def __str__(self):
        return self.title



class Citation(models.Model):
    title = models.CharField(max_length=500)

    def __str__(self):
        return self.title

class ScrapingStatus(models.Model):
    status = models.IntegerField()