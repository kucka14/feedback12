from django import forms

class WriteForm(forms.Form):
    title = forms.CharField(label='story title', max_length=100)
    
class ReadForm(forms.Form):
	grade = forms.CharField(label='story grade', max_length=100)
