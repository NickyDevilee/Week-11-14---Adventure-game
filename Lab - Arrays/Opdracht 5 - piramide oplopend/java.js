/*Nicky Devilee | 99047338
Bol4 applicatieontwikkelaar
Blok 2
Week 11-14 - Adventure game
Lab - Arrays*/

var vraag = prompt('Voer een getal in:');
var getallen = [];

document.write('<h2>' + 'Piramide oplopend' + '</h2>');

for (var i = 0; i <= vraag; i++) {
	document.write(getallen.join('') + '<br>');
	getallen.push(i);
}

document.write("Array:" + getallen + "<br>");