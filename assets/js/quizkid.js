//check function from html is written here//

function check(){

	var question1 = document.mathquiz.question1.value;
	var question2 = document.mathquiz.question2.value;
    var question3 = document.mathquiz.question3.value;
    var question4 = document.mathquiz.question4.value;
	var question5 = document.mathquiz.question5.value;
    var question6 = document.mathquiz.question6.value;
    var question7 = document.mathquiz.question7.value;
	var question8 = document.mathquiz.question8.value;
    var question9 = document.mathquiz.question9.value;
    var question10 = document.mathquiz.question10.value;
    
    var correct = 0;

    //if condition applied to get the correct value of the variable question//
    
    if (question1 == "1") {
		correct++;
    }
    
	if (question2 == "2") {
		correct++;
    }
    	
	if (question3 == "2") {
		correct++;
    }

    if (question4 == "2") {
		correct++;
    }
    
    if (question5 == "1") {
		correct++;
    }

    if (question6 == "1") {
		correct++;
    }


    if (question7 == "1") {
		correct++;
    }

    if (question8 == "2") {
		correct++;
    }

    if (question9 == "3") {
		correct++;
    }

    if (question10 == "1") {
		correct++;
    }

    //For getting 3 different range of correct answers, 3 different picture message will produce//

    var pictures = ["assets/images/result/trophy.gif", "assets/images/result/nice.gif","assets/images/result/retry.gif"];
	var messages = ["Congratulations!", "You are doing great!","Don't give up!"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 10) {
		score = 1;
	}

	if (correct == 10) {
		score = 0;
	}
    

	document.getElementById("results_maths").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("picture").src = pictures[score];
    console.log(correct);

    //Alert message will be displayed for empty form submission//
    if (question1 == ""||question2 == ""||question3 == ""||question4 == ""||question5 == ""||question6 == ""||question7 == ""||question8 == ""||question9 == ""||question10 == "") {
		alert( "Please provide all the answers!" );
        document.getElementById("results_maths").style.visibility = "hidden";
    }
    


    
    
    }

    