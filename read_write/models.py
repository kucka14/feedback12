from django.db import models

# Create your models here.

class Story(models.Model):
	title = models.CharField(max_length=100,default='Untitled')
	author = models.CharField(max_length=100,default='Anonymous')
	text = models.TextField(default='')
	graded = models.BooleanField(default=False)
	grade = models.IntegerField(default=0)
	comments = models.CharField(max_length=200,default='')
	
	def __str__(self):
		return self.title
