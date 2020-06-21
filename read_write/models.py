from django.db import models

# Create your models here.

class Story(models.Model):
	title = models.CharField(max_length=100,default='Untitled')
	author = models.CharField(max_length=100,default='Anonymous')
	text = models.TextField(default='')
	description = models.TextField(default='')
	email = models.CharField(max_length=50,default='')
	graded = models.BooleanField(default=False)
	grade = models.IntegerField(default=0)
	comments = models.TextField(default='')
	
	def __str__(self):
		return self.title
