let cor;
let posicaoHorizontal;
let posicaoVertical;

function setup() {
  createCanvas(400, 400);
   background(250);
  cor = color (random(0,250),random(0,250),random(0,250));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}
function draw() {
 
  rect(0,0,100,100)
    circle(posicaoHorizontal, posicaoVertical, 20);
  stroke("yellow")
  strokeWeight(5)
  fill(cor);
  if (mouseX<posicaoHorizontal)
    {
      posicaoHorizontal = posicaoHorizontal - 1;
      
     }
  if (mouseX>posicaoHorizontal)
    {
      posicaoHorizontal = posicaoHorizontal + 1;
      
     }
  if (mouseY<posicaoVertical)
    {
      posicaoVertical --;
      
     }
    if (mouseY>posicaoVertical)
    {
      posicaoVertical ++;
      
     }
 if (mouseIsPressed)
   {
     
     rect(mouseX, mouseY,20,20);
    
      }
 
   // else
     //   {
    // fill(cor);
  //  }  
  
  //if (mouseIsPressed)
  // {
   //  fill(cor)
   
   //   }
  
       
}