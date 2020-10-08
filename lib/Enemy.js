const Potion = require('./Potion.js');
const Character = require('./Character');

class Enemy extends Character {
    constructor(name, weapon) {
        //call parent constructor here
        super(name);
    
        this.weapon = weapon;
        this.potion = new Potion();
    };

    // inherit prototype methods from Character here:
    // Enemy = Object.create(Character);

getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
}
};

module.exports = Enemy;


// Enemy.prototype.isAlive = function() {
//     if (this.health === 0) {
//         return false;
//     } else
//         return true;
// };

// Enemy.prototype.getHealth = function() {
//     return `${this.name}'s health is now ${this.health}!`;
// };

// Enemy.prototype.getAttackValue = function() {
//     const min = this.strength - 5;
//     const max = this.strength + 5;
  
//     return Math.floor(Math.random() * (max - min) + min);
// };

// Enemy.prototype.reduceHealth = function(health) {
//     this.health -= health;

//     if (this.health < 0) {
//         this.health = 0;
//     }
// };