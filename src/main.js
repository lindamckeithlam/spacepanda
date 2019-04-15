import InputHandler from "./keyboard_input";
import Player from "./player";
import * as Collisions from "./moves/collision";
import Asteroid from "./asteroid";
import Coin from "./coins";
import timer from "../score/timer";
let canvas = document.getElementById("gamescreen");
// let image = document.getElementById("asteroid1");
let ctx = canvas.getContext("2d");
let score = 0;

const GAME_WIDTH = 800;
const GAME_HEIGHT = 450;

// Creating a player //
let playerOne = new Player(GAME_WIDTH, GAME_HEIGHT);
playerOne.draw(ctx);

new InputHandler(playerOne);

// Creating asteroids
let spaceobj1 = new Asteroid(GAME_WIDTH, GAME_HEIGHT);
let spaceobj2 = new Asteroid(GAME_WIDTH, GAME_HEIGHT);
let spaceobj3 = new Asteroid(GAME_WIDTH, GAME_HEIGHT);
let spaceobj4 = new Asteroid(GAME_WIDTH, GAME_HEIGHT);

spaceobj1.draw(ctx);
spaceobj2.draw(ctx);
spaceobj3.draw(ctx);
spaceobj4.draw(ctx);

// Creating coins
let coin = new Coin(GAME_WIDTH, GAME_HEIGHT);
coin.draw(ctx);

// Creating coin sound
let coinSound = document.getElementById("collectedcoin");

// Looping the visual //

let start = null;

let items = [coin, spaceobj1, spaceobj2, spaceobj3];

function gameLoop(timestamp) {
  if (start === null) {
    start = timestamp;
  }

  let progress = timestamp - start;

  if (!progress) return;

  ctx.clearRect(0, 0, 800, 450);

  items.forEach((item, idx) => {
    if (item === coin) {
      if (
        Collisions.isColliding(spaceobj1, item) ||
        Collisions.isColliding(spaceobj2, item) ||
        Collisions.isColliding(spaceobj3, item)
      ) {
        items = items.slice(0, idx).concat(items.slice(idx + 1));
        function collectCoin() {
          coin = new Coin(GAME_WIDTH, GAME_HEIGHT);
          score += 1;
          //   coinSound.play();
          items.push(coin);
          document.getElementById("score").innerHTML = score;
        }
        setTimeout(collectCoin, 400);
      }
    } else {
      item.update();
    }
    if (Collisions.isColliding(playerOne, item)) {
      item.deltaY *= Math.sign(playerOne.y_velocity);
      item.deltaX *= Math.sign(playerOne.x_velocity);
      item.deltaX += playerOne.x_velocity;

      item.deltaY += playerOne.y_velocity;
    }

    item.draw(ctx);
  });
  playerOne.draw(ctx);
  playerOne.update(progress);
  requestAnimationFrame(gameLoop);
}

timer(30);
requestAnimationFrame(gameLoop);
gameLoop(requestAnimationFrame(gameLoop));
