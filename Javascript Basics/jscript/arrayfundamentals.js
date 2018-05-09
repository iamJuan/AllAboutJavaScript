

function runall(){
	myArray();
	multidimensionalarray();
}

function myArray(){
	var myArrays = [];
	myArrays[0] = "yellow balloon";
	myArrays[1] = "red balloon";
	myArrays[2] = "blue balloon";
	myArrays[3] = "pink balloon";

	document.write(myArrays[0] +" ");
	document.write(myArrays[1] +" ");
	document.write(myArrays[2] +" ");
	document.write(myArrays[3] +" ");
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

	document.write(bestAlbumsByGenre[0][3]);
}