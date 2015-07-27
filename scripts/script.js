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

var questions = ["aaa", "bbb", "ccc"];
var suggestions = ["111", "222", "333"];
var answers = [];
var i = 0;

var questionNode = document.querySelector('.question');
questionNode.innerText = questions[i];

document.body.addEventListener("click", function(){
	var id = event.target.id;
	
	if (id === "yes" || id === "no") {
		addInArray(id, answers);
		questionNode.innerText = questions[++i];
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
		resultNode.innerText = resultString;
	}
}, false);

