# Generated by Django 3.0.6 on 2020-06-27 16:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('read_write', '0007_auto_20200622_0634'),
    ]

    operations = [
        migrations.AddField(
            model_name='story',
            name='feedback_sent',
            field=models.BooleanField(default=False),
        ),
    ]