// Nicky Devilee | 99047338
// Bol4 applicatieontwikkelaar
// Blok 2
// Week 11-13 - Adventure game
// Lab - Buttons

var tellen1 = 0;
var tellen2 = 0;
var tellen3 = 0;

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');

document.getElementById("btn1").onclick = button1;
document.getElementById("btn2").onclick = button2;
document.getElementById("btn3").onclick = button3;

function button1() {
	tellen1++;
	btn1.innerHTML = tellen1;
	document.getElementById('kleineFoto').src = 'images/1.jpg';
	document.getElementById('container').style.background = 'url(images/bg1.jpg)';
	btn1.style.backgroundColor = "red";
	btn2.style.backgroundColor = "#4CAF50";
	btn3.style.backgroundColor = "#4CAF50";
    btn1.disabled = true;
    btn2.disabled = false;
    btn3.disabled = false;
}

function button2() {
	tellen2++;
	document.getElementById('btn2').innerHTML = tellen2;
	document.getElementById('kleineFoto').src = 'images/2.jpg'
	document.getElementById('container').style.background = 'url(images/bg2.jpg)';
	document.getElementById('btn1').style.backgroundColor = "#4CAF50";
	document.getElementById('btn2').style.backgroundColor = "red";
	document.getElementById('btn3').style.backgroundColor = "#4CAF50";
    document.getElementById('btn1').disabled = false;
    document.getElementById('btn2').disabled = true;
    document.getElementById('btn3').disabled = false;
}

function button3() {
	tellen3++;
	document.getElementById('btn3').innerHTML = tellen3;
	document.getElementById('kleineFoto').src = 'images/3.jpg'
	document.getElementById('container').style.background = 'url(images/bg3.jpg)';
	document.getElementById('btn1').style.backgroundColor = "#4CAF50";
	document.getElementById('btn2').style.backgroundColor = "#4CAF50";
	document.getElementById('btn3').style.backgroundColor = "red";
    document.getElementById('btn1').disabled = false;
    document.getElementById('btn2').disabled = false;
    document.getElementById('btn3').disabled = true;
}