from django import forms

class WriteForm(forms.Form):
    title = forms.CharField(label='story title', max_length=100)
    author = forms.CharField(label='story author', max_length=100)
    text = forms.CharField(label='story text',widget=forms.Textarea)
    
class ReadForm(forms.Form):
	grade = forms.IntegerField(label='story grade')
	comments = forms.CharField(label='story comments', max_length=200)
