export default class Coin {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.image = document.getElementById("coin");

    this.acc = 0.02;
    this.deltaY = 0;
    this.maxDeltaY = 1;
    this.deltaX = 0.5;
    this.width = 30;
    this.height = 30;
    this.frameIdx = 0;
    this.rand = [300, 100, 200, 100, 180, 190];
    this.position = {
      x: Math.floor(Math.random() * 790) + 10,
      y: this.rand[Math.floor(Math.random() * this.rand.length)]
    };
    this.status = true;
  }

  draw(ctx) {
    if (this.status === true) {
      ctx.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    }
  }
}
