

var questions = [
	new Question("Whats does mean 'LED' ? ", ["Light exude diode ","Light-emitting diode", "Luminous-emitting diode ",
	 "Light effulgence discharge"], "Light-emitting diode"),
	new Question("When appeared the first LED ? ", ["1957 ","1943", "1899", "1962"], "1962"),
	new Question("What is a led lifetime  ? ", ["25 000 to 100 000 hours","10 000 to 15 000 hours",
	 "60 000 to 125 000 hours", "75 000 to 180 000 hours"], "25 000 to 100 000 hours"),
	new Question("LED are working thank's to ? ", ["water  ","electricity", "wind", "solar energy"], "electricity"),
	new Question("The minimum size of a LED is ", ["less than 5cm ","less than 0.5 mm", "less than 2mm",
	"less than 1mm"], "less than 2mm")
];

var quiz = new Quiz(questions);

function populate(){
	if(quiz.isEnded()){

		showScores();
	}

	else{

		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;

		//show choices
		var choices = quiz.getQuestionIndex().choices;
		for(var i = 0 ; i<choices.length;i++){
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("btn" + i , choices[i])
		}
		console.log(quiz.score)
		showProgress();
	}

}

function guess(id, guess){
	var button = document.getElementById(id);
	button.onclick = function(){
		quiz.guess(guess);
		populate();
	}
}


function showProgress(){

		var currentQuestionNumber = quiz.questionIndex + 1;
		var element = document.getElementById("progress");
		element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores(){

	var message;
	var gameOverHtml = "<h1> Result </h1>";
	gameOverHtml += "<h2 id='score'> Your score :" + quiz.score + "</h2>";

	if(quiz.score<=2){
		message = "<h1 id='message'> Work and get over it ! </h1>"
	}
	else if (quiz.score>2 && quiz.score<=4){
		message = "<h1 id='message'> Wow, almost a perfect score ! </h1>"
	}
	else if(quiz.score == 5){
		message = "<h1 id='message'> PERFECT ! </h1>"
	}
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHtml + message;

}


populate();
