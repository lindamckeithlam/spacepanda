class InputHandler {
  constructor(player) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          player.keyLeft = 1;
          break;
        case 38:
          player.keyUp = 1;
          break;
        case 39:
          player.keyRight = 1;
          break;
        case 40:
          player.keyDown = 1;
          break;

      }
    });

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
          player.keyLeft = 0;

          break;
        case 38:
          player.keyUp = 0;

          break;
        case 39:
          player.keyRight = 0;

          break;
        case 40:
          player.keyDown = 0;

          break;
      }
    });
  }
}

export default InputHandler;
