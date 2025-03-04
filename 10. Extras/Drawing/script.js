let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let xvalues = [];
let yvalues = [];

function draw(event) {
    let x = event.clientX - canvas.offsetLeft;
    let y = event.clientY - canvas.offsetTop;

    if (event.buttons !== 1) {
        ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        return;
    }

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    xvalues.push(x);
    yvalues.push(y);
    ctx.lineTo(x, y);
    ctx.stroke();
}