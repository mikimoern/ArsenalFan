from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import News, Video, Player, Table
from .serializers import (
    NewsSerializer,
    VideoSerializer,
    PlayerSerializer,
    TableSerializer,
)


class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.select_related("category").all().order_by("-id")
    serializer_class = NewsSerializer
    lookup_field = "slug"  # Ищем по полю slug

    @action(detail=False, methods=["get"])
    def latest(self, request):
        latest_news = News.objects.all().order_by("-create_date")[:4]
        serializer = self.get_serializer(latest_news, many=True)
        return Response(serializer.data)


class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all().order_by("-id")
    serializer_class = VideoSerializer

    @action(detail=False, methods=["get"])
    def latest(self, request):
        latest_videos = Video.objects.all().order_by("-id")[:3]
        serializer = self.get_serializer(latest_videos, many=True)
        return Response(serializer.data)


class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer


class TableViewSet(viewsets.ModelViewSet):
    queryset = Table.objects.all().order_by("-points", "-difference")
    serializer_class = TableSerializer
