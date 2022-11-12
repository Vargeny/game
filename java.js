var title = document.getElementById("Title");
var die1 = document.getElementById("Die1");
var die2 = document.getElementById("Die2");

var value1 = (Math.round((Math.random()*5)+1));
var value2 = (Math.round((Math.random()*5)+1));

die1.setAttribute("src","Page"+value1+".png");
die2.setAttribute("src","Page"+value2+".png");

if (value1 > value2) title.textContent = "Player 1 Win";
else if (value2 > value1) title.textContent = "Player 2 Win";
else title.textContent = "Draw";
