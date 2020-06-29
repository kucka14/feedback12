from django import forms

def word_count(text):
	return len(text.split())

class WriteForm(forms.Form):
    title = forms.CharField(max_length=100)
    author = forms.CharField(max_length=50)
    text = forms.CharField(widget=forms.Textarea(attrs={'rows':20,
														'width':'100%',
														'class':'text-area',
    													}))
    description = forms.CharField(max_length=100,widget=forms.Textarea(attrs={'rows':5,
    																		  'class':'text-area',
   															   }))
    email = forms.EmailField()
    
    def clean_text(self):
    	text = self.cleaned_data.get('text')
    	
    	wordcount = word_count(text)
    	
    	if wordcount > 750:
    		raise forms.ValidationError('Must be under 750 words. You have %s.' % (wordcount))
    	
    	return text
    	
class ReadForm(forms.Form):
	grade = forms.IntegerField(widget=forms.NumberInput(attrs={'type':'range',
															   'id':'gradeslider',
															   'min':'1',
															   'max':'10',
															   'value':'5',
															   }))
	comments = forms.CharField(widget=forms.Textarea(attrs={'rows':5,
															'class':'text-area'
															}))
	storyid = forms.CharField(widget=forms.TextInput(attrs={'id':'storyfillhidden',
							  								'value':'',
							  								'type':'hidden',
															}))
															
	def clean_text(self):
		comments = self.cleaned_data.get('comments')

		if not word_limit(text,250):
			raise forms.ValidationError('Must be under 250 words.')

		return comments
    	
    	
    	
    	
