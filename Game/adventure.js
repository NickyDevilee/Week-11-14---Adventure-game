// Nicky Devilee | 99047338
// Bol4 applicatieontwikkelaar
// Blok 2
// Week 11-13 - Adventure game
// The Game

var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var titel = document.getElementById('title');
var beschrijving = document.getElementById('description');
var achtergrond = document.getElementById('game-container');
var item = document.getElementById('inventoryItem');
var kokosnoot = false;
var steen = false;
var key = false;

// document.getElementById('game-container').style.background = 'url(img/startscherm.jpg)';
// document.getElementById("btn1").onclick = button1;

window.onload = start();

function start() {
	achtergrond.style.backgroundImage = 'url(img/crash.jpg)';
	titel.innerHTML = 'Startscherm';
	beschrijving.innerHTML = 'Je zit in een vliegtuig onderweg naar Indonesië. Het vliegtuig stort neer op een, voor zover bekend, onbewoond eiland. Het is aan jou om de juiste keuzes te maken en het eiland te verlaten. Je bent, voor zover je weet, de enige overlever van de crash en je hebt geen spullen op zak. Als je de verkeerde keuze maakt ben je dood.';
	button1.style.visibility="hidden";
	button2.innerHTML = 'Start spel';
	button2.onclick = level1;
	button3.style.visibility="hidden";
	item.style.visibility="hidden";
	kokosnoot = false;
	steen = false;
	key = false;
	console.log('Startscherm');
}

function level1() {
	achtergrond.style.backgroundImage = 'url(img/eiland.jpg)';
	titel.innerHTML = 'Level 1';
	beschrijving.innerHTML = 'Je moet iets eten en drinken anders gaat het niet goed. Voor zover je kan zien zie je alleen bomen en struiken. Je herkent 1 van de bomen en ziet dat het een palmboom is met kokosnoten. Gebruik je de kokosnoten van deze boom?';
	button1.style.visibility="visible";
	button1.innerHTML= 'Ja, ik eet de kokosnoot op.';
	button1.onclick = level2;
	button2.innerHTML = 'Nee, ik eet de kokosnoot niet.';
	button2.onclick = dood;
	button3.style.visibility="visible";
	button3.innerHTML = 'Ik neem de kokosnoot mee voor later.';
	button3.onclick = kokosNoot;
	item.style.visibility="hidden";
	console.log('Level 1');
}

function kokosNoot() {
	kokosnoot = true;
	console.log('kokosnoot opgepakt');
	level2();
}

function level2() {
	achtergrond.style.backgroundImage = 'url(img/woud.jpg)';
	titel.innerHTML = 'Level 2';
	beschrijving.innerHTML = 'Het is tijd om een goed zicht te krijgen van het eiland. Je moet dus naar een hoger punt zien te komen. Doe je dit door op een berg te klimmen of door in een hoge boom te klimmen?';
	button1.style.visibility="hidden";
	button2.innerHTML = 'Ik klim de hoogste boom in.';
	button2.onclick = dood;
	button3.style.visibility="visible";
	button3.innerHTML = 'Ik ga een berg beklimmen.';
	button3.onclick = level3;
	item.style.visibility="hidden";
	console.log('Level 2');
}

function level3() {
	achtergrond.style.backgroundImage = 'url(img/rivier.png)';
	titel.innerHTML = 'Level 3';
	beschrijving.innerHTML = 'Je loopt langs een riviertje met veel stenen (misschien ook wel nuttige) en helder water terwijl je richting de berg loopt. Besluit je om door te lopen of om water uit de rivier te drinken?';
	button1.style.visibility="visible";
	button1.innerHTML= 'Ik drink het water.';
	button1.onclick = dood;
	button2.innerHTML = 'Ik loop door.';
	button2.onclick = level4;
	button3.style.visibility="hidden";
	item.style.visibility="visible";
	item.src = 'img/steen.png';
	item.onclick = Steen;
	console.log('Level 3');
}

function Steen() {
	item.style.visibility="hidden";
	console.log('steen opgepakt');
	steen = true;
}

function level4() {
	achtergrond.style.backgroundImage = 'url(img/huis.jpg)';
	titel.innerHTML = 'Level 4';
	beschrijving.innerHTML = 'Je loopt verder en komt een oud huis tegen, om binnen te komen heb je een sleutel nodig.';
	if (steen == true) {
		button1.style.visibility="visible";
		button1.innerHTML= 'Sloop het slot met de steen.';
	} else{
		button1.style.visibility="hidden";
		button1.innerHTML= '';
	}
	button1.onclick = level6;
	button2.innerHTML = 'Zoek de sleutel';
	button2.onclick = level5;
	if (key == true) {
		button3.style.visibility="visible";
	}else{
		button3.style.visibility="hidden";
	}
	button3.innerHTML = 'Ga naar binnen';
	button3.onclick = level6;
	item.style.visibility="hidden";
	console.log('Level 4');
}

function level5() {
	achtergrond.style.backgroundImage = 'url(img/bos.jpg)';
	titel.innerHTML = 'Level 5';
	beschrijving.innerHTML = 'De sleutel ligt ergens hier verstopt, zoek de sleutel en ga terug naar het huis.';
	button1.style.visibility="hidden";
	button2.innerHTML = 'Terug naar het huis.';
	button2.onclick = level4;
	button3.style.visibility="hidden";
	item.src = 'img/sleutel.png';
	if (key == true) {
		item.style.visibility="hidden";
	}else{
		item.style.display="block";
		item.style.visibility="visible";
	}
	item.onclick = sleutel;
	console.log('Level 5');
}

function sleutel() {
	key = true;
	console.log('sleutel opgepakt');
	item.style.visibility="hidden";
}

function level6() {
	achtergrond.style.backgroundImage = 'url(img/binnen2.jpg)';
	titel.innerHTML = 'Level 6';
	beschrijving.innerHTML = 'Het huis bevat helemaal niets nuttigs en is al veel te lang verlaten maar je moet toch de nacht doorbrengen ergens. Dus doe je dit in dit huis. ';
	button1.style.visibility="hidden";
	button2.innerHTML = 'Slaap in het huis';
	button2.onclick = level7;
	button3.style.visibility="hidden";
	item.style.visibility="hidden";
	console.log('Level 6');
}

function level7() {
	achtergrond.style.backgroundImage = 'url(img/planten.jpg)';
	titel.innerHTML = 'Level 7';
	beschrijving.innerHTML = 'Wanneer je wakker bent moet je toch iets gaan eten. Als je de kokosnoot hebt meegnomen kan je deze nu eten. Als je deze niet mee hebt kan je kiezen of je deze planten eet.';
	button1.style.visibility="visible";
	button1.innerHTML= 'Ik eet de planten op.';
	button1.onclick = dood;
	button2.innerHTML = 'Ik eet de planten niet.';
	button2.onclick = level8;
	if (kokosnoot == true) {
		button3.style.visibility="visible";
		button3.innerHTML = 'Ik eet de kokosnoot.';
		button3.onclick = level8;
	}else{
		button3.style.visibility="hidden";
	}
	item.style.visibility="hidden";
	console.log('Level 7');
}

function level8() {
	achtergrond.style.backgroundImage = 'url(img/brug.jpg)';
	titel.innerHTML = 'Level 8';
	beschrijving.innerHTML = 'Gelukkig heb je de giftige planten niet gegeten! Je komt deze gevaarlijke brug tegen. besluit je om de gok te wagen en naar de overkant te lopen of doe je dit niet?';
	button1.style.visibility="visible";
	button1.innerHTML= 'Ik ga naar de overkant.';
	button1.onclick = dood;
	button2.innerHTML = 'Ik ga niet de brug op.';
	button2.onclick = level9;
	button3.style.visibility="hidden";
	item.style.visibility="hidden";
	console.log('Level 8');
}

function level9() {
	achtergrond.style.backgroundImage = 'url(img/mangrove.jpg)';
	titel.innerHTML = 'Level 9';
	beschrijving.innerHTML = 'Na een tijdje lopen kom je bij deze mangrove terecht. De mangrove zit vol met gevaarlijke dieren zoals krokodillen, maar wanneer je achterom kijkt zie je dat er een krokodil achter je aan is gekomen. Je moet dus snel beslissen of je de mangrove in gaat of niet.';
	button1.style.visibility="visible";
	button1.innerHTML= 'Ja, ik ga de mangrove in.';
	button1.onclick = level10;
	button2.innerHTML = 'Nee, ik ga de mangrove niet in.';
	button2.onclick = dood;
	button3.style.visibility="hidden";
	item.style.visibility="hidden";
	console.log('Level 9');
}

function level10() {
	achtergrond.style.backgroundImage = 'url(img/end.jpg)';
	titel.innerHTML = 'Level 10';
	beschrijving.innerHTML = '10 dagen na de crash zie je eindelijk hulp aankomen en kan je het eiland verlaten.';
	button1.style.visibility="hidden";
	button2.innerHTML = 'Verlaat het eiland.';
	button2.onclick = win;
	button3.style.visibility="hidden";
	item.style.visibility="hidden";
	console.log('Level 10');
}

function win() {
	achtergrond.style.backgroundImage = 'url(img/heli.jpg)';
	titel.innerHTML = 'GEWONNEN!';
	beschrijving.innerHTML = 'Je bent leveld van het eiland afgekomen en je bent weer in de bewoonde wereld en je hebt gewonnen!';
	button1.style.visibility="hidden";
	button2.style.visibility="visible";
	button2.innerHTML = 'Speel opnieuw.';
	button2.onclick = start;
	button3.style.visibility="hidden";
	item.style.visibility="hidden";
	console.log('GEWONNEN!');
}

function dood() {
	achtergrond.style.backgroundImage = 'url(img/gameOvere.gif)';
	titel.innerHTML = 'Je bent dood';
	beschrijving.innerHTML = 'Je hebt de verkeerde keus gemaakt en bent nu dood. Klik op de knop "opnieuw spelen" om het spel opnieuw te spelen.';
	button2.innerHTML = 'Opnieuw spelen';
	button2.onclick = start;
	button1.style.visibility="hidden";
	button3.style.visibility="hidden";
	item.style.visibility="hidden";
	console.log('Dood');
}