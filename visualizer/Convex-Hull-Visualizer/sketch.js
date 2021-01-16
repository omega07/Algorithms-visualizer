var num = window.prompt("Enter the number of points on the plane!");
while(!number(num)) {
    alert('Enter a valid number');
    num = window.prompt("Enter the number of points on the plane!");
}
function number(n) {
    var sz = n.length;
    if(n[0] == '0') return false;
    for(var i=0;i<sz;i++) {
      if(n[i] >= '0' && n[i] <= '9') ;
      else return false;
    }
    return true;
}
let points = [];
var leftmost;
const hull = [];

var currVertex, index=0, nextVertex, nextindex=-1;
function setup() {
  var cnv = createCanvas(700, 600);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  for(var i=0;i<num;i++) {                
      points.push(createVector(random(10,690),random(10,590)));
  }
  points.sort((a,b) => a.x-b.x);
  leftmost = points[0];
  currVertex = points[0];
  hull.push(currVertex);
  nextVertex = points[1];
  index = 2;
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4)
  for(let i of points) {
     point(i.x, i.y); 
  }
  stroke(0,0,255);
  fill(0,0,255,50);
  strokeWeight(2);
  beginShape();
  for(let p of hull) {
    vertex(p.x,p.y);
  }
  endShape(CLOSE);
  strokeWeight(2);
  line(currVertex.x, currVertex.y,nextVertex.x,nextVertex.y);
  let checkForVertex = points[index];
  stroke(0,255,0);
  line(currVertex.x, currVertex.y,checkForVertex.x,checkForVertex.y);
  //erase();
  let a = p5.Vector.sub(nextVertex,currVertex);
  let b = p5.Vector.sub(checkForVertex,currVertex);
  let crossprdt = a.cross(b);
  if(crossprdt.z <= 0) {
    // checking is to the left
    nextVertex = checkForVertex;
    nextindex = index;
  }
  index = index + 1;
  if(index == points.length) {
    if(nextVertex == leftmost) {
      var j = hull.length
      alert('Convex Hull of '+ j + ' points');
      noLoop();
    }
    else {
      hull.push(nextVertex);
      currVertex = nextVertex;
      index = 0;
      points.splice(nextindex,1);
      nextVertex = leftmost;
    }
  }
}
