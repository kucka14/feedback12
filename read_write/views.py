from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.core.mail import send_mail,send_mass_mail

from .forms import WriteForm,ReadForm

from read_write.models import Story

# Create your views here.

def index(request):

	story_list = Story.objects.filter(graded=False).order_by('submit_date')
	write_form = WriteForm()
	read_form = ReadForm()
	message = {'message1':{'top':'Submit a story for feedback, or find a story to read.','middle':'Get feedback on your story in 12 hours or less.','bottom':'Comments will be emailed to you. No need to create an account.'},
			   'message2':[['Submit a poem, essay, or short story.','"There is no greater agony than bearing an untold story inside you."','-Maya Angelou'],['Submit a poem, essay, or short story.','"If you wanted to make sure that Dostoyevsky was a writer, would you really ask him for his membership card?"','-Mikhail Bulgakov']],
			   'message3':{'top':'Success!','middle':'Feedback will be emailed to you in 12 hours or less.','bottom':'Submit another story, or find one to read.'},
			   'message4':{'top':'Success!','middle':'Your feedback will be emailed directly to the author.','bottom':'Find another story to read, or submit your own.'}
			   }
	now_story = {}

	if request.method == 'POST':
		if 'write_submit' in request.POST:
			write_form = WriteForm(request.POST)
			if write_form.is_valid():
				title = write_form.cleaned_data['title']
				author = write_form.cleaned_data['author']
				text = write_form.cleaned_data['text']
				description = write_form.cleaned_data['description']
				email = write_form.cleaned_data['email']
				s = Story(title=title,author=author,text=text,description=description,email=email)
				s.save()
				try:
					send_mail('Story Submitted','A new story by %s was just submitted.\n\nTitle: %s\n\nText: %s\n\nDescription: %s\n\nEmail: %s\n\nDelete Story URL: http://www.feedback12.com/delete/ee38f6dbdacffcb89199861a810a8a9a%s' % (s.author,s.title,s.text,s.description,s.email,s.id),'feedback12help@gmail.com',['feedback12help@gmail.com'],fail_silently=True)
				except:
					pass
				request.session['start_shift'] = 'leftmiddle'
				request.session['now_story'] = {'title':s.title[0:20],'author':s.author[0:20],'description':s.description[0:50]}
				return redirect('/')
			else:
				start_shift = 'popleft'
				
		if 'read_submit' in request.POST:
			read_form = ReadForm(request.POST)
			if read_form.is_valid():
				grade = read_form.cleaned_data['grade']
				comments = read_form.cleaned_data['comments']
				storyid = read_form.cleaned_data['storyid']
				s = Story.objects.get(id=storyid)
				s.grade2 = grade
				s.comments2 = comments
				try:
					emailtuple = (
						('Story Graded','The story %s was just graded.' % (s.title),'feedback12help@gmail.com',['feedback12help@gmail.com']),
						('Story Feedback (FB-12)',"Feedback from an anonymous user is shown below. If the feedback is inappropriate in any way, please reply to this email with your complaint.\n\nStory Title: %s\n\nGrade: %s/10\n\nComments:\n\t%s\n\nHappy? Upset? Confused? Now it's your turn to give us feedback. Feel free to reply to this email with any thoughts or comments about our service. (These comments will go to Feeback12 - not to the user who graded your story.)" % (s.title,grade,comments),'feedback12help@gmail.com',[s.email])
					)
					send_mass_mail(emailtuple,fail_silently=False)
					s.feedback_sent = True
				except:
					s.feedback_sent = False
				s.graded = True
				s.save()
				request.session['start_shift'] = 'stayright'
				request.session['now_story'] = {'title':s.title[0:20],'grade':s.grade2,'comments':s.comments2[0:50]}
				return redirect('/')
			else:
				start_shift = 'popright'
				
	else:
		
		start_shift = request.session.get('start_shift')
		now_story = request.session.get('now_story')
		
		try:
			del request.session['start_shift']
		except KeyError:
			pass
			
		try:
			del request.session['now_story']
		except KeyError:
			pass
			
	return render(request, 'read_write/index.html',{
					'write_form':write_form,
					'read_form':read_form,
					'start_shift':start_shift,
					'story_list':story_list,
					'message':message,
					'now_story':now_story,
				})
				
def del_story(request, titleline):
    if titleline[0:32] == 'ee38f6dbdacffcb89199861a810a8a9a':
        try:
            idtag = int(titleline[32:])
            del_story = Story.objects.get(id=idtag)
            del_story.delete()
            return HttpResponse('The story %s has been deleted.' %(del_story.title))
        except:
            return HttpResponse('The story could not be deleted.')
    else:
        return HttpResponse('That is not a valid url for this website.')
				
def terms_conditions(request):
	return render(request,'read_write/terms_conditions.html')
	
def privacy_policy(request):
	return render(request,'read_write/privacy_policy.html')
	
def cookies_policy(request):
	return render(request,'read_write/cookies_policy.html')

def robots(request):
	return render(request, 'read_write/robots.txt')

def sitemap(request):
	return render(request, 'read_write/sitemap.xml')	

















