function addInArray(element, array) {
	array.push(element);
}

function addSuggestions(array) {
	var trueSuggestions = [];
	for(var questionNumber = 0; questionNumber < array.length; questionNumber += 1) {
		if (array[questionNumber] == 'no') {
			trueSuggestions.push(suggestions[questionNumber]);
		}
	}
	if (trueSuggestions.length == 0) {
		trueSuggestions.push("good");
	}
	return trueSuggestions;
}

var questions = ["All your locators are safe ? i.e. You dont have any locators lice \nxpath:.//*[@id='Z0F1D0717-7D32-452F-B127-3C9E3DDBD7D0']/div/div[4]/div/div[5]/span/span[2]/span/span", 


"bbb", "ccc"];
var suggestions = ["Try to use dynamic xpath, xpath functions like contains(), text()", "222", "333"];
var answers = [];
var i = 0;

var questionNode = document.querySelector('.question');
questionNode.innerHTML = questions[i];

document.body.addEventListener("click", function(e){
	
	var id = event.target.id;
	var idForm = $('.form');
	
	if (id === "yes" || id === "no") {
		e.preventDefault();
		i++;
		idForm.stop().fadeToggle();
		$('.form').css("display", "none");
		setTimeout(function(){
			idForm.stop().fadeToggle();
			questionNode.innerText = questions[i];
		}, 700);
		addInArray(id, answers);
	}
	
	if (i >= questions.length) {
		yes.parentNode.removeChild(yes);
		no.parentNode.removeChild(no);
		questionNode.parentNode.removeChild(questionNode);
		var result = addSuggestions(answers);
		var resultNode = document.querySelector('.result');
		var resultString = "";
		for (var suggestionIndex = 0; suggestionIndex < result.length; suggestionIndex += 1) {
			resultString += result[suggestionIndex] + "\n";
		}
		setTimeout(function(){
			resultNode.innerText = resultString;
			$('.result').css("margin-top", "300px");
			idForm.stop().fadeToggle();			
		}, 700);
	}
}, false);



 $('#scrollDown ').click(function(e){
 e.preventDefault();
 $('body, html').animate({ scrollTop: $('#question').offset().top }, 1000);
 });



