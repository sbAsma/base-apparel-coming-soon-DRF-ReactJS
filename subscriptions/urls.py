from django.contrib import admin
from django.urls import path
from .views import SubcriptionList, SubcriptionDetail

app_name = 'subscriptions'

urlpatterns = [
    path('subscriptions/', SubcriptionList.as_view(), name="subscriptions"),
    path('subscriptions/<int:pk>/', SubcriptionDetail.as_view(), name="subscriptions-modify"),
]
