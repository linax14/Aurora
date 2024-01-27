let angle = 0.0;

let starX = [];
let starY = [];

let bgColour = `rgb(15, 0, 18)`;
let stop2Colour = `rgba(15, 0, 18, 0)`;

let stop3Colour = [
  `rgb(95, 35, 116)`,
  `rgb(61, 161, 255)`,
  `rgb(54, 163, 109)`,
  `rgb(85, 17, 84)`,
  `rgb(46, 53, 136)`,
  `rgb(210, 31, 103)`,
  `rgb(96, 86, 218)`,
  `rgb(0, 255, 255)`,
];

let stop4Colour = [
  `rgb(32, 207, 248)`,
  `rgb(61, 255, 148)`,
  `rgb(242, 56, 183)`,
  `rgb(255, 69, 144)`,
  `rgb(255, 42, 89)`,
  `rgb(0, 250, 254)`,
  `rgb(231, 255, 96)`,
  `rgb(148, 255, 5)`,
  `rgb(166, 58, 255)`,
  `rgb(255, 182, 254)`,
];

let stop5Colour = [
  `rgb(253, 255, 131)`,
  `rgb(255, 237, 146)`,
  `rgb(248, 255, 220)`,
  `rgb(255, 207, 130)`,
  `rgb(194, 255, 133)`,
  `rgb(219, 172, 255)`,
  `rgb(255, 216, 255)`,
  `rgb(200, 255, 255)`,
];

let stop5ColourCopy = [
  `rgba(253, 255, 131,0)`,
  `rgba(255, 237, 146,0)`,
  `rgba(248, 255, 220,0)`,
  `rgba(255, 207, 130,0)`,
  `rgba(194, 255, 133,0)`,
  `rgba(219, 172, 255,0)`,
  `rgba(255, 216, 255,0)`,
  `rgba(200, 255, 255,0)`,
];

let s3ColourIndex = 0;
let s4ColourIndex = 0;
let s5ColourIndex = 0;

let mountainVerVariation;
let mountainVerVariation2;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 450; i++) {
    starX[i] = random(width);
    starY[i] = random(height / 3);
  }

  mountainVerVariation = random(0, 50);
  mountainVerVariation2 = random(0, 100);
}

function draw() {
  background(bgColour);
  star();

  push();
  translate(0, -150);
  mountainsV2();
  pop();

  push();
  translate(-120, -50);
  mountainsV2();
  pop();

  push();
  translate(0, 80);
  mountains(2.2, 0.9);
  pop();

  push();
  translate(-500, 130);
  mountains(1.3, 1);
  pop();

  push();
  translate(700, 135);
  mountains(1.1, 1);
  pop();

  push();
  translate(0, -150);
  aurora();
  pop();

  if (keyIsDown(LEFT_ARROW)) {
    angle -= 0.4;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    angle += 0.2;
  }

}

function aurora() {
  strokeWeight(4);
  let scalar = 20; 
  
  angle += 0.1;
  strokeCap(PROJECT);

  push();
  for (let x = 0; x < width; x += 4) {

    let y = 750 + sin(angle + x * 0.012) * scalar;

    let grad2 = drawingContext.createLinearGradient(0, 0, 0, y);
    grad2.addColorStop(0, bgColour);
    grad2.addColorStop(0.37, stop2Colour);
    grad2.addColorStop(0.5, stop3Colour[s3ColourIndex]);
    grad2.addColorStop(0.6, stop4Colour[s4ColourIndex]);
    grad2.addColorStop(0.75, stop5Colour[s5ColourIndex]);
    grad2.addColorStop(0.8, stop5ColourCopy[s5ColourIndex]);
    drawingContext.strokeStyle = grad2;

    line(x, 100, x, y);
  }
  pop();
}

function star() {
  push();
  for (let i = 0; i < starX.length; i++) {
    let x = starX[i]
    let y = starY[i]

    noStroke();
    let opacity = random(0, 255);
    fill(255, opacity);

    circle(x, y, random(0, 3));
  }
  pop();
}

function keyPressed() {
  if (
    key == "d" || key == "D" || key == "g" || key == "G" || key == `o` ||
    key == `O` || key == `m` || key == `M` || key == `p` || key == `P` ||
    key == `h` || key == `H` || key == `k` || key == `K` || key == `z` ||
    key == `Z`) {

    s3ColourIndex = floor(random(stop3Colour.length));

  } else if (
    key == `w` || key == `W` || key == `b` || key == `B` || key == `l` ||
    key == `L` || key == `y` || key == `Y` || key == `c` || key == `C` ||
    key == `a` || key == `A` || key == `s` || key == `S` || key == `j` ||
    key == `J` || key == `x` || key == `X` || key == `f` || key == `F`
  ) {

    s4ColourIndex = floor(random(stop4Colour.length));

  } else if (
    key == `i` || key == `I` || key == `q` || key == `Q` || key == `v` ||
    key == `V` || key == `t` || key == `T` || key == `u` || key == `U` ||
    key == `e` || key == `E` || key == `n` || key == `N` || key == `r` ||
    key == `R`) {

    s5ColourIndex = floor(random(stop5Colour.length));

  } else if (key == ' ') {
    mountainVerVariation = random(0, 50);
    mountainVerVariation2 = random(0, 100);
  }
}

function mountains(w, h) {
  noStroke();

  let grad = drawingContext.createLinearGradient(0, 0, 0, height);
  grad.addColorStop(0.5, `rgb(112, 108, 108)`);
  grad.addColorStop(0.8, `rgb(15, 0, 18)`);
  grad.addColorStop(0.85, `rgba(15, 0, 18, 0)`);
  drawingContext.fillStyle = grad;

  push();
  beginShape();
  vertex(0, height / 1.2);
  vertex(
    (width / 6) * w + mountainVerVariation,
    (height / 1.55) * h + mountainVerVariation
  );
  vertex(
    (width / 3) * w + mountainVerVariation,
    (height / 2) * h + mountainVerVariation
  );
  vertex(
    (width / 2.94) * w + mountainVerVariation,
    (height / 2) * h + mountainVerVariation
  );
  vertex(
    (width / 2.5) * w + mountainVerVariation,
    (height / 1.7) * h + mountainVerVariation
  );
  vertex(
    (width / 2.44) * w + mountainVerVariation,
    (height / 1.7) * h + mountainVerVariation
  );
  vertex(
    (width / 1.87) * w + mountainVerVariation,
    (height / 1.5) * h + mountainVerVariation
  );
  vertex(
    (width / 1.8) * w + mountainVerVariation,
    (height / 1.5) * h + mountainVerVariation
  );
  vertex((width / 1.4) * w + mountainVerVariation, height / 1.2);
  vertex(0, height / 1.2);
  endShape(CLOSE);
  pop();
}

function mountainsV2() {
  noStroke();

  let grad = drawingContext.createLinearGradient(0, 0, 0, height);
  grad.addColorStop(0.45, `rgba(255, 255, 255, 0.2)`);
  grad.addColorStop(0.56, `rgba(204, 204, 204, 0.2)`);
  grad.addColorStop(0.8, `rgba(15, 0, 18, 0.2)`);
  grad.addColorStop(0.85, `rgba(15, 0, 18, 0)`);
  drawingContext.fillStyle = grad;

  push();
  beginShape();
  vertex(0, height / 1.2);
  vertex(
    (width / 6) + mountainVerVariation2,
    (height / 1.65) + mountainVerVariation2
  );
  vertex(
    (width / 5) + mountainVerVariation2,
    (height / 1.8) + mountainVerVariation2
  );
  vertex(
    (width / 3.98) + mountainVerVariation2,
    (height / 1.9) + mountainVerVariation2
  );
  vertex(
    (width / 2.84) + mountainVerVariation2,
    (height / 1.8) + mountainVerVariation2
  );
  vertex(
    (width / 2.7) + mountainVerVariation2,
    (height / 1.81) + mountainVerVariation2
  );
  vertex(
    (width / 2.4) + mountainVerVariation2,
    (height / 1.9) + mountainVerVariation2
  );
  vertex(
    (width / 2.2) + mountainVerVariation2,
    (height / 1.8) + mountainVerVariation2
  );
  vertex(
    (width / 2.1) + mountainVerVariation2,
    (height / 1.8) + mountainVerVariation2
  );
  vertex(
    (width / 1.7) + mountainVerVariation2,
    (height / 1.6) + mountainVerVariation2
  );
  vertex(
    (width / 1.68) + mountainVerVariation2,
    (height / 1.62) + mountainVerVariation2
  );
  vertex(
    (width / 1.4) + mountainVerVariation2,
    (height / 1.75) + mountainVerVariation2
  );
  vertex(
    (width / 1.3) + mountainVerVariation2,
    (height / 1.7) + mountainVerVariation2
  );
  vertex((width / 1.2) + mountainVerVariation2, height / 1.5);
  vertex((width / 1.1) + mountainVerVariation2, height / 1.4);
  vertex((width / 1) + mountainVerVariation2, height / 1.4);
  vertex((width / .9) + mountainVerVariation2, height / 1.2);
  vertex(0, height / 1.2);
  endShape(CLOSE);
  pop();
}