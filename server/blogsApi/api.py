from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from .serializers import *
from blogsApi.models import *

class CollectionViewSet(viewsets.ModelViewSet):
    queryset = Collection.objects.all()
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class= CollectionSerializer

# class BlogsByCategoryViewSet(viewsets.ModelViewSet):
#     queryset = Blog.objects.get(name=name).blogs.all()
#     permission_classes=[
#         permissions.AllowAny
#     ]
#     serializer_class= CollectionSerializer

class BlogsView(viewsets.ViewSet):
    serializer_class = BlogSerializer

    def get_queryset(self):
        return Blog.objects.all()