from django.shortcuts import render,redirect
from django.core.mail import send_mail,send_mass_mail

from .forms import WriteForm,ReadForm

from read_write.models import Story

# Create your views here.

def index(request):

	story_list = Story.objects.filter(graded=False).order_by('submit_date')
	write_form = WriteForm()
	read_form = ReadForm()
	message = {'message1':{'top':'Submit a story for feedback, or find a story to read.','middle':'Get feedback on your story in 12 hours or less.','bottom':'Comments will be emailed to you. No need to create an account.'},
			   'message2':[['Submit a poem, essay, or short story.','"Write drunk. Edit sober."','-Ernest Hemingway'],['Submit a poem, essay, or short story.','"If you wanted to make sure that Dostoyevsky was a writer, would you really ask him for his membership card?"','-Mikhail Bulgakov']],
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
					send_mail('Story Submitted','A new story by %s was just submitted.' % (s.author),'feedback12help@gmail.com',['feedback12help@gmail.com'],fail_silently=True)
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
				s.grade = grade
				s.comments = comments
				try:
					emailtuple = (
						('Story Graded','The story %s was just graded.' % (s.title),'feedback12help@gmail.com',['feedback12help@gmail.com']),
						('Story Feedback (FB-12)',"Feedback from an anonymous user is shown below. If the feedback is inappropriate in any way, please reply to this email with your complaint.\n\nGrade: %s/10\n\nComments:\n\t%s\n\nHappy? Upset? Confused? Now it's your turn to give us feedback. Feel free to reply to this email with any thoughts or comments about our service. (These comments will go to Feeback12 - not to the user who graded your story.)" % (grade,comments),'feedback12help@gmail.com',[s.email])
					)
					send_mass_mail(emailtuple,fail_silently=True)
					s.feedback_sent = True
				except:
					pass
				s.graded = True
				s.save()
				request.session['start_shift'] = 'stayright'
				request.session['now_story'] = {'title':s.title[0:20],'grade':s.grade,'comments':s.comments[0:50]}
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
				
				
def terms_conditions(request):
	return render(request,'read_write/terms_conditions.html')
	
def privacy_policy(request):
	return render(request,'read_write/privacy_policy.html')
	
def cookies_policy(request):
	return render(request,'read_write/cookies_policy.html')





















