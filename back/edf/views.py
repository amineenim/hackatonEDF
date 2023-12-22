from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from .models import Typologie, Ecogestes, User
from .serializers import TypologieSerializer, EcogestesSerializer, UserSerializer


@api_view(['GET'])
def index(request):
    return Response({f"success": 'setup was successefull'})


@api_view(['GET'])
def getAllTypologie(request):

    typologies = Typologie.objects.all()
    # serialize project objects returned in the queryset
    serializer = TypologieSerializer(typologies, many=True)
    if serializer.data is not None:
        if len(serializer.data) > 0:
            return Response(serializer.data, status=200)
        else:
            return Response({'message': 'no projects found, empty querySet', 'success': True}, status=200)
    else:
        return Response({'message': 'something went wrong !', 'success': False}, 400)
