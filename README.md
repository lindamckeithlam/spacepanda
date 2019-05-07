# README

- [Space Panda](https://lindamckeithlam.github.io/spacepanda/) - an interactive single-player game where you, Panda, will rely on the power of your teammates, the nearby planets, to crash the satellites made by man. Each successful kill is worth one point, but be careful not to touch the satellites yourself.

![gif](https://giphy.com/gifs/elaOWHX8Xi84PsUJNO/fullscreen "Gif Page")

## Features

- HTML Canvas & CSS for front-end, and Javascript for the back-end
- Firebase used to create a seamless user scoreboard with user’s score updated in real time.
- Collision detection algorithms for sprite characters, and integrated with keystroke event listeners to predict future player direction and movement.
- Decreased graphic rendering lag through the use of HTML5 Canvas and animation frames, resulting in a more realistic gaming experience

![still](/display/misc/game_still.png "Still Page")

### Walkthrough

Space Panda was designed for a singer player. Comparable to billiard and air hockey, the player's objective is to collide with nearby objects and use it as leverage to score. Scores are determined by how many satellites a player can smash in a span of 45 seconds. If, however, a player accidentally bumps into a satellite, he or she will shrink in size. This appends a layer of difficulity to the game, thus urges the player to move quickly and steadily in order to win points!

### Score Board

Scores are updated in real time, using Google Firebase, and are only fetched if the player makes it to the top 3 of highest scores.

![scoreboard](/display/misc/scoreboard.png "Score Page")

### Future Implementations

- Game Pause / Game Continue
- 3D Rendering
