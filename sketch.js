let brushStrokes = [];
let line1 = "Diseño y Prog. Web";
let line2 = "Parcial 1";

let displayedLine1 = "";
let displayedLine2 = "";

let charIndex1 = 0;
let charIndex2 = 0;
let typingSpeed = 6;

let bannerHeight = 400; 

function setup() {
  let canvas = createCanvas(windowWidth, bannerHeight);
  canvas.parent('banner-container'); 
  frameRate(30);

 
  textFont('Dancing Script');
  textSize(64);
  textAlign(CENTER, CENTER);
}

function draw() {
  
  background(230, 230, 255, 30); 

  if (frameCount % 5 === 0) {
    let brush = {
      x: random(width),
      y: random(height),
      r: random(10, 60),
      col: color(
        random(180, 255),  
        random(180, 255),  
        random(180, 255),  
        180                
      ),
      vx: random(-1, 1),
      vy: random(-1, 1)
    };
    brushStrokes.push(brush);
  }

  for (let i = brushStrokes.length - 1; i >= 0; i--) {
    let b = brushStrokes[i];
    noStroke();
    fill(b.col);
    ellipse(b.x, b.y, b.r, b.r * 0.6);
    b.x += b.vx;
    b.y += b.vy;
    if (brushStrokes.length > 200) {
      brushStrokes.splice(0, 1);
    }
  }

  
  if (frameCount % typingSpeed === 0 && charIndex1 < line1.length) {
    displayedLine1 += line1[charIndex1];
    charIndex1++;
  }

  
  stroke(255, 182, 193); 
  strokeWeight(3);        
  fill(255);             
  text(displayedLine1, width / 2, height / 2 - 40); 

  
  if (charIndex1 === line1.length && frameCount % typingSpeed === 0 && charIndex2 < line2.length) {
    displayedLine2 += line2[charIndex2];
    charIndex2++;
  }

  
  stroke(255, 182, 193); 
  strokeWeight(3);        
  fill(255);              
  text(displayedLine2, width / 2, height / 2 + 40); 
}

function windowResized() {
  resizeCanvas(windowWidth, bannerHeight); 
}

