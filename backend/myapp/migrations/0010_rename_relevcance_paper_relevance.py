# Generated by Django 4.2.7 on 2023-12-12 23:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0009_delete_record_paper_relevcance'),
    ]

    operations = [
        migrations.RenameField(
            model_name='paper',
            old_name='relevcance',
            new_name='relevance',
        ),
    ]