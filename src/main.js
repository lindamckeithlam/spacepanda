import InputHandler from "./keyboard_input";
import Player from "./player";
import Board from "./board";

let canvas = document.getElementById("gamescreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
let totalSeconds = 0;
// Creating a player //
let playerOne = new Player(GAME_WIDTH, GAME_HEIGHT);
playerOne.draw(ctx);

let bg = new Board(GAME_WIDTH, GAME_HEIGHT);
bg.draw(ctx, totalSeconds);
// Creating a keyboard movement //

new InputHandler(playerOne);

// Looping the visual //
let limit = 9000;
let start = null;

function gameLoop(timestamp) {
  if (start === null) {
    start = timestamp;
  }

  let progress = timestamp - start;

  if (!progress) return;

  ctx.clearRect(0, 0, 800, 600);

  bg.draw(ctx, (timestamp -= 5000));

  playerOne.update(progress);
  playerOne.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
gameLoop(requestAnimationFrame(gameLoop));
