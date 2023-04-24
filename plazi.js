

function check(){

	var question88 = document.quiz.question88.value;
    var question89 = document.quiz.question89.value;
    var question90 = document.quiz.question90.value;
    var question91 = document.quiz.question91.value;
    var question92 = document.quiz.question92.value;
    var question93 = document.quiz.question93.value;
    var question94 = document.quiz.question94.value;
    var question95 = document.quiz.question95.value;
    var question96 = document.quiz.question96.value;
    var question97 = document.quiz.question97.value;
    var question98 = document.quiz.question98.value;
    var question99 = document.quiz.question99.value;
    var question100 = document.quiz.question100.value;
    var question101 = document.quiz.question101.value;
    var question102 = document.quiz.question102.value;
    var question103 = document.quiz.question103.value;
    var question104 = document.quiz.question104.value;
	var correct = 0;



    if (question88 == "kuňka ohnivá") {
    correct++;
    document.quiz.question88.className = "correct-answer";
  } else {
    document.quiz.question88.className = "incorrect-answer";
}
    if (question89 == "skokan hnědý") {
    correct++;
    document.quiz.question89.className = "correct-answer";
  } else {
    document.quiz.question89.className = "incorrect-answer";
}
    if (question90 == "skokan zelený") {
    correct++;
    document.quiz.question90.className = "correct-answer";
  } else {
    document.quiz.question90.className = "incorrect-answer";
}
    if (question91 == "rosnička zelená") {
    correct++;
    document.quiz.question91.className = "correct-answer";
  } else {
    document.quiz.question91.className = "incorrect-answer";
}
    if (question92 == "mlok skvrnitý") {
    correct++;
    document.quiz.question92.className = "correct-answer";
  } else {
    document.quiz.question92.className = "incorrect-answer";
}
    if (question93 == "čolek obecný") {
    correct++;
    document.quiz.question93.className = "correct-answer";
  } else {
    document.quiz.question93.className = "incorrect-answer";
}
    if (question94 == "ropucha obecná") {
    correct++;
    document.quiz.question94.className = "correct-answer";
  } else {
    document.quiz.question94.className = "incorrect-answer";
}
    if (question95 == "blatnice skvrnitá") {
    correct++;
    document.quiz.question95.className = "correct-answer";
  } else {
    document.quiz.question95.className = "incorrect-answer";
}
    if (question96 == "kareta obrovská") {
    correct++;
    document.quiz.question96.className = "correct-answer";
  } else {
    document.quiz.question96.className = "incorrect-answer";
}
    if (question97 == "želva žlutohnědá") {
    correct++;
    document.quiz.question97.className = "correct-answer";
  } else {
    document.quiz.question97.className = "incorrect-answer";
}
    if (question98 == "krokodýl nilský") {
    correct++;
    document.quiz.question98.className = "correct-answer";
  } else {
    document.quiz.question98.className = "incorrect-answer";
}
    if (question99 == "aligátor americký") {
    correct++;
    document.quiz.question99.className = "correct-answer";
  } else {
    document.quiz.question99.className = "incorrect-answer";
}
    if (question100 == "ještěrka zelená") {
    correct++;
    document.quiz.question100.className = "correct-answer";
  } else {
    document.quiz.question100.className = "incorrect-answer";
}
    if (question101 == "ještěrka živorodá") {
    correct++;
    document.quiz.question101.className = "correct-answer";
  } else {
    document.quiz.question101.className = "incorrect-answer";
}
    if (question102 == "užovka hladká") {
    correct++;
    document.quiz.question102.className = "correct-answer";
  } else {
    document.quiz.question102.className = "incorrect-answer";
}
    if (question103 == "užovka obojková") {
    correct++;
    document.quiz.question103.className = "correct-answer";
  } else {
    document.quiz.question103.className = "incorrect-answer";
}
    if (question104 == "zmije obecná") {
    correct++;
    document.quiz.question104.className = "correct-answer";
  } else {
    document.quiz.question104.className = "incorrect-answer";
    }

	var messages = ["správné odpovědi zde: 88. kuňka ohnivá, 89. skokan hnědý, 90. skokan zelený, 91. rosnička zelená, 92. mlok skvrnitý, 93. čolek obecný, 94. ropucha obecná, 95. blatnice skvrnitá, 96. kareta obrovská, 97. želva žlutohnědá, 98. krokodýl nilský, 99. aligátor americký, 100. ještěrka zelená, 101. ještěrka živorodá, 102. užovka hladká, 103. užovka obojková, 104. zmije obecná", "správné odpovědi zde: 88. kuňka ohnivá, 89. skokan hnědý, 90. skokan zelený, 91. rosnička zelená, 92. mlok skvrnitý, 93. čolek obecný, 94. ropucha obecná, 95. blatnice skvrnitá, 96. kareta obrovská, 97. želva žlutohnědá, 98. krokodýl nilský, 99. aligátor americký, 100. ještěrka zelená, 101. ještěrka živorodá, 102. užovka hladká, 103. užovka obojková, 104. zmije obecná", "správné odpovědi zde: 88. kuňka ohnivá, 89. skokan hnědý, 90. skokan zelený, 91. rosnička zelená, 92. mlok skvrnitý, 93. čolek obecný, 94. ropucha obecná, 95. blatnice skvrnitá, 96. kareta obrovská, 97. želva žlutohnědá, 98. krokodýl nilský, 99. aligátor americký, 100. ještěrka zelená, 101. ještěrka živorodá, 102. užovka hladká, 103. užovka obojková, 104. zmije obecná"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 166) {
		score = 1;
	}

	if (correct == 166) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "CELKOVÝ POČET BODŮ : " + correct + " ze 17" ;

	}
	