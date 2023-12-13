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


# class Author(models.Model):
#     AuthorID = models.IntegerField(primary_key=True)
#     Name = models.CharField(max_length=100)
#     Affiliation = models.CharField(max_length=100)
#     Email = models.CharField(max_length=100)

# class Company(models.Model):
#     CompanyID = models.IntegerField(primary_key=True)
#     CompanyName = models.CharField(max_length=100)
#     HeadquartersLocation = models.CharField(max_length=255)
#     Industry = models.CharField(max_length=50)

# class Inventor(models.Model):
#     InventorID = models.IntegerField(primary_key=True)
#     FirstName = models.CharField(max_length=50)
#     LastName = models.CharField(max_length=50)
#     Email = models.CharField(max_length=100)

# class Patent(models.Model):
#     PatentID = models.IntegerField(primary_key=True)
#     Title = models.CharField(max_length=255)
#     InventorID = models.ForeignKey(Inventor, on_delete=models.CASCADE)
#     FiledDate = models.DateField()

# class Product(models.Model):
#     ProductID = models.IntegerField(primary_key=True)
#     ProductName = models.CharField(max_length=150)
#     CompanyID = models.ForeignKey(Company, on_delete=models.CASCADE)
#     ReleaseDate = models.DateField()

# class JournalConference(models.Model):
#     JournalConferenceID = models.IntegerField(primary_key=True)
#     Name = models.CharField(max_length=150)
#     Publisher = models.CharField(max_length=100)
#     ISSN_ISBN = models.CharField(max_length=20)
#     ImpactFactor = models.DecimalField(max_digits=5, decimal_places=2)

# class FieldOfStudy(models.Model):
#     FieldOfStudyID = models.IntegerField(primary_key=True)
#     FieldName = models.CharField(max_length=100)

# class PatentFieldOfStudy(models.Model):
#     PatentID = models.ForeignKey(Patent, on_delete=models.CASCADE)
#     FieldOfStudyID = models.ForeignKey(FieldOfStudy, on_delete=models.CASCADE)