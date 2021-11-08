const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let background = new GraphBackground();

let A = new Point(200, 200, 20, "red", true);
let B = new Point(300, 200, 20, "blue", true);

let C = new Point(10, 10, 15, "white", false);
let D = new Point(30, 10, 15, "white", false);

let E = new Point(300, 300, 20, "red", true);
let F = new Point(400, 300, 20, "blue", true);

let G = new Point(30, 10, 15, "white", false);
let H = new Point(30, 10, 15, "white", false);


let l = new LinearFunction(-1, 400);

for(let x = 0; x < 30; x+=5)
{
    console.log(l.y(x));
    let p = new Point(x, l.y(x), 2, "yellow");
    p.draw();
}

animate();

function animate()
{
    requestAnimationFrame(animate);
    context.clearRect(0, 0, width, height);
    background.draw();
    A.draw();
    B.draw();

    l.slope = (A.y - B.y) / (A.x - B.x);
    // y = ax + b
    // y - ax = b
    l.intercept = A.y - l.slope * A.x;

    C.x = 0;
    C.y = l.y(0)
    D.x = width;
    D.y = l.y(width);

    context.strokeStyle = "black";
    context.lineWidth = 2;

    context.beginPath();
    context.moveTo(C.x, C.y);
    context.lineTo(D.x, D.y);
    context.closePath();
    context.stroke();

    C.draw();
    D.draw();
    
    E.draw();
    F.draw();

    l.slope = (E.y - F.y) / (E.x - F.x);
    l.intercept = E.y - l.slope * E.x;

    G.x = 0;
    G.y = l.y(0)
    H.x = width;
    H.y = l.y(width);

    context.beginPath();
    context.moveTo(G.x, G.y);
    context.lineTo(H.x, H.y);
    context.closePath();
    context.stroke();

    G.draw();
    H.draw();
}