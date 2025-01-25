from django.db import models
from django.utils.text import slugify


# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class News(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True, blank=True)
    short_content = models.CharField(max_length=255)
    full_content = models.TextField()
    image = models.ImageField(upload_to="news_images/")
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name="news",
    )
    create_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title


class Video(models.Model):
    title = models.CharField(max_length=200)
    # video_file = models.CharField(max_length=200)
    video_file = models.FileField(upload_to="videos/")
    duration = models.CharField(max_length=50)

    def __str__(self):
        return self.title


class Player(models.Model):
    name = models.CharField(max_length=100)
    number = models.IntegerField()
    position = models.CharField(max_length=50)
    appearances = models.IntegerField()
    minutes = models.IntegerField()
    goals = models.IntegerField()
    photo = models.ImageField(upload_to="player_photos/")

    def __str__(self):
        return self.name


class Table(models.Model):
    team = models.CharField(max_length=100)
    played = models.IntegerField()
    won = models.IntegerField()
    drawn = models.IntegerField()
    lost = models.IntegerField()
    goalsFor = models.IntegerField()
    goalsAgainst = models.IntegerField()
    difference = models.IntegerField(blank=True, null=True)
    points = models.IntegerField()

    def __str__(self):
        return self.team

    def save(self, *args, **kwargs):
        self.difference = self.goalsFor - self.goalsAgainst
        super().save(*args, **kwargs)
