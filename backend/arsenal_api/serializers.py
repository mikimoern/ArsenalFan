from rest_framework import serializers
from .models import Category, News, Video, Player, Table


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["name"]

    def to_representation(self, instance):
        return instance.name


class NewsSerializer(serializers.ModelSerializer):
    create_date = serializers.SerializerMethodField()
    update_date = serializers.SerializerMethodField()
    category = CategorySerializer(read_only=True)

    class Meta:
        model = News
        fields = [
            "id",
            "title",
            "slug",
            "short_content",
            "full_content",
            "image",
            "create_date",
            "update_date",
            "category",
        ]

    def get_create_date(self, obj):
        return obj.create_date.strftime("%Y-%m-%d")  # Формат YYYY-MM-DD

    def get_update_date(self, obj):
        return obj.update_date.strftime("%Y-%m-%d")


class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = "__all__"


class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = "__all__"


class TableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Table
        fields = "__all__"
