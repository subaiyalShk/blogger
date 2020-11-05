from django.shortcuts import render
from rest_framework import viewsets

from blogsApi.serializers import *
from blogsApi.models import *
# Create your views here.

class CollectionViewSet(viewsets.ModelViewSet):
    queryset = Collection.objects.all().order_by('name')
    serializer_class = CollectionSerializer
