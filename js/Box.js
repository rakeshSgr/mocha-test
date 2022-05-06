var chai = require('../node_modules/chai');
var Box = function(length, width, height) {
  this.length = length;
  this.width = width;
  this.height = height;

};


Box.prototype.getVolume = function() {
let data =[];
 
data.map(function(el){

});

console.log("----------");
  return this.length * this.width * this.height;
};

module.exports = Box;