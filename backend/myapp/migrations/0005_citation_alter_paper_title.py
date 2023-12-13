# Generated by Django 4.2.7 on 2023-11-23 13:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0004_paper_delete_scrapeddata'),
    ]

    operations = [
        migrations.CreateModel(
            name='Citation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=500)),
            ],
        ),
        migrations.AlterField(
            model_name='paper',
            name='title',
            field=models.CharField(max_length=500),
        ),
    ]