# Generated by Django 4.2.7 on 2023-11-23 11:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='scrapeddata',
            name='link',
            field=models.URLField(default='http://example.com'),
        ),
    ]
