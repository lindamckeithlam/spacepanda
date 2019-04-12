export default class Board {
  constructor(gameWidth, gameHeight) {
    this.image = document.getElementById("bg");
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.width = 1680;
    this.height = 1050;
  }

  draw(ctx, totalSeconds) {
    let vx = 100;
    let numImages = Math.ceil(this.gameWidth / this.width) + 1;
    let xpos = (totalSeconds * vx) % this.width;
    ctx.save();

    ctx.translate(xpos, 0);

    for (let i = 0; i < numImages; i++) {
      ctx.drawImage(this.image, i * this.width, 0);
    }

    ctx.restore();
    // xpos = -xpos;
  }
}
