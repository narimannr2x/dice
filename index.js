// random dice left

var randomNumber1 = Math.floor (Math.random() * 6 ) ;
if ( randomNumber1 === 0 ) {
  document.querySelector(".img1").setAttribute("src","images/dice1.png");
}
else if (randomNumber1 === 1) {
  document.querySelector(".img1").setAttribute("src","images/dice2.png");
}
else if (randomNumber1 === 2) {
  document.querySelector(".img1").setAttribute("src","images/dice3.png");
}
else if (randomNumber1 === 3) {
  document.querySelector(".img1").setAttribute("src","images/dice4.png");
}
else if (randomNumber1 === 4) {
  document.querySelector(".img1").setAttribute("src","images/dice5.png");
}
else if (randomNumber1 === 5) {
  document.querySelector(".img1").setAttribute("src","images/dice6.png");
}

// random dice right

var randomNumber2 = Math.floor (Math.random() * 6 ) ;
if ( randomNumber2 === 0 ) {
  document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
else if (randomNumber2 === 1) {
  document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
else if (randomNumber2 === 2) {
  document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
else if (randomNumber2 === 3) {
  document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
else if (randomNumber2 === 4) {
  document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
else if (randomNumber2 === 5) {
  document.querySelector(".img2").setAttribute("src","images/dice6.png");
}

// winning statement

if ( randomNumber1 > randomNumber2 ) {
  document.querySelector("h1").innerHTML = "Player1 Winsss" ;
}
else if ( randomNumber2 > randomNumber1 ) {
  document.querySelector("h1").innerHTML = "Player2 Winsss" ;
}
else {
  document.querySelector("h1").innerHTML = "Draw" ;
}
