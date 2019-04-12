class Player {
  constructor(game_width, game_height) {
    this.gameWidth = game_width;
    this.gameHeight = game_height;

    this.width = 100;
    this.height = 100;

    this.images = {
      left: document.getElementById("left"),
      right: document.getElementById("right"),
      neutral: document.getElementById("neutral"),
      neutral_blink: document.getElementById("neutral_blink")
    };

    this.acc = 3;

    this.x_velocity = 0;
    this.y_velocity = 0;

    this.keyRight = 0;
    this.keyLeft = 0;
    this.keyUp = 0;
    this.keyDown = 0;
    this.moving = false;

    this.position = {
      x: game_width / 2 - this.width / 2, // 250
      y: game_height - this.height - 1 // 490
    };
  }

  moveAll() {
    this.x_velocity += (this.keyRight - this.keyLeft) * this.acc;
    this.y_velocity += (this.keyDown - this.keyUp) * this.acc;
    this.x_velocity *= 0.9;
    this.y_velocity *= 0.9;
  }

  draw(ctx) {
    if (this.keyLeft == 1 || this.keyDown == 1) {
      ctx.drawImage(
        this.images.left,
        this.position.x,
        this.position.y,
        100,
        100
      );
    } else if (this.keyRight == 1 || this.keyUp == 1) {
      ctx.drawImage(
        this.images.right,
        this.position.x,
        this.position.y,
        100,
        100
      );
    } else {
      ctx.drawImage(
        this.images.neutral,
        this.position.x,
        this.position.y,
        100,
        100
      );

      //   ctx.drawImage(
      //     this.images.neutral_blink,
      //     this.position.x,
      //     this.position.y,
      //     100,
      //     100
      //   );
    }
  }

  update(deltaTime) {
    if (!deltaTime) return;

    this.moveAll();

    this.y_velocity += 0.5;
    this.position.x += this.x_velocity;
    this.position.y += this.y_velocity;

    // if player moves too much left
    if (this.position.x < 0) {
      this.position.x = 0;
      this.x_velocity = -this.x_velocity * 0.75;
    }
    if (this.position.x + this.width > this.gameWidth)
      // if player moves too much right
      this.position.x = this.gameWidth - this.width;

    // if player moves too much bottom
    if (this.position.y > this.gameHeight - 20 - this.height) {
      this.position.y = this.gameHeight - 20 - this.height;
      this.y_velocity = -this.y_velocity;

      // if player moves too much top
    } else if (this.position.y + this.y_velocity < 0) {
      this.position.y = 0;
      this.y_velocity = -this.y_velocity;
    }
  }
}

export default Player;
