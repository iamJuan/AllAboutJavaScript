function runall(){
	ifcond();
	ifelsecond();
	switches();
}

function ifcond(){
	document.write("IF<br/>");
	var age = 19;
	if (age < 21){
		document.write ("You are under the legal drinking age in the U.S.");
	} else {
		document.write ("What'll it be?");
	}
	document.write("<br/>");
}

function ifelsecond(){
	document.write("IF-ELSE<br/>");
	var time = 12;

	if (time < 12){
	document.write ("Good Morning!");
	} else if (time < 17){
	document.write ("Good Afternoon!");
	} else if (time < 20){
	document.write ("Good Evening!");
	} else {
	document.write ("Good Night!");
	}
	document.write("<br/>");
}

function switches(){
	document.write("SWITCH<br/>");
	
	var languagePreference = "Spanish";
	switch (languagePreference){
		case "English":
		document.write("Hello!");
		break;
		case "Spanish":
		document.write("Hola!");
		break;
		case "German":
		document.write("Guten Tag!");
		break;
		case "French":
		document.write("Bon Jour!");
		break;
		default:
		document.write("I'm Sorry, I don't Speak" + languagePreferance + "!");
	}
}