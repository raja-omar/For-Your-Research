# Generated by Django 4.2.7 on 2023-12-13 00:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0012_paper_cited_by_link'),
    ]

    operations = [
        migrations.AddField(
            model_name='paper',
            name='versions_link',
            field=models.URLField(default='http://example.com'),
        ),
        migrations.AddField(
            model_name='paper',
            name='versions_number',
            field=models.IntegerField(default=0),
        ),
    ]
