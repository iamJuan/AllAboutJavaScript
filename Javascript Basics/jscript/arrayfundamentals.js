

function runall(){
	myArray();
	multidimensionalarray();
	lengthsOfString();
}

function myArray(){
	var myArrays = [];
	myArrays[0] = "yellow balloon";
	myArrays[1] = "red balloon";
	myArrays[2] = "blue balloon";
	myArrays[3] = "pink balloon";

	document.write(myArrays[0] +"<br/>");
	document.write(myArrays[1] +"<br/>");
	document.write(myArrays[2] +"<br/>");
	document.write(myArrays[3] +"<br/>");
	document.write("myArrays.length = "+myArrays.length);
}

function multidimensionalarray(){
	var bestAlbumsByGenre = [];
	bestAlbumsByGenre[0] = "Country";
	bestAlbumsByGenre[0][0] = "Johnny Cash:Live at Folsom Prison"
	bestAlbumsByGenre[0][1] = "Patsy Cline:Sentimentally Yours";
	bestAlbumsByGenre[0][2] = "Hank Williams:I'm Blue Inside";
	bestAlbumsByGenre[1] = "Rock";
	bestAlbumsByGenre[1][0] = "T-Rex:Slider";
	bestAlbumsByGenre[1][1] = "Nirvana:Nevermind";
	bestAlbumsByGenre[1][2] = "Lou Reed:Tranformer";
	bestAlbumsByGenre[2] = "Punk";
	bestAlbumsByGenre[2][0] = "Flipper:Generic";
	bestAlbumsByGenre[2][1] = "The Dead Milkmen:Big Lizard in my Backyard";
	bestAlbumsByGenre[2][2] = "Patti Smith:Easter";

	document.write("<br/>");
	document.write(bestAlbumsByGenre[0][3]);
}

function lengthsOfString(){
	var lengthsOfString = [2,4,1.5,80];

	var totalLength = lengthsOfString[0] +
	lengthsOfString[1] + lengthsOfString[2] +
	lengthsOfString[3];
	document.write("<br/>");
	document.write(totalLength);
}