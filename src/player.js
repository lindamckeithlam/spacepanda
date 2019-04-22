class Player {
  constructor(game_width, game_height) {
    this.gameWidth = game_width;
    this.gameHeight = game_height;
    this.frameIdx = 0;

    this.width = 80;
    this.height = 80;
    this.images = {
      left: document.getElementById("left"),
      right: document.getElementById("right"),
      neutral: document.getElementById("neutral"),
      neutral_blink: document.getElementById("neutral_blink")
    };
    this.colliding = false;
    this.acc = 5;

    this.x_velocity = 0;
    this.y_velocity = 0;

    this.keyRight = 0;
    this.keyLeft = 0;
    this.keyUp = 0;
    this.keyDown = 0;
    this.moving = false;
    this.lives = 3;
    this.position = {
      x: game_width / 2 - this.width / 2,
      y: game_height - this.height - 1
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
        this.width,
        this.height
      );
    } else if (this.keyRight == 1 || this.keyUp == 1) {
      ctx.drawImage(
        this.images.right,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    } else {
      ctx.drawImage(
        this.images.neutral,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );

      if (this.frameIdx > 90 && this.frameIdx < 100) {
        ctx.drawImage(
          this.images.neutral_blink,
          this.position.x,
          this.position.y,
          this.width,
          this.height
        );
      }
    }

    this.frameIdx++;

    if (this.frameIdx > 120) {
      this.frameIdx = 0;
    }
  }

  repel(obj) {
    this.x_velocity = -2 * this.x_velocity;
    this.y_velocity = -2 * this.y_velocity;
    obj.deltaX = -2 * obj.deltaX;
    obj.deltaY = -2 * obj.deltaY;
    this.colliding = true;
  }

  changeSize() {
    this.width -= 8;
    this.height -= 8;
    this.lives -= 0;
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
    if (this.position.y > this.gameHeight - 60 - this.height) {
      this.position.y = this.gameHeight - 60 - this.height;
      this.y_velocity = -this.y_velocity;

      // if player moves too much top
    } else if (this.position.y + this.y_velocity < 0) {
      this.position.y = 0;
      this.y_velocity = -this.y_velocity;
    }
  }
}

export default Player;
