from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Typologie, Ecogestes, User


class TypologieSerializer(ModelSerializer):
    name = serializers.CharField(max_length=255)
    description = serializers.CharField(style={'base_template': 'textarea.html'})

    class Meta:
        model = Typologie
        fields = '__all__'


class EcogestesSerializer(ModelSerializer):
    description = serializers.CharField(style={'base_template': 'textarea.html'})
    id_type = serializers.PrimaryKeyRelatedField(queryset=Typologie.objects.all())
    is_true = serializers.BooleanField()
    correction = serializers.CharField(style={'base_template': 'textarea.html'}, allow_blank=True, required=False)

    class Meta:
        model = Ecogestes
        fields = '__all__'


class UserSerializer(ModelSerializer):
    score = serializers.IntegerField(default=0)

    class Meta:
        model = User
        fields = '__all__'
