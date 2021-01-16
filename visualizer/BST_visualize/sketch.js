// Binary tree
var tree;
var num=window.prompt("Enter the number of elements you want in the BST");
while(!number(num)) {
    alert('Enter a valid number');
    num = window.prompt("Enter the number of points on the plane!");
}

var ele=window.prompt("Enter the elements space seperated\nDo not enter repeated elements");
var cnt = 0;
while(cnt != num) {
  cnt = 0;
  var n = ele.length;
  var s = "";
  for(var i=0;i<n;i++) {
    if(ele[i]==" ") {
      if(s.length) cnt++;
      s = "";
    }
    else {
      s = s+ele[i];
    }
  }
  if(s.length) cnt++;
  if(cnt == num) break;
  else ele=window.prompt("Enter the elements space seperated");
}


function setup() {
  createCanvas(600, 400);

  var n = ele.length;
  var s = "";
  var cnt = 0, k = 0;
  var a = [];
  for(var i=0;i<n;i++) {
    if(ele[i]==" ") {
      if(s.length) {
        cnt++;
        console.log(s);
        var number = convert(s);
        a.push(number);
        k++;
        s = "";
      }
    }
    else {
      s = s+ele[i];
    }
  }
  if(s.length) a.push(convert(s));
  // New tree
  tree = new Tree();

  for (var i = 0; i < num; i++) {
    tree.addValue(a[i]);
  }

  background(0);

  // Traverse the tree
  tree.traverse();
  var result = tree.search(null);
  if (result == null) {
    console.log("not Found");
  } else {
    console.log(result);
  }
}

function convert(str) {
  var res = 0;
  var len = str.length;
  for(var i=len-1;i>=0;i--) res = res+Math.pow(10,len-i-1)*(str[i]-'0');
  return res;
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

window.onload = function() {
  var buttonClicked = document.getElementById('butt');
  buttonClicked.onclick = function () {ssearch()};
  function ssearch() {
    var num_to_be_searched = document.getElementById('to_be_searched').value;
    if(!number(num_to_be_searched) || num_to_be_searched.length==0) {
      alert("Enter a number");
      return;
    }
    console.log(num_to_be_searched);
    var result = tree.search(num_to_be_searched);
    if (result == null) {
      alert('The number you are searching for is not found!')
    } else {
      alert('The number is found in the BST!\nconsole for more info');
      console.log(result);
    }

  }
}
