var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth - 20;
canvas.height = 500;

var c = canvas.getContext('2d');

var maxRadius = 40;

var colorArray = ['#56B9D0', '#F24C27'];

function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }
    this.update = function(){
        if(this.x + this.radius > (innerWidth - 20) || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        if(this.y + this.radius > 500 || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        
        this.draw();
    }
}

var circleArray = [];
function init(){
    circleArray = [];
    for(var i = 0; i < 100; i++){
        var radius = Math.random() * 5 + 1;
        var x = Math.random() * (innerWidth - radius*2) + radius;
        var y = Math.random() * (500 - radius*2) + radius;
        var dx = (Math.random() - 0.5);
        var dy = (Math.random() - 0.5);
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for(var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
}
init();
animate();
