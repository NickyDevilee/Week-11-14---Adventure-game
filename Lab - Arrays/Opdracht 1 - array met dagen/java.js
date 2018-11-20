/*Nicky Devilee | 99047338
Bol4 applicatieontwikkelaar
Blok 2
Week 11-14 - Adventure game
Lab - Arrays*/

var week = [' maandag', ' dinsdag', ' woensdag', ' donderdag', ' vrijdag', ' zaterdag', ' zondag'];

document.write('<h2>' + 'Alle dagen van de week zijn:' + '</h2>');
document.write(week);

document.write('<h2>' + 'De werkdagen zijn:' + '</h2>');
for (var i = 0; i < 5; i++) {
	document.write(week[i]);
}

document.write('<h2>' + 'De weekenddagen zijn:' + '</h2>');
for (var a = 5; a < 7; a++) {
	document.write(week[a]);
}

document.write('<h2>' + 'Alle dagen van de week in omgekeerde volgorde zijn:' + '</h2>');
for (var b = 6; b >= 0; b--) {
	document.write(week[b]);
}

document.write('<h2>' + 'De werkdagen in omgekeerde volgorde zijn:' + '</h2>');
for (var c = 4; c >= 0; c--) {
	document.write(week[c]);
}

document.write('<h2>' + 'De weekenddagen in omgekeerde volgorde zijn:' + '</h2>');
for (var d = 6; d >= 5; d--) {
	document.write(week[d]);
}