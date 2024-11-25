/*
    Title: Assignment 4
    Author: Morsalin Bhuiyan
    Date: November 24, 2024
*/

// Setup the canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Set canvas width and height to match the browser window size
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// Function to generate a random number between min and max
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random RGB color
function randomRGB() {
  return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
}

// Ball class definition
class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;          
    this.y = y;          
    this.velX = velX;    
    this.velY = velY;    
    this.color = color;  
    this.size = size;    
  }

  // Draw the ball on the canvas
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  // Update ball position based on velocity
  update() {
    // Check if the ball hits the right or left edge and reverse horizontal velocity
    if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
      this.velX = -(this.velX); 
    }

    // Check if the ball hits the top or bottom edge and reverse vertical velocity
    if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
      this.velY = -(this.velY); 
    }

    // Update ball position
    this.x += this.velX;
    this.y += this.velY;
  }

  // Collision detection with other balls
  collisionDetect() {
    for (const ball of balls) {
      if (this !== ball) { // Skip collision with itself
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // If the distance between the two balls is less than the sum of their radii, a collision occurs
        if (distance < this.size + ball.size) {
          // Change colors of both balls on collision
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}

// Array to hold all the balls
const balls = [];

// Create 25 balls with random properties
while (balls.length < 25) {
  const size = random(10, 20); // Random size between 10 and 20
  const ball = new Ball(
    random(0 + size, width - size),  
    random(0 + size, height - size), 
    random(-7, 7),  
    random(-7, 7),  
    randomRGB(),    
    size            
  );
  balls.push(ball); 
}


function loop() {
  // Fill the canvas with a semi-transparent black background to leave trails
  ctx.fillStyle = "rgb(0 0 0 / 25%)"; 
  ctx.fillRect(0, 0, width, height);

  // Loop through all balls, draw, update, and check for collisions
  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect(); 
  }


  requestAnimationFrame(loop);
}

loop();

