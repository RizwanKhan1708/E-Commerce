# Generated by Django 3.2.8 on 2023-06-20 07:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0010_alter_customer_mobile'),
    ]

    operations = [
        migrations.AddField(
            model_name='orderitems',
            name='price',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10),
        ),
        migrations.AddField(
            model_name='orderitems',
            name='quantity',
            field=models.IntegerField(default=1),
        ),
    ]
