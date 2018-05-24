let allEnemies = [];
let lives;
let points;
let level = 'easy';
let character= 'char-boy.png'





// Enemies our player must avoid
var Enemy = function(locX, locY) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    //retreives image of bug
    this.sprite = 'images/enemy-bug.png';
    this.x = locX;
    this.y = locY;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

  //set level
  if (level === 'easy') {
    for(i=0;i<allEnemies.length;i++) {
      allEnemies[i].speed=140;
    }
  }
  if (level === 'medium') {
    for(j=0;j<allEnemies.length;j++) {
      allEnemies[j].speed=190;
    }
  }
  if (level === 'hard') {
    for(k=0;k<allEnemies.length;k++) {
      allEnemies[k].speed=250;
    }
  }

// multiply any movement by the dt parameter to get same speed for all pc's
  this.x = this.x+(this.speed*dt);

  //resets position if enemy reaches end of screen
  if (this.x <=500) {
    this.reset();
  }

  //collisions with Enemies, reset players position
  if( player.x >= this.x -35 && player.x <=this.x + 35 ){
          if( player.y >= this.y -35 && player.y <=  this.y+35 ){
              player.x = 200;
              player.y = 400;
          }
      }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
