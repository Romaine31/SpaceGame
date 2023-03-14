var character = document.getElementById("character");
var obstacle = document.getElementById("obstacle");
var hole = document.getElementById("hole");
var counter = 0;

obstacle.addEventListener("animationiteration", () => {
		var move = Math.floor(Math.random() * 360);
		hole.style.left = move + "px";
		counter++;
});

function init (){
	character.style.position='relative';
	character.style.left='200px';
	character.style.top='420px';
}
window.onload=init;

function moveL(){
	if (parseInt(character.style.left) > 0)
		character.style.left = parseInt(character.style.left)-6 + "px";
}

function moveR(){
	if (parseInt(character.style.left) < 380)
		character.style.left = parseInt(character.style.left)+6 + "px";
}

function moveU(){
	if (parseInt(character.style.top) > 0)
		character.style.top = parseInt(character.style.top)-6 + "px";
}

function moveD(){
	if (parseInt(character.style.top) < 480)
		character.style.top = parseInt(character.style.top)+6 + "px";
}

function moveChar(k){
	var key = k.keyCode;
	switch(key){
		case 65:
			moveL();
			break;
		case 68:
			moveR();
			break;
		case 87:
			moveU();
			break;
		case 83:
			moveD();
			break;
	}
}

setInterval(function() {
	let charHitBox = character.getBoundingClientRect();
	let holeHitBox = hole.getBoundingClientRect();
	if (charHitBox.left >= holeHitBox.left && charHitBox.right <= holeHitBox.right){
	}
	else if(holeHitBox.bottom <= charHitBox.top || charHitBox.bottom <= holeHitBox.top){		
	}
	else{
		window.location.replace("gameOver.html?"+counter);
		clearInterval(obstacle, hole);
	}
},1);