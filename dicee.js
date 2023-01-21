// random Variable 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
// For Player 1
let randomDiceImg1 = "images/dice" + randomNumber1 + ".png"  //imagesdice1.png-imagesdice6.png
let player1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImg1);   //For image 1

// random Variable 2
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
// For Player 2
let randomDiceImg2 = "images/dice" + randomNumber2 + ".png";
let player2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImg2); //For image 2

//Winer
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = ("Player 1 Wins!");
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = ("Player 2 Wins!");
}
else {
    document.querySelector("h1").innerHTML = ("It's a draw");
}
