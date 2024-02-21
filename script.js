console.log("Piedra, Papel o Tijeras");
/* definiendo las opciones a las que tendrá acceso la pc*/
const opciones = ["piedra", "papel", "tijera"];
/*definiendo la elección del usuario*/
let playerChoice = "";
/*variable con los rounds a jugar y la puntuación*/
let rounds = 0;
let score= 0;
/*función para obtener la elección de la pc*/
let computerChoice = "";
function getComputerChoice(){
    computerChoice = Math.floor(Math.random()*opciones.length);
}
/*función de un juego simple*/
function singleRound(rounds, score){
    let playerChoice = prompt("elige piedra, papel o tijera: ").toLowerCase();
    if (!opciones.includes(playerChoice)){
        console.log("escribe bien, pierdes un punto")
        if(score >= 0){
            score--;
        }
        return "tu puntaje es " + score;
    }
        if (playerChoice == opciones[computerChoice]){
            return "empate";
        }
        else if ((playerChoice == "piedra" && opciones[computerChoice] == "tijera") ||
                (playerChoice == "tijera" && opciones[computerChoice] == "papel") ||
                (playerChoice == "papel" && opciones[computerChoice] == "piedra")) {
                    return "Ganaste, "+playerChoice+ " gana a " +opciones[computerChoice]+", sumas un punto";
                }
        else {
            return "perdiste, "+playerChoice+ " no puede contra " +opciones[computerChoice]+ ", pierdes un punto";
            
        }
    }
/*función para jugar varias rondas*/
function playGame(){
    getComputerChoice();
    console.log(singleRound());

}

playGame();
playGame();
playGame();
playGame();
playGame();

