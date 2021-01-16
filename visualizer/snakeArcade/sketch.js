let s;
var food, scl = 10, speed = 10, cnt = 1;

function setup() {
    var canvas = createCanvas(550,550);
    canvas.position((windowWidth-width)/2, (windowHeight-height)/2);
    s = new Snake;
    frameRate(10);
    foodlocation();
}

function foodlocation() {
    var cols = floor(400/scl);
    var rows = floor(400/scl);
    food = createVector(floor(random(cols)),floor(random(rows)));
    food.mult(scl);
}

function draw() {
    background(0);
    s.move();
    s.display();
    if(s.eat(food)) {
        s.score++;
        foodlocation();
        s.updateScore();
    }
    noStroke();
    fill(255,0,0);
    ellipseMode(CENTER);
    if(food.x <= 0) food.x += 7;
    if(food.y <= 0) food.y += 7;
    if(food.x >= width) food.x -= 7;
    if(food.y >= height) food.y -= 7;
    ellipse(food.x,food.y,scl,scl);
}

function keyPressed() {
    if(keyCode === UP_ARROW) {
        s.yspeed = -speed;
        s.xspeed = 0;
    } else if(keyCode === DOWN_ARROW) {
        s.yspeed = speed;
        s.xspeed = 0;
    } else if(keyCode === LEFT_ARROW) {
        s.xspeed = -speed;
        s.yspeed = 0;
    } else if(keyCode === RIGHT_ARROW) {
        s.xspeed = speed;
        s.yspeed = 0;
    } else {
        if(cnt%2) noLoop();
        else loop(); 
        cnt++;
    }
}
