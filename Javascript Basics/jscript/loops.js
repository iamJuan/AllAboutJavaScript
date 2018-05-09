function runall(){
	forloop();
	forlooparray();
	forin();
	whileloop();
	dowhileloop();
}

function forloop(){
	document.write("FOR<br/>");

	for (var x = 1; x < 10; x++){
		document.write(x+"<br/>");
	}
	document.write("<br/>");
}

function forlooparray(){
	document.write("FOR-ARRAY<br/>");
	
	var areaCodes = ["770", "404", "718", "202", "901","305", "312", "313", "215", "803"];
	
	for (x=0; x < areaCodes.length - 1; x++){
		document.write("Different Area Code:" + areaCodes[x] + "<br>");
	}
	document.write("<br/>");
}

function forin(){
	document.write("FOR-IN<br/>");

	var objects = [770, 404, 718, 202, 901,305, 312,313, 215, 803];
	
	for (var ac in objects){
		document.write("Different Area Code:" + ac + "<br>");
	}
	document.write("<br/>");
}

function whileloop(){
	document.write("WHILE<br/>");
	var guessedWord = "pizza";
	while (guessedWord != "sandwich") { 
		document.write("No. That's not it. Try again.<br/>");
		guessedWord = "sandwich";
	}
	document.write("Congratulations! That's exactly right!<br/>"); 

	document.write("<br/>");
}

function dowhileloop(){
	document.write("DO-WHILE<br/>");
	var i = 0;
	do {
		i++;
		document.write(i + "<br>");
	} while (i<10);

	document.write("<br/>");
}