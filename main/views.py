from django.shortcuts import render
from . import serializers
from rest_framework import generics,permissions,viewsets,pagination
from . import models

class VendorList(generics.ListCreateAPIView):
    queryset = models.vendor.objects.all()
    serializer_class = serializers.VendorSerializer
    # permission_classes = [permissions.IsAuthenticated]


class VendorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.vendor.objects.all()
    serializer_class = serializers.VendorDetailSerializer
    # permission_classes = [permissions.IsAuthenticated]

class ProductList(generics.ListCreateAPIView):
    queryset = models.Products.objects.all()
    serializer_class = serializers.ProductListSerializer
    pagination_class = pagination.PageNumberPagination

    # def get_queryset(self):
    #     qs = super().get_queryset()
    #     category=self.request.GET['category']
    #     category=models.ProductCategory.objects.get(id=category)
    #     qs =qs.filter(category=category)
    #     return qs

class RelatedProductList(generics.ListCreateAPIView):
    queryset = models.Products.objects.all()
    serializer_class = serializers.ProductListSerializer
    # pagination_class = pagination.PageNumberPagination

    def get_queryset(self):
        qs = super().get_queryset()
        product_id=self.kwargs['pk']
        product = models.Products.objects.get(id=product_id)
        qs =qs.filter(category=product.category).exclude(id=product_id)
        return qs


class TagProductList(generics.ListCreateAPIView):
    queryset = models.Products.objects.all()
    serializer_class = serializers.ProductListSerializer
    pagination_class = pagination.PageNumberPagination

    def get_queryset(self):
        qs = super().get_queryset()
        tag=self.kwargs['tag']
        qs =qs.filter(tags__icontains=tag)
        return qs


class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Products.objects.all()
    serializer_class = serializers.ProductDetailSerializer
    # permission_classes = [permissions.IsAuthenticated]


# customer
class CustomerList(generics.ListCreateAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerSerializer
    # permission_classes = [permissions.IsAuthenticated]

class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerDetailSerializer
    # permission_classes = [permissions.IsAuthenticated]

# order

class OrderList(generics.ListCreateAPIView):
    queryset = models.Order.objects.all()
    serializer_class = serializers.OrderSerializer
    # permission_classes = [permissions.IsAuthenticated]

class OrderDetail(generics.ListAPIView):
    queryset = models.OrderItems.objects.all()
    serializer_class = serializers.OrderDetailSerializer

    def get_queryset(self):
        order_id=self.kwargs['pk']
        order=models.Order.objects.get(id=order_id)
        order_items=models.OrderItems.objects.filter(order=order)
        return order_items
    # permission_classes = [permissions.IsAuthenticated]

class ProductRatingViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ProductRatingSerializer
    queryset = models.ProductRating.objects.all()


class CatagoriesList(generics.ListCreateAPIView):
    queryset = models.ProductCategory.objects.all()
    serializer_class = serializers.CatagoriesListSerializer
    # permission_classes = [permissions.IsAuthenticated]

class CatagoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.ProductCategory.objects.all()
    serializer_class = serializers.CatagoriesDetailSerializer
    # permission_classes = [permissions.IsAuthenticated]


# class OrderItemList(generics.ListCreateAPIView):
#     queryset = models.OrderItems.objects.all()
#     serializer_class = serializers.OrderItemSerializer
#     # permission_classes = [permissions.IsAuthenticated]
#
# class OrderItemDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = models.OrderItems.objects.all()
#     serializer_class = serializers.OrderItemDetailSerializer
    # permission_classes = [permissions.IsAuthenticated]