let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

// Line
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.lineTo(150, 150);
ctx.stroke();

// Rectangle
ctx.fillStyle = "#FF0000";
ctx.fillRect(30, 40, 150, 75);

// Arc
ctx.strokeStyle = "#FFBB00";
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

// Text
ctx.fillStyle = "#0000CC";
ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50);
