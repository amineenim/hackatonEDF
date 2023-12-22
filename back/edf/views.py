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
    serializer = TypologieSerializer(typologies, many=True)
    if serializer.data is not None:
        if len(serializer.data) > 0:
            return Response(serializer.data, status=200)
        else:
            return Response({'message': 'no projects found, empty querySet', 'success': True}, status=200)
    else:
        return Response({'message': 'something went wrong !', 'success': False}, 400)


@api_view(['GET'])
def getAllEcogestes(request):
    ecogestes = Ecogestes.objects.all()
    serializer = EcogestesSerializer(ecogestes, many=True)
    if serializer.data is not None:
        if len(serializer.data) > 0:
            return Response(serializer.data, status=200)
        else:
            return Response({'message': 'no projects found, empty querySet', 'success': True}, status=200)
    else:
        return Response({'message': 'something went wrong !', 'success': False}, 400)


@api_view(['GET'])
def getAllUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    if serializer.data is not None:
        if len(serializer.data) > 0:
            return Response(serializer.data, status=200)
        else:
            return Response({'message': 'no projects found, empty querySet', 'success': True}, status=200)
    else:
        return Response({'message': 'something went wrong !', 'success': False}, 400)


@api_view(['POST'])
def add_new_user(request):
    data = request.data
    serializer = UserSerializer(data=data)
    if serializer.is_valid():
        new_user = serializer.save()
        apiResponse = {'message': 'project ' + new_user.title + ' created successefully', 'success': True}
        return Response(apiResponse, status=201)
    else:
        errors = serializer.errors
        errors_to_render = []
        for key in errors.keys():
            errors_to_render.append({key: errors[key]})
        apiResponse = {'message': 'form errors', 'success': True, 'errors': errors_to_render}
        return Response(apiResponse)
