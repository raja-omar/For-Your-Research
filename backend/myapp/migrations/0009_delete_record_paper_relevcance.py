# Generated by Django 4.2.7 on 2023-12-12 23:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0008_record'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Record',
        ),
        migrations.AddField(
            model_name='paper',
            name='relevcance',
            field=models.FloatField(default=0),
        ),
    ]
