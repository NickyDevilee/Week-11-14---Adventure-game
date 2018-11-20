/*Nicky Devilee | 99047338
Bol4 applicatieontwikkelaar
Blok 2
Week 11-14 - Adventure game
Lab - Arrays*/

var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

function optellen() {
	for (var i = 0; i < 10; i++) {
		var uitkomst = arrayEen[i] + arrayTwee[i];
		document.write(arrayEen[i] + ' + ' + arrayTwee[i] + ' = ' + uitkomst + '<br>');
	}
}

function aftrekken() {
	for (var i = 0; i < 10; i++) {
		var uitkomst = arrayTwee[i] - arrayEen[i];
		document.write(arrayTwee[i] + ' - ' + arrayEen[i] + ' = ' + uitkomst + '<br>');
	}
}

function vermenigvuldigen() {
	for (var i = 0; i < 10; i++) {
		var uitkomst = arrayEen[i] * arrayTwee[i];
		document.write(arrayEen[i] + ' X ' + arrayTwee[i] + ' = ' + uitkomst + '<br>');
	}
}

function delen() {
	for (var i = 0; i < 10; i++) {
		var uitkomst = arrayTwee[i] / arrayEen[i];
		document.write(arrayTwee[i] + ' : ' + arrayEen[i] + ' = ' + uitkomst + '<br>');
	}
}

document.write('<h2>' + 'Optellen van de twee arrays zijn:' + '</h2>');
optellen();

document.write('<h2>' + 'Aftrekken van de twee arrays zijn:' + '</h2>');
aftrekken();

document.write('<h2>' + 'Vermenigvuldigen van de twee arrays zijn:' + '</h2>');
vermenigvuldigen();

document.write('<h2>' + 'Delen van de twee arrays zijn:' + '</h2>');
delen();