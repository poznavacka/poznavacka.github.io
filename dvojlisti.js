

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
    var question11 = document.quiz.question11.value;
    var question12 = document.quiz.question12.value;
    var question13 = document.quiz.question13.value;
    var question14 = document.quiz.question14.value;
    var question15 = document.quiz.question15.value;
    var question16 = document.quiz.question16.value;
    var question17 = document.quiz.question17.value;
    var question18 = document.quiz.question18.value;
    var question19 = document.quiz.question19.value;
    var question20 = document.quiz.question20.value;
    var question21 = document.quiz.question21.value;
    var question22 = document.quiz.question22.value;
    var question23 = document.quiz.question23.value;
    var question24 = document.quiz.question24.value;
    var question25 = document.quiz.question25.value;
	var correct = 0;


	if (question1 == "měňavka") {
        correct++;
        document.quiz.question1.className = "correct-answer";
      } else {
        document.quiz.question1.className = "incorrect-answer";
        
}
    if (question2 == "krásnoočko štíhlé") {
        correct++;
        document.quiz.question2.className = "correct-answer";
        } else {
        document.quiz.question2.className = "incorrect-answer";
}
    if (question3 == "trepka velká") {
        correct++;
        document.quiz.question3.className = "correct-answer";
        } else {
        document.quiz.question3.className = "incorrect-answer";
}
    if (question4 == "lamblie střevní") {
        correct++;
        document.quiz.question4.className = "correct-answer";
        } else {
        document.quiz.question4.className = "incorrect-answer";
}
    if (question5 == "trypanosoma spavičná") {
        correct++;
        document.quiz.question5.className = "correct-answer";
        } else {
        document.quiz.question5.className = "incorrect-answer";
}
    if (question6 == "nezmar zelený") {
        correct++;
        document.quiz.question6.className = "correct-answer";
        } else {
        document.quiz.question6.className = "incorrect-answer";
}
    if (question7 == "nezmar hnědý") {
        correct++;
        document.quiz.question7.className = "correct-answer";
        } else {
        document.quiz.question7.className = "incorrect-answer";
}
    if (question8 == "medúzka sladkovodní") {
        correct++;
        document.quiz.question8.className = "correct-answer";
        } else {
        document.quiz.question8.className = "incorrect-answer";
}
    if (question9 == "měchýřovka portugalská") {
        correct++;
        document.quiz.question9.className = "correct-answer";
        } else {
        document.quiz.question9.className = "incorrect-answer";
}
    if (question10 == "talířovka ušatá") {
        correct++;
        document.quiz.question10.className = "correct-answer";
        } else {
        document.quiz.question10.className = "incorrect-answer";
}
    if (question11 == "korál červený") {
        correct++;
        document.quiz.question11.className = "correct-answer";
        } else {
        document.quiz.question11.className = "incorrect-answer";
}
    if (question12 == "korál větevník") {
        correct++;
        document.quiz.question12.className = "correct-answer";
        } else {
        document.quiz.question12.className = "incorrect-answer";
}
    if (question13 == "sasanka koňská") {
        correct++;
        document.quiz.question13.className = "correct-answer";
        } else {
        document.quiz.question13.className = "incorrect-answer";
}
    if (question14 == "houba rybničná") {
        correct++;
        document.quiz.question14.className = "correct-answer";
        } else {
        document.quiz.question14.className = "incorrect-answer";
}
    if (question15 == "houba mycí") {
        correct++;
        document.quiz.question15.className = "correct-answer";
        } else {
        document.quiz.question15.className = "incorrect-answer";
}
    if (question16 == "neptunův pohár") {
        correct++;
        document.quiz.question16.className = "correct-answer";
        } else {
        document.quiz.question16.className = "incorrect-answer";
}
    if (question17 == "ploštěnka mléčná") {
        correct++;
        document.quiz.question17.className = "correct-answer";
        } else {
        document.quiz.question17.className = "incorrect-answer";
}
    if (question18 == "ploštěnka potoční") {
        correct++;
        document.quiz.question18.className = "correct-answer";
        } else {
        document.quiz.question18.className = "incorrect-answer";
}
    if (question19 == "ploštěnka horská") {
        correct++;
        document.quiz.question19.className = "correct-answer";
        } else {
        document.quiz.question19.className = "incorrect-answer";
}
    if (question20 == "tasemnice bezbranná") {
        correct++;
        document.quiz.question20.className = "correct-answer";
        } else {
        document.quiz.question20.className = "incorrect-answer";
}
    if (question21 == "tasemnice dlouhočlenná") {
        correct++;
        document.quiz.question21.className = "correct-answer";
        } else {
        document.quiz.question21.className = "incorrect-answer";
}   
    if (question22 == "motolice") {
    correct++;
    document.quiz.question22.className = "correct-answer";
    } else {
    document.quiz.question22.className = "incorrect-answer";
}
    if (question23 == "cerkarie") {
    correct++;
    document.quiz.question23.className = "correct-answer";
    } else {
    document.quiz.question23.className = "incorrect-answer";
}
    if (question24 == "škrkavka dětská") {
    correct++;
    document.quiz.question24.className = "correct-answer";
    } else {
    document.quiz.question24.className = "incorrect-answer";
}
    if (question25 == "svalovec stočený") {
    correct++;
    document.quiz.question25.className = "correct-answer";
    } else {
    document.quiz.question25.className = "incorrect-answer";
    }


	var messages = ["správné odpovědi zde: 1. měňavka, 2. krásnoočko štíhlé, 3. trepka velká, 4. lamblie střevní, 5. trypanosoma spavičná, 6. nezmar zelený, 7. nezmar hněd, 8. medúzka sladkovodní, 9. měchýřovka portugalská, 10. talířovka ušatá, 11. korál červený, 12. korál větevník, 13. sasanka koňská, 14. houba rybničná, 15. houba mycí, 16. neptunův pohár, 17. ploštěnka mléčná, 18. ploštěnka potoční, 19. ploštěnka horská, 20. tasemnice bezbranná, 21. tasemnice dlouhočlenná, 22. motolice, 23. cerkarie, 24. škrkavka dětská, 25. svalovec stočený", "správné odpovědi zde: 1. měňavka, 2. krásnoočko štíhlé, 3. trepka velká, 4. lamblie střevní, 5. trypanosoma spavičná, 6. nezmar zelený, 7. nezmar hněd, 8. medúzka sladkovodní, 9. měchýřovka portugalská, 10. talířovka ušatá, 11. korál červený, 12. korál větevník, 13. sasanka koňská, 14. houba rybničná, 15. houba mycí, 16. neptunův pohár, 17. ploštěnka mléčná, 18. ploštěnka potoční, 19. ploštěnka horská, 20. tasemnice bezbranná, 21. tasemnice dlouhočlenná, 22. motolice, 23. cerkarie, 24. škrkavka dětská, 25. svalovec stočený", "správné odpovědi zde: 1. měňavka, 2. krásnoočko štíhlé, 3. trepka velká, 4. lamblie střevní, 5. trypanosoma spavičná, 6. nezmar zelený, 7. nezmar hněd, 8. medúzka sladkovodní, 9. měchýřovka portugalská, 10. talířovka ušatá, 11. korál červený, 12. korál větevník, 13. sasanka koňská, 14. houba rybničná, 15. houba mycí, 16. neptunův pohár, 17. ploštěnka mléčná, 18. ploštěnka potoční, 19. ploštěnka horská, 20. tasemnice bezbranná, 21. tasemnice dlouhočlenná, 22. motolice, 23. cerkarie, 24. škrkavka dětská, 25. svalovec stočený"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 25) {
		score = 1;
	}

	if (correct == 25) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "CELKOVÝ POČET BODŮ : " + correct + " z 25";

	}
	