let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let x = 20;
let y = 30;
let w = 5;
let h = 5;
let radius = 20.5;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle="#FF0000";
  ctx.strokeStyle="#0000FF";
  ctx.fillRect(x, y, w, h);
  x += 2;
  y += 2;
  ctx.font = "20px Arial";
  ctx.fillText("Hello", 20, 20);
}

setInterval(draw, 100);
