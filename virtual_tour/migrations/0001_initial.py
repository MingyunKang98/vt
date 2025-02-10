# Generated by Django 5.1.6 on 2025-02-10 10:41

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('projects', '0002_alter_project_owner'),
    ]

    operations = [
        migrations.CreateModel(
            name='Panorama',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='panoramas/')),
                ('date', models.DateField(auto_now_add=True)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='panoramas', to='projects.project')),
            ],
        ),
    ]
