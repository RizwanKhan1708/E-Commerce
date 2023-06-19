from rest_framework import serializers
from . import models
class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model= models.vendor
        fields = ['id','user', 'address']
        # depth = 1
    def __init__(self, *args, **kwargs):
        super(VendorSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class VendorDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.vendor
        fields = ['id','user', 'address']
        # depth = 1
    def __init__(self, *args, **kwargs):
        super(VendorDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class ProductListSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Products
        fields = ['id','category', 'vendor', 'title', 'slug', 'tag_list', 'detail', 'price', 'product_rating', 'image']
        # depth = 1
    def __init__(self, *args, **kwargs):
        super(ProductListSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductImage
        fields = ['id', 'product', 'image']

class ProductDetailSerializer(serializers.ModelSerializer):
    product_rating=serializers.StringRelatedField(many=True,read_only=True)
    product_imgs = ProductImageSerializer(many=True,read_only=True)
    class Meta:
        model = models.Products
        fields = ['id','category', 'vendor','title','slug','tag_list','detail','price','product_rating','product_imgs','image']
        # depth = 1
    def __init__(self, *args, **kwargs):
        super(ProductDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model= models.Customer
        fields = ['id','user', 'mobile']
        # depth = 1
    def __init__(self, *args, **kwargs):
        super(CustomerSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class CustomerDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Customer
        fields = ['id','user', 'mobile']
        # depth = 1
    def __init__(self, *args, **kwargs):
        super(CustomerDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model= models.Order
        fields = ['id','cutomer', 'order_time']
        # depth = 1
    def __init__(self, *args, **kwargs):
        super(OrderSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class OrderDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OrderItems
        fields = ['id','order', 'product']
        # depth = 1
    def __init__(self, *args, **kwargs):
        super(OrderDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model= models.OrderItems
        fields = ['id','order', 'product']
        # depth = 1
    def __init__(self, *args, **kwargs):
        super(OrderItemSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class OrderItemDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OrderItems
        fields = ['id','order', 'product']
        # depth = 1
    def __init__(self, *args, **kwargs):
        super(OrderItemDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class ProductRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductRating
        fields = ['id','cutomer', 'product','rating','reviews','add_time']
        # depth = 1
    def __init__(self, *args, **kwargs):
        super(ProductRatingSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class CatagoriesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductCategory
        fields = ['id','title', 'detail']
        # depth = 1
    def __init__(self, *args, **kwargs):
        super(CatagoriesListSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class CatagoriesDetailSerializer(serializers.ModelSerializer):
    product_rating=serializers.StringRelatedField(many=True,read_only=True)
    class Meta:
        model = models.ProductCategory
        fields = ['id','title', 'detail','product_rating']
        # depth = 1
    def __init__(self, *args, **kwargs):
        super(CatagoriesDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

