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

// document.getElementById('game-container').style.background = 'url(img/startscherm.jpg)';
// document.getElementById("btn1").onclick = button1;

window.onload = start();

function start() {
	achtergrond.style.backgroundImage = 'url(img/plane.jpg)';
	titel.innerHTML = 'Startscherm';
	beschrijving.innerHTML = 'Je zit in een vliegtuig onderweg nar Indonesië. Het vliegtuig stort neer op een, voor zover bekend, onbewoond eiland. Het is aan jou om de juiste keuzes te maken en het eiland te verlaten. Je bent, voor zover je weet, de enige overlever van de crash en je hebt geen spullen op zak. Als je de verkeerde keuze maakt ben je dood.';
	button1.style.visibility="hidden";
	button2.innerHTML = 'Start spel';
	button2.onclick = level1;
	button3.style.visibility="hidden";
	item.style.visibility="hidden";
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
	beschrijving.innerHTML = 'Je loopt langs een riviertje met veel stenen en helder water terwijl je richting de berg loopt. Besluit je om door te lopen of om water uit de rivier te drinken?';
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
	item.style.display = 'none';
	steen = true;
}

function level4() {
	alert('biem');
}

	// achtergrond.style.backgroundImage = 'url(img/woud.jpg)';
	// titel.innerHTML = 'Level 2';
	// beschrijving.innerHTML = '?';
	// button1.style.visibility="visible";
	// button1.innerHTML= 'Ja, ik eet de kokosnoot op.';
	// button1.onclick = level2;
	// button2.innerHTML = 'Nee, ik eet de kokosnoot niet.';
	// button2.onclick = dood;
	// button3.style.visibility="visible";
	// button3.innerHTML = 'Ik neem de kokosnoot mee voor later.';
	// button3.onclick = kokosNoot;
	// item.style.visibility="hidden";
	// console.log('Level 2');




function dood() {
	achtergrond.style.backgroundImage = 'url(img/dood.png)';
	titel.innerHTML = 'Je bent dood';
	beschrijving.innerHTML = 'Je hebt de verkeerde keus gemaakt en bent nu dood. Klik op de knop "opnieuw spelen" om het spel opnieuw te spelen.';
	button2.innerHTML = 'Opnieuw spelen';
	button2.onclick = start;
	button1.style.visibility="hidden";
	button3.style.visibility="hidden";
	item.style.visibility="hidden";
	console.log('Dood');
}