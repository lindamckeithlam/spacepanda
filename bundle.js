/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./score/timer.js":
/*!************************!*\
  !*** ./score/timer.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return timer; });
var timerClock = document.getElementById("timer");
function timer(seconds) {
  var countdown = setInterval(function () {
    seconds--;

    if (seconds < 0) {
      clearInterval(countdown);
      alert("times up!");
      return;
    }

    displayTimeLeft(seconds);
  }, 1000);
}

function displayTimeLeft(seconds) {
  var sec = seconds % 60;
  var display = "00:".concat(sec);

  if (sec < 10) {
    display = "00:0".concat(sec);
  }

  if (!timerClock.innerHTML) {
    timerClock.innerHTML = "00:00";
  } else {
    timerClock.innerHTML = display;
  }
}

/***/ }),

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Asteroid; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Asteroid =
/*#__PURE__*/
function () {
  function Asteroid(gameWidth, gameHeight) {
    _classCallCheck(this, Asteroid);

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

  _createClass(Asteroid, [{
    key: "draw",
    value: function draw(ctx) {
      if (this.image === this.images[2]) {
        this.width = 40;
        this.height = 40;
      }

      ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "move",
    value: function move() {
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
  }, {
    key: "update",
    value: function update() {
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
  }]);

  return Asteroid;
}();



/***/ }),

/***/ "./src/coins.js":
/*!**********************!*\
  !*** ./src/coins.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Coin; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Coin =
/*#__PURE__*/
function () {
  function Coin(gameWidth, gameHeight) {
    _classCallCheck(this, Coin);

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.image = document.getElementById("coin");
    this.acc = 0.02;
    this.deltaY = 0;
    this.maxDeltaY = 1;
    this.deltaX = 0.5;
    this.width = 80;
    this.height = 80;
    this.frameIdx = 0;
    this.rand = [300, 100, 200, 100, 180, 190];
    this.position = {
      x: Math.floor(Math.random() * 700) + 10,
      y: this.rand[Math.floor(Math.random() * this.rand.length)]
    };
    this.status = true;
  }

  _createClass(Coin, [{
    key: "draw",
    value: function draw(ctx) {
      if (this.status === true) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
      }
    }
  }]);

  return Coin;
}();



/***/ }),

/***/ "./src/keyboard_input.js":
/*!*******************************!*\
  !*** ./src/keyboard_input.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InputHandler = function InputHandler(player) {
  _classCallCheck(this, InputHandler);

  document.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
      case 37:
        player.keyLeft = 1; // player.changeLeftSprite();

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
  document.addEventListener("keyup", function (event) {
    switch (event.keyCode) {
      case 37:
        player.keyLeft = 0;
        break;

      case 38:
        player.keyUp = 0; // if (player.speed > 0) player.stop();

        break;

      case 39:
        player.keyRight = 0; // if (player.speed > 0) player.stop();

        break;

      case 40:
        player.keyDown = 0;
        break;
      // if (player.speed < 0) player.stop();
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (InputHandler);

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _keyboard_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard_input */ "./src/keyboard_input.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _moves_collision__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moves/collision */ "./src/moves/collision.js");
/* harmony import */ var _asteroid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asteroid */ "./src/asteroid.js");
/* harmony import */ var _coins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coins */ "./src/coins.js");
/* harmony import */ var _score_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../score/timer */ "./score/timer.js");






var canvas = document.getElementById("gamescreen"); // let image = document.getElementById("asteroid1");

var ctx = canvas.getContext("2d");
var score = 0;
var GAME_WIDTH = 800;
var GAME_HEIGHT = 450; // Creating a player //

var playerOne = new _player__WEBPACK_IMPORTED_MODULE_1__["default"](GAME_WIDTH, GAME_HEIGHT);
playerOne.draw(ctx);
new _keyboard_input__WEBPACK_IMPORTED_MODULE_0__["default"](playerOne); // Creating asteroids

var spaceobj1 = new _asteroid__WEBPACK_IMPORTED_MODULE_3__["default"](GAME_WIDTH, GAME_HEIGHT);
var spaceobj2 = new _asteroid__WEBPACK_IMPORTED_MODULE_3__["default"](GAME_WIDTH, GAME_HEIGHT);
var spaceobj3 = new _asteroid__WEBPACK_IMPORTED_MODULE_3__["default"](GAME_WIDTH, GAME_HEIGHT);
var spaceobj4 = new _asteroid__WEBPACK_IMPORTED_MODULE_3__["default"](GAME_WIDTH, GAME_HEIGHT);
spaceobj1.draw(ctx);
spaceobj2.draw(ctx);
spaceobj3.draw(ctx);
spaceobj4.draw(ctx); // Creating coins

var coin = new _coins__WEBPACK_IMPORTED_MODULE_4__["default"](GAME_WIDTH, GAME_HEIGHT);
coin.draw(ctx); // Creating coin sound

var coinSound = document.getElementById("collectedcoin"); // Looping the visual //

var start = null;
var items = [coin, spaceobj1, spaceobj2, spaceobj3];

function gameLoop(timestamp) {
  if (start === null) {
    start = timestamp;
  }

  var progress = timestamp - start;
  if (!progress) return;
  ctx.clearRect(0, 0, 800, 450);
  items.forEach(function (item, idx) {
    if (item === coin) {
      if (_moves_collision__WEBPACK_IMPORTED_MODULE_2__["isColliding"](spaceobj1, item) || _moves_collision__WEBPACK_IMPORTED_MODULE_2__["isColliding"](spaceobj2, item) || _moves_collision__WEBPACK_IMPORTED_MODULE_2__["isColliding"](spaceobj3, item)) {
        var collectCoin = function collectCoin() {
          coin = new _coins__WEBPACK_IMPORTED_MODULE_4__["default"](GAME_WIDTH, GAME_HEIGHT);
          score += 1; //   coinSound.play();

          items.push(coin);
          document.getElementById("score").innerHTML = score;
        };

        items = items.slice(0, idx).concat(items.slice(idx + 1));
        setTimeout(collectCoin, 400);
      }
    } else {
      item.update();
    }

    if (_moves_collision__WEBPACK_IMPORTED_MODULE_2__["isColliding"](playerOne, item)) {
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

Object(_score_timer__WEBPACK_IMPORTED_MODULE_5__["default"])(30);
requestAnimationFrame(gameLoop);
gameLoop(requestAnimationFrame(gameLoop));

/***/ }),

/***/ "./src/moves/collision.js":
/*!********************************!*\
  !*** ./src/moves/collision.js ***!
  \********************************/
/*! exports provided: isColliding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isColliding", function() { return isColliding; });
var isColliding = function isColliding(obj1, obj2) {
  return obj1.position.x < obj2.position.x + obj2.width && obj1.position.x + obj1.width > obj2.position.x && obj1.position.y < obj2.position.y + obj2.height && obj1.position.y + obj1.height > obj2.position.y;
};

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Player =
/*#__PURE__*/
function () {
  function Player(game_width, game_height) {
    _classCallCheck(this, Player);

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
    this.acc = 2;
    this.x_velocity = 0;
    this.y_velocity = 0;
    this.keyRight = 0;
    this.keyLeft = 0;
    this.keyUp = 0;
    this.keyDown = 0;
    this.moving = false;
    this.position = {
      x: game_width / 2 - this.width / 2,
      y: game_height - this.height - 1
    };
  }

  _createClass(Player, [{
    key: "moveAll",
    value: function moveAll() {
      this.x_velocity += (this.keyRight - this.keyLeft) * this.acc;
      this.y_velocity += (this.keyDown - this.keyUp) * this.acc;
      this.x_velocity *= 0.9;
      this.y_velocity *= 0.9;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      if (this.keyLeft == 1 || this.keyDown == 1) {
        ctx.drawImage(this.images.left, this.position.x, this.position.y, 80, 80);
      } else if (this.keyRight == 1 || this.keyUp == 1) {
        ctx.drawImage(this.images.right, this.position.x, this.position.y, this.width, this.height);
      } else {
        ctx.drawImage(this.images.neutral, this.position.x, this.position.y, this.width, this.height);

        if (this.frameIdx > 90 && this.frameIdx < 100) {
          ctx.drawImage(this.images.neutral_blink, this.position.x, this.position.y, this.width, this.height);
        }
      } // ctx.drawImage(this.images.asteroid1, 200, 100, 100, 100);


      this.frameIdx++;

      if (this.frameIdx > 120) {
        this.frameIdx = 0;
      }
    }
  }, {
    key: "update",
    value: function update(deltaTime) {
      if (!deltaTime) return;
      this.moveAll();
      this.y_velocity += 0.5;
      this.position.x += this.x_velocity;
      this.position.y += this.y_velocity; // if player moves too much left

      if (this.position.x < 0) {
        this.position.x = 0;
        this.x_velocity = -this.x_velocity * 0.75;
      }

      if (this.position.x + this.width > this.gameWidth) // if player moves too much right
        this.position.x = this.gameWidth - this.width; // if player moves too much bottom

      if (this.position.y > this.gameHeight - 60 - this.height) {
        this.position.y = this.gameHeight - 60 - this.height;
        this.y_velocity = -this.y_velocity; // if player moves too much top
      } else if (this.position.y + this.y_velocity < 0) {
        this.position.y = 0;
        this.y_velocity = -this.y_velocity;
      }
    }
  }]);

  return Player;
}();

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map