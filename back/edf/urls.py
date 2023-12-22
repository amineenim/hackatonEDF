from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('Typologie/', views.getAllTypologie, name='Typologie'),
    path('Ecogestes/', views.getAllEcogestes, name='Ecogestes'),
    path('Users/', views.getAllUsers, name='Users'),
    path('new-user/', views.add_new_user, name='new-user'),
]
