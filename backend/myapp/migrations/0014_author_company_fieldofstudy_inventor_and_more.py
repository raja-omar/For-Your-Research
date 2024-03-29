# Generated by Django 4.2.7 on 2023-12-13 06:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0013_paper_versions_link_paper_versions_number'),
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('AuthorID', models.IntegerField(primary_key=True, serialize=False)),
                ('Name', models.CharField(max_length=100)),
                ('Affiliation', models.CharField(max_length=100)),
                ('Email', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Company',
            fields=[
                ('CompanyID', models.IntegerField(primary_key=True, serialize=False)),
                ('CompanyName', models.CharField(max_length=100)),
                ('HeadquartersLocation', models.CharField(max_length=255)),
                ('Industry', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='FieldOfStudy',
            fields=[
                ('FieldOfStudyID', models.IntegerField(primary_key=True, serialize=False)),
                ('FieldName', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Inventor',
            fields=[
                ('InventorID', models.IntegerField(primary_key=True, serialize=False)),
                ('FirstName', models.CharField(max_length=50)),
                ('LastName', models.CharField(max_length=50)),
                ('Email', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='JournalConference',
            fields=[
                ('JournalConferenceID', models.IntegerField(primary_key=True, serialize=False)),
                ('Name', models.CharField(max_length=150)),
                ('Publisher', models.CharField(max_length=100)),
                ('ISSN_ISBN', models.CharField(max_length=20)),
                ('ImpactFactor', models.DecimalField(decimal_places=2, max_digits=5)),
            ],
        ),
        migrations.CreateModel(
            name='Patent',
            fields=[
                ('PatentID', models.IntegerField(primary_key=True, serialize=False)),
                ('Title', models.CharField(max_length=255)),
                ('FiledDate', models.DateField()),
                ('InventorID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myapp.inventor')),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('ProductID', models.IntegerField(primary_key=True, serialize=False)),
                ('ProductName', models.CharField(max_length=150)),
                ('ReleaseDate', models.DateField()),
                ('CompanyID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myapp.company')),
            ],
        ),
        migrations.CreateModel(
            name='PatentFieldOfStudy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('FieldOfStudyID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myapp.fieldofstudy')),
                ('PatentID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myapp.patent')),
            ],
        ),
    ]
