/*Nicky Devilee | 99047338
Bol4 applicatieontwikkelaar
Blok 2
Week 11-14 - Adventure game
Lab - Arrays*/

var rekenen = [1,2,3,4,5,6,7,8,9,10]
var tafels = [2,4,6,8];

document.write('<h2>' + 'Tafel van ' + tafels[0] + '</h2>');
for (var a = 0; a <= 9; a++) {
	var uitkomst = rekenen[a] * tafels[0];
	document.write(rekenen[a] + ' X ' + tafels[0] + ' = ' + uitkomst + '<br>');
}

document.write('<h2>' + 'Tafel van ' + tafels[1] + '</h2>');
for (var a = 0; a <= 9; a++) {
	var uitkomst = rekenen[a] * tafels[1];
	document.write(rekenen[a] + ' X ' + tafels[1] + ' = ' + uitkomst + '<br>');
}

document.write('<h2>' + 'Tafel van ' + tafels[2] + '</h2>');
for (var a = 0; a <= 9; a++) {
	var uitkomst = rekenen[a] * tafels[2];
	document.write(rekenen[a] + ' X ' + tafels[2] + ' = ' + uitkomst + '<br>');
}

document.write('<h2>' + 'Tafel van ' + tafels[3] + '</h2>');
for (var a = 0; a <= 9; a++) {
	var uitkomst = rekenen[a] * tafels[3];
	document.write(rekenen[a] + ' X ' + tafels[3] + ' = ' + uitkomst + '<br>');
}

// document.write('<h2>' + 'tekst' + '</h2>');