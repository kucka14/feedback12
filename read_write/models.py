from django.db import models

# Create your models here.

class Story(models.Model):
	title = models.CharField(max_length=100,default='---')
	author = models.CharField(max_length=100,default='---')
	text = models.TextField(default='---')
	description = models.TextField(default='---')
	email = models.CharField(max_length=50,default='---')
	submit_date = models.DateTimeField(auto_now_add=True)
	graded = models.BooleanField(default=False)
	feedback_sent = models.BooleanField(default=False)
	grade = models.IntegerField(default=0)
	comments = models.TextField(default='---')
	
	def __str__(self):
		return f'{self.title}({self.id})'
