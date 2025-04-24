// this is just a dummy banner
// you can do whatever you want in a banner
function myFunction() {
	window.open(clickTag);
}

document.onmousemove = animateCircles; // circle follow mouse

var colors = ['#1abc9c', '#3498db', '#f1c40f']

function animateCircles(event) {
  var circle = document.createElement("div");
  circle.setAttribute("class", "circle");
  document.body.appendChild(circle); // adds function to body

  // adds motion
  circle.style.left = event.clientX + 'px';
  circle.style.top = event.clientY + 'px';

  // randomize color
  var color = colors[Math.floor(Math.random() * colors.length)];
  circle.style.borderColor = color;

  // adds animation
  circle.style.transition = "all 0.5s linear 0s";

  circle.style.left = circle.offsetLeft - 25 + 'px';
  circle.style.top = circle.offsetTop - 25 + 'px';

  circle.style.width = "50px";
  circle.style.height = "50px";
  circle.style.borderWidth = "5px";
  circle.style.opacity = 0;
}