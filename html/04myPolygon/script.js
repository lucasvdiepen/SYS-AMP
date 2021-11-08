const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

let numberOfPoints = 4;
let points = [];

canvas.width = width;
canvas.height = height;

let background = new GraphBackground();

for(let i = 0; i < numberOfPoints; i++)
{
    let point = new Point(Math.random()*width, Math.random()*height, 15, "red", true);
    points.push(point);
}

let point = new Point(200, 200, 15, "red", true);

animate();

function animate()
{
    requestAnimationFrame(animate);
    context.clearRect(0, 0, width, height);
    background.draw();
    for(let i = 0; i < numberOfPoints; i++)
    {
        points[i].draw();
    }

    context.beginPath();
    context.fillStyle = "rgba(255, 255, 0, 0.4)";
    context.moveTo(points[0].x, points[0].y);
    for(let i = 0; i < numberOfPoints; i++)
    {
        context.lineTo(points[i].x, points[i].y);
    }
    context.closePath();
    context.stroke();
    context.fill();
}