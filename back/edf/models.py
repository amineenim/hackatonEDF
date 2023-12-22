from django.contrib.auth.models import AbstractUser
from django.db import models


class Typologie(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name


class Ecogestes(models.Model):
    description = models.TextField()
    id_type = models.ForeignKey(Typologie, on_delete=models.CASCADE)
    is_true = models.BooleanField()
    correction = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.description


class User(AbstractUser):
    score = models.IntegerField(default=0)

    def __str__(self):
        return self.username
