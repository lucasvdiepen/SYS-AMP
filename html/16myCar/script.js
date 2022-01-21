const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let background, car, pos, vel, frontWheel, backWheel;

background = new GraphBackground();
car = new Image();
car.src = "images/car.png";

frontWheel = new Image();
frontWheel.src = "images/wheel.png";
frontWheel.angle = 0;
frontWheel.dAngle = 0.1;

backWheel = new Image();
backWheel.src = "images/wheel.png";
backWheel.angle = 0;
backWheel.dAngle = 0.1;

pos = 0;
vel = 3;

animate();

function animate()
{
    requestAnimationFrame(animate);
    context.clearRect(0, 0, width, height);

    background.draw();

    context.drawImage(car, pos, 100);

    pos += vel;

    
    context.save();
    
    context.translate(751 + pos, 300);
    context.rotate(frontWheel.angle);
    context.drawImage(frontWheel, -frontWheel.width / 2, -frontWheel.height / 2);
    
    context.restore();
    
    context.save();
    
    context.translate(211 + pos, 296);
    context.rotate(backWheel.angle);
    context.drawImage(backWheel, -backWheel.width / 2, -backWheel.height / 2);
    
    context.restore();
    
    frontWheel.angle += frontWheel.dAngle;
    backWheel.angle += backWheel.dAngle;

    if(pos > width)
    {
        pos = -car.width;
    }
}