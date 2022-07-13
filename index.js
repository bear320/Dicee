// dice for Player1
var randomNumber1 = Math.floor(Math.random() * 6 + 1); // get a random number between 1 - 6
var randomDiceImageSource1 = "images/dice" + randomNumber1 + ".png"; // images/dice1.png - images/dice6.png
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImageSource1);

// dice for Player2
var randomNumber2 = Math.floor(Math.random() * 6 + 1); // get a random number between 1 - 6
var randomDiceImageSource2 = "images/dice" + randomNumber2 + ".png"; // images/dice1.png - images/dice6.png
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImageSource2);

// change h1 to display the result
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "✌🏻 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! ✌🏻";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
