let lives;
let points;
let level = 'easy';
let character= 'char-boy.png';
let allEnemies = [];





// Enemies our player must avoid
var Enemy = function(locX, locY) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    //retreives image of bug
    this.sprite = 'images/enemy-bug.png';
    this.x = locX;
    this.y = locY;
    this.argument1 = locX;
    this.argument2 = locY;
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
  if (this.x >=600) {
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
Enemy.prototype.reset = function(){
    this.x = this.argument1;
    this.y = this.argument2;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
  this.sprite = 'images/'+character;
  this.x = x;
  this.y = y;
};
Player.prototype.update = function(){
    //changes, handles and displays the score

};
Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(rcv){
    if( rcv === 'left' && this.x > 0 )
        this.x = this.x - 20;
    else if( rcv === 'right' && this.x < 400)
        this.x = this.x + 20;
    else if( rcv === 'up' && this.y > -50)
        this.y = this.y - 20;
    else if( rcv === 'down' && this.y < 400)
        this.y = this.y + 20;
};
Player.prototype.reset = function(){
    this.x = 200;
    this.y = 400;
};

var showResult = function(){
     $('h3').css("display","none").text("");
};

// Now instantiate your objects.
let player = new Player(200, 400);
let enemy1 = new Enemy(-400, 230);
let enemy2 = new Enemy(-650, 145);
let enemy3 = new Enemy(-780, 60);
let enemy4 = new Enemy(-80, 230);
let enemy5 = new Enemy(-1000, 145);
let enemy6 = new Enemy(-450, 60);

allEnemies.push(enemy1,enemy2,enemy3,enemy4,enemy5,enemy6);
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
