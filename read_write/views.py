from django.shortcuts import render,redirect

from .forms import WriteForm,ReadForm

from read_write.models import Story

# Create your views here.

def index(request):

	story_list = Story.objects.all()

	if request.method == 'POST':
		write_form = WriteForm(request.POST)
		read_form = ReadForm(request.POST)
		if write_form.is_valid():
			title = write_form.cleaned_data['title']
			author = write_form.cleaned_data['author']
			text = write_form.cleaned_data['text']
			s = Story(title=title,author=author,text=text,graded=True)
			s.save()
			read_form = ReadForm()
			request.session['start_shift'] = 'left'
			
		elif read_form.is_valid():
			grade = read_form.cleaned_data['grade']
			comments = read_form.cleaned_data['comments']
			
			write_form = WriteForm()
			request.session['start_shift'] = 'right'
		
		return redirect('/')
			
	else:
		write_form = WriteForm()
		read_form = ReadForm()
		
		start_shift = request.session.get('start_shift')
		
		try:
			del request.session['start_shift']
		except KeyError:
			pass
		
	return render(request, 'read_write/index.html',{
					'write_form':write_form,
					'read_form':read_form,
					'start_shift':start_shift,
					'story_list':story_list,
				})

