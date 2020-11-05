from django.urls import include, path
from django.conf.urls import url
from rest_framework import routers
from blogsApi.api import *


router = routers.DefaultRouter()
router.register('api/collections', CollectionViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^(?P<pk>\d+)$', BlogPostRudView.as_view(), name='post-rud')
] 

# router.urls