### Background

Space Panda is a single-player game that plays out in a moving 2D frame built with HTML5 Canvas and Javascript. The purpose is to keep you
(the panda) from running into objects that could potentially be dangerous. There will be other boost-objects that the player can collect for points. Here are the rules:

1. Panda gets 2 permissible 'accidental' collision, after the third collision, the game is over.
2. There will be 30 seconds for each game, unless a player gets boost-objects.
3. For every boost-object, 5 seconds will be added to the player's life-line.
4. Player with the most points wins.

### Functionality & MVP

With this Space Panda Game, users will be able to:

- [ ] Start, pause, and reset the game board
- [ ] Avoid collision by jumping
- [ ] Jump up, down, speed up, and collect objects

In addition, this project will include:

- [ ] An About side bar describing the background and rules of the game
- [ ] All links for contact info
- [ ] A production README

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running and `Main.js` installed. Write a basic entry file. Learn the basics of `Main.js`.

- Get familiar with HTML Canvas
- Have all the files in the file tree structured
- Have a blank rectangular board set up on html

**Day 2**: Collect all things necessary to get the project going such as sprites, music, and background images. Start with the `Board.js` to set up basic positions and colors, then move on to `Player.js` to get the player on the screen.

- Render a rectangular board with necessary colors, position, and player on board
- Draw out the necessary "moves" on the x and y axis a player can go within the board

**Day 3**: Create the logic for backend such as handling player position updates, jump friction, collecting boost-objects, and moving across the board.

- Implement the "moves" in `Game.js`
- Render the sprites in the proper positions
- Have a working 'score-board' feature

**Day 4**: Add a `Controller.js` file to put everything together which will include the Game, Display, Main, and Board.

- Create controls for game speed, stop, start, reset
- Render the game frame by frame with no bugs
- If time permits, style the side bar with instructions on how to play the game.
