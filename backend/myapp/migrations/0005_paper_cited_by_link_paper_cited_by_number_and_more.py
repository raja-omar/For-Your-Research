# Generated by Django 4.2.7 on 2023-12-11 22:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0004_author_papercitation_paperversion_patent_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='paper',
            name='cited_by_link',
            field=models.URLField(default='http://example.com'),
        ),
        migrations.AddField(
            model_name='paper',
            name='cited_by_number',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='paper',
            name='version_link',
            field=models.URLField(default='http://example.com'),
        ),
        migrations.AddField(
            model_name='paper',
            name='version_number',
            field=models.IntegerField(default=0),
        ),
    ]
