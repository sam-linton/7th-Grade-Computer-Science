const canvas = document.getElementById('myCanvas');

// Fix the height and width values based on styled sizes
canvas.width = canvas.getBoundingClientRect().width;
canvas.height = canvas.getBoundingClientRect().height;
const ctx = canvas.getContext('2d');

let x = 10;
let y = 10;
let u = 1;
let v = 2;

setInterval(update, 10);

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(x, y, 10, 10);

    x += u;
    y += v;

    if (x < 0 || x > canvas.clientWidth - 10) {
        u = -u;
    }
    if (y < 0 || y > canvas.clientHeight - 10) {
        v = -v;
    }
}

