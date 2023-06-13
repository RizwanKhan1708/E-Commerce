from django.urls import path
from . import views
from rest_framework import routers

router=routers.DefaultRouter()
router.register('productrating',views.ProductRatingViewSet)

urlpatterns = [
#  Vendor
    path('vendors/',views.VendorList.as_view()),
    path('vendor/<int:pk>/', views.VendorDetail.as_view()),

#  Categories
    path('categories/',views.CatagoriesList.as_view()),
    path('category/<int:pk>/', views.CatagoryDetail.as_view()),

#  Products
    path('products/',views.ProductList.as_view()),
    path('products/<str:tag>',views.TagProductList.as_view()),
    path('product/<int:pk>/', views.ProductDetail.as_view()),
    path('related_products/<int:pk>/',views.RelatedProductList.as_view()),

#  Customer
    path('customers/',views.CustomerList.as_view()),
    path('customer/<int:pk>/', views.CustomerDetail.as_view()),
    path('customer/login/', views.customer_login, name='customer_login'),

# Order
    path('orders/',views.OrderList.as_view()),
    path('order/<int:pk>/', views.OrderDetail.as_view()),

# # order item
#     path('orderitems',views.OrderItemList.as_view()),
#     path('orderitem/<int:pk>/', views.OrderItemDetail.as_view()),


]
urlpatterns += router.urls