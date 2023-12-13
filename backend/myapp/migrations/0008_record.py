# Generated by Django 4.2.7 on 2023-12-12 19:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0007_scrapingstatus_delete_numberofresults'),
    ]

    operations = [
        migrations.CreateModel(
            name='Record',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('year', models.CharField(max_length=4)),
                ('author', models.CharField(max_length=255)),
                ('publication', models.CharField(max_length=255)),
                ('area_of_research', models.CharField(max_length=255)),
            ],
        ),
    ]
