export default class Asteroid {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.images = {
      1: document.getElementById("orange-spaceship"),
      2: document.getElementById("spaceship"),
      3: document.getElementById("astronaut"),
      4: document.getElementById("astronaut2")
    };

    this.image = this.images[Math.floor(Math.random() * 4) + 1];

    this.acc = 0.01;
    this.deltaY = 0;
    this.maxDeltaY = 1;
    this.deccelarate = 0.6;
    this.deltaX = 0.5;
    this.minDeltaX = 1;

    this.width = 50;
    this.height = 50;

    this.frameIdx = 0;
    this.randX = [10, 100, 200, 100, 180, 190, 400];
    this.randY = [10, 100, 200, 100, 180, 190];

    this.position = {
      x: Math.floor(Math.random() * 700) + 10,
      y: Math.floor(Math.random() * 200) + 5
    };
  }

  draw(ctx) {
    if (this.image === this.images[2]) {
      this.width = 40;
      this.height = 40;
    }
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  move() {
    if (Math.abs(this.deltaY + this.acc) < this.maxDeltaY) {
      this.deltaY += this.acc;
    }
    if (Math.abs(this.deltaX) - this.deccelarate < this.minDeltaX) {
      this.deltaX = this.minDeltaX * Math.sign(this.deltaX);
    } else {
      this.deltaX -= this.deccelarate * Math.sign(this.deltaX);
    }
    this.position.x += this.deltaX;
    this.position.y += this.deltaY;
  }

  update() {
    if (this.frameIdx % 100 === 0) {
      this.acc *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
      console.log(this.frameIdx);
    }

    if (this.frameIdx > 120) {
      this.frameIdx = 0;
    }

    this.move();
    this.frameIdx++;

    if (this.position.x < 0) {
      this.position.x = 0;
      this.deltaX = -this.deltaX;
    }
    if (this.position.x + this.width > this.gameWidth) {
      this.position.x = this.gameWidth - this.width;
      this.deltaX = -this.deltaX;
    }

    if (this.position.y > 400 - this.height) {
      this.position.y = 400 - this.height;
      this.deltaY = -this.deltaY / 3;
      this.acc *= -1;
    } else if (this.position.y + this.deltaY < 0) {
      this.position.y = 0;
      this.deltaY = -this.deltaY / 3;
      this.acc *= -1;
    }
  }
}
