# Generated by Django 3.1.6 on 2021-04-12 01:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Job',
            fields=[
                ('code', models.CharField(default='', max_length=50, primary_key=True, serialize=False, unique=True)),
                ('description', models.CharField(default='', max_length=100)),
                ('hourly_rate', models.FloatField(blank=True, default=None, null=True)),
                ('maxhoursperday', models.IntegerField(default=0)),
            ],
            options={
                'ordering': ['code'],
            },
        ),
        migrations.CreateModel(
            name='Machine',
            fields=[
                ('machine_code', models.CharField(default='', max_length=50, primary_key=True, serialize=False, unique=True)),
                ('description', models.CharField(default='', max_length=100)),
                ('hourly_rent', models.FloatField(blank=True, default=None, null=True)),
                ('maxhoursperday', models.IntegerField(default=0)),
            ],
            options={
                'ordering': ['machine_code'],
            },
        ),
        migrations.CreateModel(
            name='Timecard',
            fields=[
                ('sitecode', models.CharField(default='', max_length=50, primary_key=True, serialize=False, unique=True)),
                ('contractor_name', models.CharField(default='', max_length=75)),
                ('total_hours', models.IntegerField(default=0)),
                ('total_amount', models.FloatField(blank=True, default=None, null=True)),
                ('status', models.CharField(default='', max_length=75)),
            ],
            options={
                'ordering': ['sitecode'],
            },
        ),
    ]
