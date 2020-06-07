var form
function setup() {
  createCanvas(800,400);
   form = new Form();
}

function draw() {
  background(255,205,25);  
  form.display();
}