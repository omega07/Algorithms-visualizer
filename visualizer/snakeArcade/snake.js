let head;
class Snake {
    constructor() {
        this.xspeed = 1;
        this.yspeed = 0;
        this.snk = [];
        this.snk[0] = createVector(10,10);
        this.total = 1;
        this.score = 0;
        this.w = 550;
        this.h = 550;
    }

    
    grow() {
        let head = this.snk[this.snk.length-1].copy();
        this.snk.push(head);
    }

    updateScore() {
        var x = document.getElementById("score");
        x.value = this.score;    
        console.log(x.value);
    }

    eat(food) {
        var d = int(dist(this.snk[this.snk.length-1].x,this.snk[this.snk.length-1].y,food.x,food.y));
        if(d <= 12) {
            this.total++;
            this.grow();
            return true;
        }
        return false;
    }

    move() {
        let head = this.snk[this.snk.length-1].copy();
        this.snk.shift();
        head.x += this.xspeed;
        head.y += this.yspeed;
        if(head.x > this.w) head.x = 1;
        if(head.y > this.h) head.y = 1;
        if(head.x <= 0) head.x = this.w-1;
        if(head.y <= 0) head.y = this.h-1;
        this.snk[this.snk.length] = head;
    }

    display() {
        for(var i=0;i<this.snk.length;i++) {
            rectMode(CENTER);
            stroke(0);
            fill(0,255,0);
            if(this.snk[i].x >= this.w) {
                console.log(1);
                fill(0);
            }
            rect(this.snk[i].x,this.snk[i].y,10,10);
        }
    }


};