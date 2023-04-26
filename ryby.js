

function check(){

	var question81 = document.quiz.question81.value.toLowerCase();
    var question82 = document.quiz.question82.value.toLowerCase();
    var question83 = document.quiz.question83.value.toLowerCase();
    var question84 = document.quiz.question84.value.toLowerCase();
    var question85 = document.quiz.question85.value.toLowerCase();
    var question86 = document.quiz.question86.value.toLowerCase();
    var question87 = document.quiz.question87.value.toLowerCase();
	var correct = 0;


    if (question81 == "jeseter") {
    correct++;
    document.quiz.question81.className = "correct-answer";
    } else {
    document.quiz.question81.className = "incorrect-answer";
}
    if (question82 == "vyza velká") {
    correct++;
    document.quiz.question82.className = "correct-answer";
    } else {
    document.quiz.question82.className = "incorrect-answer";
}
    if (question83 == "losos obecný") {
    correct++;
    document.quiz.question83.className = "correct-answer";
  } else {
    document.quiz.question83.className = "incorrect-answer";
}
    if (question84 == "kapr obecný") {
    correct++;
    document.quiz.question84.className = "correct-answer";
  } else {
    document.quiz.question84.className = "incorrect-answer";
}
    if (question85 == "pstruh obecný") {
    correct++;
    document.quiz.question85.className = "correct-answer";
  } else {
    document.quiz.question85.className = "incorrect-answer";
}
    if (question86 == "pstruh duhový") {
    correct++;
    document.quiz.question86.className = "correct-answer";
  } else {
    document.quiz.question86.className = "incorrect-answer";
}
    if (question87 == "úhoř říční") {
    correct++;
    document.quiz.question87.className = "correct-answer";
  } else {
    document.quiz.question87.className = "incorrect-answer";
    }

	var messages = ["správné odpovědi zde: 81. jeseter, 82. vyza velká, 83. losos obecný, 84. kapr obecný, 85. pstruh obecný, 86. pstruh duhový, 87. úhoř říční", "správné odpovědi zde: 81. jeseter, 82. vyza velká, 83. losos obecný, 84. kapr obecný, 85. pstruh obecný, 86. pstruh duhový, 87. úhoř říční", "správné odpovědi zde: 81. jeseter, 82. vyza velká, 83. losos obecný, 84. kapr obecný, 85. pstruh obecný, 86. pstruh duhový, 87. úhoř říční"];
	var score;

	if (correct == 0) {
		score = 0;
	}

	if (correct > 0 && correct < 7) {
		score = 1;
	}

	if (correct == 7) {
		score = 2;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "CELKOVÝ POČET BODŮ : " + correct + " ze 7";

	}
	