var choices = ["paper", "rock", "scissors"];
var i = Math.floor(Math.random() * 3);
var ComChoice = choices[i];
var UserPoints = 0;
let gameSet = 0;
var ComPoints = 0;
let sound = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-video-game-win-2016.mp3");
function score(){
	var score_div = document.getElementById("score").innerHTML = UserPoints + " - " + ComPoints;
}

/* function namegame() {
    var name = document.getElementById("name").value;
    document.getElementById("display").innerHTML = name;
} */

setInterval(score, 50);
function convert(word){
	if(word === "paper") return '<i class="far fa-hand-paper"></i>';
	if(word === "rock") return '<i class="far fa-hand-rock"></i>';
	return '<i class="far fa-hand-scissors"></i>'
}

let sum = 0;
console.log(sum);

function game(UserChoice){
	var box = document.getElementById("challenge");
	box.style.display = "inline-flex";
	var userDiv = document.getElementById("YourObject");
	userDiv.innerHTML = convert(UserChoice);
	var comDiv = document.getElementById("ComObject");
	comDiv.innerHTML = convert(ComChoice);
	if(UserChoice === "paper" && ComChoice === "rock" || UserChoice === "rock" && ComChoice === "scissors" || UserChoice === "scissors" && ComChoice === "paper"){
		win(UserChoice); 
	}
	else if(UserChoice === ComChoice){
		draw(UserChoice);
	}
	else{
		lose(UserChoice);
	}
	function continuGame(){
		i = Math.floor(Math.random() * 3);
		ComChoice = choices[i];
		box.style.display = "none";
	}
	setTimeout(continuGame, 1500); //Timer resultatet försvinner
	console.log("next round")

}

//GameOver funktion till highscore LocalStorage
 function gameRound() {
	if(gameSet <= 3){
		gameSet++;
	
	} else {
		console.log('Game Over');
		this.toggleScreen('gameoverScreen',true);
	}
} 

function playAgin() {
	document.location.reload();
    clear(UserPoints); 
}



function toggleScreen(id,toggle) {
	let element = document.getElementById(id);
	let display = ( toggle ) ? 'block' : 'none';
	element.style.display = display;
}

function win(bn){
	UserPoints++;
    document.getElementById("who").innerHTML = "You win! <br>  Next round";
    var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("green");
	/*sound.play();*/
	gameRound();
    setTimeout(() => {
		bn.classList.add("bn");
        bn.classList.remove("green");
    }, 1500);
}

function draw(bn){
	document.getElementById("who").innerHTML = "It's a Draw. <br>  Next round";
	var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("gray");
	/*sound.play();*/
	gameRound();
    setTimeout(() => {
		bn.classList.add("bn");
        bn.classList.remove("gray");
    }, 1500);
}

function lose(bn){
	ComPoints++;
	document.getElementById("who").innerHTML = "You lose... <br>  Next round";
	var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("red");
	/*sound.play();*/
	gameRound();
    setTimeout(() => {
		bn.classList.add("bn");
        bn.classList.remove("red");
    }, 1500);
}

