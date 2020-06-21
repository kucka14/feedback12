from django import forms

def is_hello(x):
	return x == 'hello'

class WriteForm(forms.Form):
    title = forms.CharField(max_length=100)
    author = forms.CharField(max_length=100)
    text = forms.CharField(widget=forms.Textarea(attrs={'rows':20,
    													'cols':48,
    													}))
    description = forms.CharField(widget=forms.Textarea(attrs={'rows':5,
   															   'cols':37,
   															   }))
    email = forms.EmailField()
    
#    def clean_text(self):
#    	data = self.cleaned_data.get('text')
#    	
#    	if not is_hello(data):
#    		raise forms.ValidationError('not the word hello')
#    	
#    	return data
    
class ReadForm(forms.Form):
	grade = forms.IntegerField(widget=forms.NumberInput(attrs={'type':'range',
															   'id':'gradeslider',
															   'min':'1',
															   'max':'10',
															   'value':'5',
															   }))
	comments = forms.CharField(widget=forms.Textarea(attrs={'rows':5,
															'cols':37,
															}))
	storyid = forms.CharField(widget=forms.TextInput(attrs={'id':'storyfillhidden',
							  								'value':'',
							  								'type':'hidden',
															}))
