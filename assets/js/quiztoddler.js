function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;
    
    var correct = 0;
    
    if (question1 == "2") {
		correct++;
    }
	if (question2 == "2") {
		correct++;
    }	
	if (question3 == "1") {
		correct++;
    }

    if (question4 == "1") {
		correct++;
    }
    
    if (question5 == "2") {
		correct++;
    }

    if (question6 == "3") {
		correct++;
    }

    if (question7 == "2") {
		correct++;
    }

    if (question8 == "2") {
		correct++;
    }

    if (question9 == "2") {
		correct++;
    }

    if (question10 == "2") {
		correct++;
    }

    var pictures = ["assets/images/result/trophy.gif", "assets/images/result/nice.gif"];
	var messages = ["Conratulations!", "You are doing great!"];
	var score;

	if (correct == 0) {
		score = 1;
	}

	if (correct > 0 && correct < 9) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}
    

	document.getElementById("results_maths").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("picture").src = pictures[score];
    console.log(correct);
    }
    