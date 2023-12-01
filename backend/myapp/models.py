from django.db import models

class Paper(models.Model):
    title = models.CharField(max_length=500)
    link = models.URLField(default='http://example.com')
    
    def __str__(self):
        return self.title

class Citation(models.Model):
    title = models.CharField(max_length=500)

    def __str__(self):
        return self.title

class ScrapingStatus(models.Model):
    status = models.IntegerField()