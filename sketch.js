var background,sleep,brush,gym,astronaut

function preload(){

background=loadimage("images/iss.png");  
sleep=loadimage("images/sleep.png");
brush=loadimage("images/brush.png");

gym=loadAnimation("images/gym1.png","images/gym2.png")
eat=loadimage("images/eat1.png")
drink=loadAnimation("images/drink1.png","images/drink2.png")
move=loadAnimation("images/move.png","images/move1.png")

}



function setup() {
  createCanvas(400, 400);
astronaut=createsprite("200,200,20,20")
astronaut.addAnimation("sleeping",sleep)
astronaut.scale=0.2
}

















function draw() {
  background(220);

  drawsprites()
}