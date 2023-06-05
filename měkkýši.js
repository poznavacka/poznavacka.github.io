

function check(){

	var question26 = document.quiz.question26.value.toLowerCase();
    var question27 = document.quiz.question27.value.toLowerCase();
    var question28 = document.quiz.question28.value.toLowerCase();
    var question29 = document.quiz.question29.value.toLowerCase();
    var question30 = document.quiz.question30.value.toLowerCase();
    var question31 = document.quiz.question31.value.toLowerCase();
    var question32 = document.quiz.question32.value.toLowerCase();
    var question33 = document.quiz.question33.value.toLowerCase();
    var question34 = document.quiz.question34.value.toLowerCase();
    var question35 = document.quiz.question35.value.toLowerCase();
    var question36 = document.quiz.question36.value.toLowerCase();
    var question37 = document.quiz.question37.value.toLowerCase();
    var question38 = document.quiz.question38.value.toLowerCase();
    var question39 = document.quiz.question39.value.toLowerCase();
    var question40 = document.quiz.question40.value.toLowerCase();
    var question41 = document.quiz.question41.value.toLowerCase();
    var question42 = document.quiz.question42.value.toLowerCase();
    var question43 = document.quiz.question43.value.toLowerCase();
    var question44 = document.quiz.question44.value.toLowerCase();
    var question45 = document.quiz.question45.value.toLowerCase();
    var question46 = document.quiz.question46.value.toLowerCase();
    var question47 = document.quiz.question47.value.toLowerCase();
	var correct = 0;


    if (question26 == "hlemýžď zahradní") {
    correct++;
    document.quiz.question26.className = "correct-answer";
  } else {
    document.quiz.question26.className = "incorrect-answer";
}
    if (question27 == "páskovka keřová") {
    correct++;
    document.quiz.question27.className = "correct-answer";
  } else {
    document.quiz.question27.className = "incorrect-answer";
}
    if (question28 == "páskovka hajní") {
    correct++;
    document.quiz.question28.className = "correct-answer";
  } else {
    document.quiz.question28.className = "incorrect-answer";
}
    if (question29 == "achatina obrovská") {
    correct++;
    document.quiz.question29.className = "correct-answer";
  } else {
    document.quiz.question29.className = "incorrect-answer";
}
    if (question30 == "plzák španělský") {
    correct++;
    document.quiz.question30.className = "correct-answer";
  } else {
    document.quiz.question30.className = "incorrect-answer";
}
    if (question31 == "slimák") {
    correct++;
    document.quiz.question31.className = "correct-answer";
  } else {
    document.quiz.question31.className = "incorrect-answer";
}
    if (question32 == "škeble rybničná") {
    correct++;
    document.quiz.question32.className = "correct-answer";
  } else {
    document.quiz.question32.className = "incorrect-answer";
}
    if (question33 == "velevrub malířský") {
    correct++;
    document.quiz.question33.className = "correct-answer";
  } else {
    document.quiz.question33.className = "incorrect-answer";
}
    if (question34 == "srdcovka jedlá") {
    correct++;
    document.quiz.question34.className = "correct-answer";
  } else {
    document.quiz.question34.className = "incorrect-answer";
}
    if (question35 == "homolice") {
    correct++;
    document.quiz.question35.className = "correct-answer";
  } else {
    document.quiz.question35.className = "incorrect-answer";
}
    if (question36 == "bahenka živorodá") {
    correct++;
    document.quiz.question36.className = "correct-answer";
  } else {
    document.quiz.question36.className = "incorrect-answer";
}
    if (question37 == "plovatka bahenní") {
    correct++;
    document.quiz.question37.className = "correct-answer";
  } else {
    document.quiz.question37.className = "incorrect-answer";
}
    if (question38 == "okružák ploský") {
    correct++;
    document.quiz.question38.className = "correct-answer";
  } else {
    document.quiz.question38.className = "incorrect-answer";
}
    if (question39 == "sépie obecná") {
    correct++;
    document.quiz.question39.className = "correct-answer";
  } else {
    document.quiz.question39.className = "incorrect-answer";
}
    if (question40 == "chobotnice") {
    correct++;
    document.quiz.question40.className = "correct-answer";
  } else {
    document.quiz.question40.className = "incorrect-answer";
}
    if (question41 == "žížala obecná") {
    correct++;
    document.quiz.question41.className = "correct-answer";
  } else {
    document.quiz.question41.className = "incorrect-answer";
}
    if (question42 == "nitěnka obecná") {
    correct++;
    document.quiz.question42.className = "correct-answer";
  } else {
    document.quiz.question42.className = "incorrect-answer";
}
    if (question43 == "nereidka") {
    correct++;
    document.quiz.question43.className = "correct-answer";
  } else {
    document.quiz.question43.className = "incorrect-answer";
}
    if (question44 == "palolo zelený") {
    correct++;
    document.quiz.question44.className = "correct-answer";
  } else {
    document.quiz.question44.className = "incorrect-answer";
}
    if (question45 == "pijavka koňská") {
    correct++;
    document.quiz.question45.className = "correct-answer";
  } else {
    document.quiz.question45.className = "incorrect-answer";
}
	if (question46 == "pijavka lékařská") {
  correct++;
  document.quiz.question46.className = "correct-answer";
  } else {
    document.quiz.question46.className = "incorrect-answer";
}
    if (question47 == "hltanovka bahenní") {
  correct++;
  document.quiz.question47.className = "correct-answer";
  } else {
    document.quiz.question47.className = "incorrect-answer";
    }


	var messages = ["správné odpovědi zde: 26. hlemýžď zahradní, 27. páskovka keřová, 28. páskovka hajní, 29. achatina obrovská, 30. plzák španělský, 31. slimák, 32. škeble rybničná, 33. velevrub malířský, 34. srdcovka jedlá, 35. homolice, 36. bahenka živorodá, 37. plovatka bahenní, 38. okružák ploský, 39. sépie obecná, 40. chobotnice , 41. žížala obecná, 42. nitěnka obecná, 43. nereidka, 44. palolo zelený, 45. pijavka koňská, 46. pijavka lékařská, 47. hltanovka bahenní", "správné odpovědi zde: 26. hlemýžď zahradní, 27. páskovka keřová, 28. páskovka hajní, 29. achatina obrovská, 30. plzák španělský, 31. slimák, 32. škeble rybničná, 33. velevrub malířský, 34. srdcovka jedlá, 35. homolice, 36. bahenka živorodá, 37. plovatka bahenní, 38. okružák ploský, 39. sépie obecná, 40. chobotnice , 41. žížala obecná, 42. nitěnka obecná, 43. nereidka, 44. palolo zelený, 45. pijavka koňská, 46. pijavka lékařská, 47. hltanovka bahenní", "správné odpovědi zde: 26. hlemýžď zahradní, 27. páskovka keřová, 28. páskovka hajní, 29. achatina obrovská, 30. plzák španělský, 31. slimák, 32. škeble rybničná, 33. velevrub malířský, 34. srdcovka jedlá, 35. homolice, 36. bahenka živorodá, 37. plovatka bahenní, 38. okružák ploský, 39. sépie obecná, 40. chobotnice , 41. žížala obecná, 42. nitěnka obecná, 43. nereidka, 44. palolo zelený, 45. pijavka koňská, 46. pijavka lékařská, 47. hltanovka bahenní"];
	var score;

	if (correct == 0) {
		score = 1;
	}

	if (correct > 0 && correct < 21) {
		score = 1;
	}

	if (correct == 21) {
		score = 1;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "CELKOVÝ POČET BODŮ : " + correct + " z 22" ;

	}
	