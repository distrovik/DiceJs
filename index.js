var rando1 = Math.floor(Math.random() * 6) + 1;
var rando2 = Math.floor(Math.random() * 6) + 1;

var dice1 = "images/dice" + rando1 + ".png";
var dice2 = "images/dice" + rando2 + ".png";

document.querySelector(".img1").setAttribute("src", dice1);
document.querySelector(".img2").setAttribute("src", dice2);

if (rando1 === rando2) {
  document.querySelector("h1").innerHTML = "Draw!👀 Refresh Again!";
} else if (rando1 > rando2) {
  document.querySelector("h1").innerHTML = "☝🏼 Player 1 Wins!";
} else if (rando1 < rando2) {
  document.querySelector("h1").innerHTML = "✌🏼 Player 2 Wins!";
};
