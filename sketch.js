function setup() {
  createCanvas(600, 600);
  background ("black");
}
function draw() {
  
  stroke("blue");
  fill("red");
  
  if(mouseIsPressed){
    circle(mouseX,mouseY, 100, 120);
  }
}


  