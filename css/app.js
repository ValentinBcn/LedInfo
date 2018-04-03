function populate(){
	
	if(quiz.isEnded()){
	//	showScores();
	}
	else {
		// show question

		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;

		//show choices
		var choices = quiz.getQuestionIndex().choices;
		for(var i = 0 ; i<choices.length;i++){
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
		}
	}

}

var questions = [
	new Questions("comment ça va ? ", ["bien ","lol", "mais de", "mfroj"], "lol"),
	new Questions("comment ça va ? ", ["bien ","lol", "mais de", "mfroj"], "lol"),
	new Questions("comment ça va ? ", ["bien ","lol", "mais de", "mfroj"], "lol"),
	new Questions("comment ça va ? ", ["bien ","lol", "mais de", "mfroj"], "lol")
];

var quiz = new Quiz(questions);

populate();



function myFunction1(){
	alert("lol");
}