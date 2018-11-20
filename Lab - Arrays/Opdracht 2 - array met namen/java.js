/*Nicky Devilee | 99047338
Bol4 applicatieontwikkelaar
Blok 2
Week 11-14 - Adventure game
Lab - Arrays*/

var aantal = prompt('Hoeveel namen wilt u in de array stoppen? (minimaal 3)');
var namen = [];

for (var i = 0; i < aantal; i++) {
	namen.push(prompt('Welke naam wil je toevoegen?'));
}

document.write('<h2>' + 'De ingevoerde namen in de array zijn:' + '</h2>');
document.write(namen);

document.write('<h2>' + 'De ingevoerde namen in de array in omgekeerde volgorde zijn:' + '</h2>');
for (var a = aantal-1; a >= 0; a--) {
	document.write(namen[a] + '<br>');
}