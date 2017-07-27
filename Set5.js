function Vector(x, y){
  this.x = x;
  this.y = y;
}

var v1 = new Vector(10, 5);
var v2 = new Vector(20, 3);

var plus = function(vector){
  return new Vector(this.x + vector.x, this.y + vector.y);
}

Vector.prototype.plus = function(vector){
  return new Vector(this.x + vector.x, this.y + vector.y);
}
Vector.prototype.minus = function(vector){
  return new Vector(this.x - vector.x, this.y - vector.y);
}

Object.defineProperty(Vector.prototype, "length", {
  get: function() { return Math.sqrt((this.x * this.x) - (this.y * this.y));}
})
function origin(vector){
  return "The distance from the origin for vector <" + vector.x + ", " + vector.y + "> is " + vector.length + '.';
}

console.log(origin(v1));
console.log(origin(v2));
