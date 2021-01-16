var cities = [], bestPermutation = [];
var totalCities = 0, cnt = 0, recordDistance = 0, x;

totalCities = window.prompt('Enter the number of cities!');


function setup() {
  createCanvas(500, 500);
  for(var i=0;i<totalCities;++i) {
    cities[i] = createVector(random(400),random(350));
  }
  recordDistance = calcDistance(cities);
  bestPermutation = cities.slice();
  x = factorial(cities.length);
}

function draw() {
  background(0);
  //frameRate(2);
  fill(255);
  for(var i=0;i<cities.length;++i) {
    ellipse(cities[i].x,cities[i].y,8,8);
  }
  stroke(255);
  strokeWeight(1);
  noFill();
  beginShape();
  for(var i=0;i<cities.length;++i) {
    vertex(cities[i].x,cities[i].y);
  }
  endShape();
  if(cnt >= x) {
    clear();
    stroke(255,0,220);
    strokeWeight(2);
    noFill();
    beginShape();
    for(var i=0;i<bestPermutation.length;++i) {
      vertex(bestPermutation[i].x,bestPermutation[i].y);
    }
    endShape();
    noLoop();
  }
  nextPermutation(cities);
  var d = calcDistance(cities);
  if(d < recordDistance) {
    recordDistance = d;
    //console.log(recordDistance);
    bestPermutation = cities.slice();
    //console.log(bestPermutation);
  }
  var done = cnt/x;
  done *= 100;
  //done += "00000";
  //done = done.substring(0,6);
  strokeWeight(1);
  text(done+' %',20,20);
  textSize(20);
  //textFont('Georgia');
  cnt++;
}

function factorial(n) {
  if(n==0) return 1;
  return n*factorial(n-1);
}

var nextPermutation = function(nums) {
  var len = nums.length;
  var i = len - 2;
  var j = len - 1;
  
  while (i >= 0 && nums[i] >= nums[i + 1]) i--;
  
  if (i >= 0) {
    while (j > i && nums[j] <= nums[i]) j--;
    swap(nums, i, j);
    revers(nums, i + 1, len - 1);
  } else {
    revers(nums, 0, len - 1);
  }
};

var swap = function (arr, from, to) {
  var tmp = arr[from];
  arr[from] = arr[to];
  arr[to] = tmp;
};

var revers = function (arr, start, end) {
  while (start < end) {
    swap(arr, start, end);
    start++;
    end--;
  }
};

function calcDistance(points) {
  var sum = 0;
  for (var i = 0; i < points.length - 1; i++) {
    var d = dist(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
    sum += d;
  }
  return sum;
}

