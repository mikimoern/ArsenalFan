from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import NewsViewSet, VideoViewSet, PlayerViewSet, TableViewSet

router = DefaultRouter()
router.register(r"news", NewsViewSet, basename="news")
router.register(r"videos", VideoViewSet, basename="video")
router.register(r"players", PlayerViewSet, basename="player")
router.register(r"table", TableViewSet, basename="table")

urlpatterns = [
    path("", include(router.urls)),
]
