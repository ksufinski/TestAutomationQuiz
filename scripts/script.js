function addInArray(element, array) {
	array.push(element);
}

var questions = ["aaa", "bbb", "ccc"];
var answers = [];
var i = 0;

var questionNode = document.querySelector('.question');
questionNode.innerText = questions[i];

document.body.addEventListener("click", function(){
	var id = event.target.id;
	
	if (id === "yes" || id === "no") {
		addInArray(id, answers);
	}
	questionNode.innerText = questions[++i];
	
	if (i >= questions.length) {
		yes.parentNode.removeChild(yes);
		no.parentNode.removeChild(no);
		questionNode.parentNode.removeChild(questionNode);
		console.log("answers", answers);
	}
}, false);

