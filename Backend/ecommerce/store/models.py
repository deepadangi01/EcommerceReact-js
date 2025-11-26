from django.db import models

# Create your models here.
class Product(models.Model):
    id = models.IntegerField(primary_key='true')
    product_name = models.CharField(max_length=255)
    category = models.CharField( max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    offer = models.CharField(max_length=50)
    img = models.URLField((""), max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.product_name