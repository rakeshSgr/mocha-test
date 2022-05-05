var chai = require('../node_modules/chai');
var Box = function(length, width, height) {
  this.length = length;
  this.width = width;
  this.height = height;
};

console.log("----------");

Box.prototype.getVolume = function() {

 
  return this.length * this.width * this.height;
};

module.exports = Box;