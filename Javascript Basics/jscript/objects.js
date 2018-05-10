function runall(){
	objectivity();
	squarebracket();
}

function objectivity(){
	var person = new Object();
	person.feet = 2;
	person.name = "Sandy";
	person.hair = "black";
	person.firstName = "Glenn";
	var fullname = person.firstName + person.lastName;
	document.write (person.firstName);
}

function squarebracket(){
	var person = new Object();
	person.feet = 2;
	person.name = "Sandy";
	person.hair = "black";
	person.firstName = "Glenn";
	var fullname = person.firstName + person.lastName;
	document.write (person.fullname);
	
	person["firstName"] = "Iggy";
	var fullname2 = person.firstName + person.lastName;
	document.write (person.fullname2);
	
	var personProperty = "firstName";
	person[personProperty] = "Iggs";
	var fullname3 = person.firstName + person.lastName;
	document.write (person.fullname3);
}