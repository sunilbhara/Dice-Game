// For Dice 1
var randomNumber1 = Math.floor((Math.random() * 6) + 1) ;

var randomDiceImage1 = "/images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage1);


// Foe Dice 2
var randomNumber2 = Math.floor((Math.random() * 6) + 1) ;

var randomDiceImage2 = "/images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);


// If player 1 wins
if(randomNumber1>randomNumber2)
{
    document.querySelector("h2").innerHTML = "🏆 Player 1 wins!!";
}

else if(randomNumber1<randomNumber2)
{
    document.querySelector("h2").innerHTML = "Player 2 wins!! 🏆";
}

else
{
    document.querySelector("h2").innerHTML = "Draw!";
}