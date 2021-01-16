var vertices = [];

function setup() {
  createCanvas(400, 400);
}

function mousePressed() {
  var v = createVector(mouseX,mouseY);
  vertices.push(v);
}

function draw() {
  background(0);
  
  var reached = [], unreached = [];
  for(var i=0;i<vertices.length;i++) {
    unreached.push(vertices[i]);
  }
  reached.push(unreached[0]);
  unreached.splice(0,1);
  
  while(unreached.length > 0) {
    var currmin = 400*2, reachedIndex, UnreachedIndex;
    for(var i=0;i<reached.length;i++) {
      for(var j=0;j<unreached.length;j++){
        var v1 = reached[i], v2 = unreached[j];
        var d = dist(v1.x,v1.y,v2.x,v2.y);
        if(d < currmin) {
          currmin = d; 
          reachedIndex = i;
          unreachedIndex = j;
        }
      }
    }
    
    var from = reached[reachedIndex], to = unreached[unreachedIndex];
    line(from.x,from.y,to.x,to.y);
    reached.push(unreached[unreachedIndex]);
    unreached.splice(unreachedIndex,1);
  }
  
  fill(255);
  stroke(255);
  for(var i=0;i<vertices.length;i++) {
    ellipse(vertices[i].x,vertices[i].y,8,8);
  }
}