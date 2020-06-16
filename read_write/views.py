from django.shortcuts import render,redirect

from .forms import WriteForm,ReadForm

# Create your views here.

def index(request):

	if request.method == 'POST':
		write_form = WriteForm(request.POST)
		read_form = ReadForm(request.POST)
		if write_form.is_valid():
			title = write_form.cleaned_data['title']
			read_form = ReadForm()
			request.session['start_shift'] = 'left'
			
		if read_form.is_valid():
			grade = read_form.cleaned_data['grade']
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
				})

