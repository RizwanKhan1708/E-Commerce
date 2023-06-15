from django.db import models
from django.contrib.auth.models import User

class vendor(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    address = models.TextField(null=True)

    def __str__(self):
        return self.user.username

# Product category
class ProductCategory(models.Model):
    title = models.CharField(max_length=200)
    detail = models.TextField(null=True)

    def __str__(self):
        return self.title

# products

class Products(models.Model):
    category = models.ForeignKey(ProductCategory,on_delete=models.SET_NULL,null=True,related_name='category_product')
    vendor = models.ForeignKey(vendor,on_delete=models.SET_NULL,null=True)
    title = models.CharField(max_length=200)
    slug = models.CharField(max_length=300,unique=True,null=True)
    detail = models.TextField(null=True)
    price = models.FloatField(default=0.00)
    tags = models.TextField(null=True)
    image = models.ImageField(upload_to='product_imgs/',null=True)

    def __str__(self):
        return self.title

    def tag_list(self):
        taglist = self.tags.split(',')
        return taglist


# customer Model

class Customer(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    mobile = models.PositiveBigIntegerField(unique=True)

    def __str__(self):
        return self.user.username

# Order Model
class Order(models.Model):
    cutomer=models.ForeignKey(Customer,on_delete=models.CASCADE)
    order_time=models.DateTimeField(auto_now_add=True)


# Order item Model
class OrderItems(models.Model):
    order=models.ForeignKey(Order,on_delete=models.CASCADE,related_name='order_items')
    product=models.ForeignKey(Products,on_delete=models.CASCADE)

    def __str__(self):
        return self.product.title


# for rating and reviews
class ProductRating(models.Model):
    cutomer = models.ForeignKey(Customer, on_delete=models.CASCADE,related_name='rating_customers')
    product = models.ForeignKey(Products, on_delete=models.CASCADE,related_name='product_rating')
    rating = models.IntegerField()
    reviews = models.TextField()
    add_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.rating} - {self.reviews}'


# Product Images
class ProductImage(models.Model):
    product = models.ForeignKey(Products,on_delete=models.CASCADE,related_name='product_imgs')
    image = models.ImageField(upload_to='product_imgs/',null=True)

    def __str__(self):
        return self.image.url

