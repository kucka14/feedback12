from django.urls import path

from . import views

urlpatterns = [
	path('', views.index, name='index'),
	path('terms_conditions', views.terms_conditions, name='terms_conditions'),
	path('privacy_policy', views.privacy_policy, name='privacy_policy'),
	path('cookies_policy', views.cookies_policy, name='cookies_policy'),
]
