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

var questions = [

"Do you use Given When Then concept in tests?",

"Did you think about Test Automation Pyramid before write UI tests?",

"Do you write easy readable test method names, so your grandma can understand what are you checking here?",

"All your locators are safe ? i.e. You dont have any locators like \n xpath:.//*[@id='Z0F1D0717-7D32-452F-B127-3C9E3DDBD7D0']/div/div[4]/div/div[5]/span/span[2]/span/span", 

"Is your code clean for excess logging?", 

"Can you say that you have no one Thread.sleep() wait?",

"All you tests contains only one assertion?",

"In tests there are only steps that you need to simulate user behavior and all preparations such as user login or deleting cookies seperately?",

"Lets talk a little about obfuscation. Do you use asserts instead of conditional operators?",

"Do you know which method can help you avoid loops?",

"There are a lot of secrets, one of them about code duplicates. Do you know this one?",

"Is it no difference in what order will run tests?"

];
var suggestions = [

"Let's start building good tests from scratch. Try Given When Then (See also Cucumber scenarios) and you will love it. ",

"Learn about Test Automation Pyramid and think how to pick bugs earlier ",

"Make you test method name starts with “should” and don't get rid of questions your colleagues ",

"Try to use dynamic xpath, xpath functions like contains(), text()",

"Excessive logging could slow down tests. Try to find libs or frameworks for solution",

"Make your tests faster by using explicit waits instead of Thread.sleep() and implicit waits",

"It is better to use one assertion for each test. Because if first assertion fails you’ll never check next",

"For build independent tests you should separate test logic. Try to use logic that provide test framework that you use. For example, mark  precondition steps by anottation Before/BeforeClass.",

"Don’t make you code complex. Use asserts instead of conditional operators.",

"It’s time to acquaint with the matchers. ",

"Just don’t duplicate you code. Use brains. ",

"For running tests in random order make them independent",





];
var answers = [];
var i = 0;

var questionNode = document.querySelector('.question');
questionNode.innerHTML = questions[i];

document.body.addEventListener("click", function(event){
	
	var id = event.target.id;
	var idForm = $('.form');
	
	if (id === "yes" || id === "no") {
		event.preventDefault();
		i++;
		//idForm.stop().fadeToggle();
		$('.form').css("display", "none");
		setTimeout(function(){
			idForm.stop().fadeToggle();
			questionNode.innerHTML = questions[i];
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
			resultString = resultString.replace(/\n/g,"<br>");
			resultNode.innerHTML = resultString;
			console.log(resultString);
			$('.result').css("margin-top", "300px");
			idForm.stop().fadeToggle();			
		}, 700);
	}
}, false);



 $('#scrollDown ').click(function(e){
 e.preventDefault();
 $('body, html').animate({ scrollTop: $('#question').offset().top }, 1000);
 });



