//Looping a Triangle
//Write a triangle that makes 7 calls to 'console.log' to output a triangle
/*
var base = ''
for (var i = 1; i <= 7; i += 1)
  console.log(base += '\#');
*/

//FizzBuzz
//Write a program that uses 'console.log' to print all numbers from 1 to 100, with two exceptions.
//For numbers divisible by 3, print "Fizz". For numbers divisible by 5, print "Buzz".
//For numbers divisible by both, print "FizzBuzz"
/*
for (var i = 1; i < 101; i++){
    if (i % 3 == 0){
      console.log("Fizz");

      if (i % 5 == 0){
        console.log("FizzBuzz");
      }
    } else if (i % 5 == 0){
      console.log("Buzz");
      if (i % 3 == 0){
       console.log("FizzBuzz");
      }
    } console.log(i);
  }
*/

//Chess Board
//Write a program that creates a string that represents an height x width grid, using newline
//Charachters to seperate lines. At each position of the grid, there is either a space or
//A "#" charachter. The charachters should form a chess board.








//Minimum
//Write a function that takes two arguments and returns their minimum;
/*
function min(a, b){
  if (a < b){
    return a;
  } else {
    return b;
  }
}
*/


//Recursion
//Define a recursive formula isEven under the following format
//Zero is even
//One is odd
//For any other number N, its evenness is the same as N-2

/*
function isEven(n){
  if (n > -1){
    if (n == 0){
      return true;
    } else if (n == 1){
      return false;
    } else {
      return isEven(n-2);
    }
  } else if (n < 0){
    return isEven(n + 2);
  }
}
*/




//Bean Counting
//Write a function countBs that takes a string as its only argument and returns a number that indicates
//How many uppercase "B" charachters are in the string. Next, write a function called countChar that
//Behaves like countBs, except it takes a second argument that indicates the character that is to be counted
/*
var string = 'BBBitch!';
function countBs(string){
  var count = 0;
  for (var i = 0; i < string.length; i++)
    if (string[i] == 'B'){
      count += 1;
    }
    return count;
}

var testString = 'William';
function countChar(string, char){
  var count = 0;
  for (var i = 0; i < string.length; i++)
    if (string[i] == char){
      count += 1;
    }
    return count;
}
*/


//The Sum of a Range
//Write a range function that takes two arguments, start and end, and returns an array
//Containing all the numbers from start up to (and including) end. Next, write a sum function
//That takes an array of numebrs and returns the sum of these numbers.
//Bonus: modify your range function to take an optional third option that indicates the 'step'
//Value used to build up the array. Make sure it works with negative step values.

/*

function range(start, end, inc){ //Does not yet work with decrements
  var array = [];
  if (inc == undefined){
    inc = 1;
  }
  for (start; start <= end; start += inc)
      array.push(start);
      return array;
}

function sum(array){
  var base = 0;
  for (var i = 0; i < array.length; i++)
    base += array[i];
    return base;
}

*/

//Reversing an Array
//Write two functions reverseArray and reverseArrayInPlace. The first, reverseArray,
//Takes an array as an argument and produces a new array that has the same elements in the inverse order.
//The decond, reverseArrayInPlace, modifies the array given as argument in order to reverse its elements.
/*

var testArray = [1, 2, 3, 4, 5];

function reverseArray(array){
  var newArray = [];
  for (var i = array.length-1; i > -1; i--)
    newArray.push(array[i]);
    return newArray;
}

function reverseArrayInPlace(array){
  for (var i = array.length-1; i > -1; i--){
    array.push(array[i]);
  }

  return array.slice(Math.floor(array.length / 2));
}

*/


//Deep Comparison
//Write a function, deepEqual, that takes two values and returns true if and only if
//They are the same value or are objects with the same properties whos values are also equal
//When compared with a recursive call to deepEqual.
/*

function deepEqual(a, b){
  if ((a == b) && (a === b) && (a != null) && (b != null) && (a.typeof == b.typeof)){
    return true;
  } else {
    return false;
  }
}

*/

//Flattening
//Use the reduce method in combination with the concat method to "flatten" an array
//Of arrays into a single array that has all the elements of the input array.

/*

var testArray = [[1], [2, 3], [4, 5, 6]];
function flatten(array){
  var flatArray = array.reduce(function(a, b){
    return a.concat(b);
  }, []);
  return flatArray;
}

*/

//Every and Some
//Write two function, every and some, which behave as follows:
//Every returns true only when the predicate returns true for all elements of the array.
//Some returns true as soon as the predicate returns true for any element of the array.

/*

var testArray1 = [NaN, NaN, NaN];
var testArray2 = [1, NaN, NaN];
var testArray3 = [1, 2, 3];

function every(array, condition){
  for (var i = 0; i < array.length-1; i++){
    if (condition(array[i]) ){
      return true;
    } else {
      return false;
    }
  }
}

function some(array, condition){ //Still needs work

}

*/



var ANCESTRY_FILE = "[\n  " + [
  '{"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"}',
  '{"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"}',
  '{"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"}',
  '{"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"}',
  '{"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
  '{"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null}',
  '{"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null}',
  '{"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"}',
  '{"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"}',
  '{"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"}',
  '{"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null}',
  '{"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"}',
  '{"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"}',
  '{"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"}',
  '{"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null}',
  '{"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"}',
  '{"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"}',
  '{"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
  '{"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
  '{"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null}',
  '{"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"}',
  '{"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"}',
  '{"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"}',
  '{"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
  '{"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"}',
  '{"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
  '{"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
  '{"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
  '{"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"}',
  '{"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"}',
  '{"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
  '{"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"}',
  '{"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"}',
  '{"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"}',
  '{"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"}',
  '{"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}'
].join(",\n  ") + "\n]";

// This makes sure the data is exported in node.js —
// `require(./path/to/ancestry.js)` will get you the array.
if (typeof module != "undefined" && module.exports)
  module.exports = ANCESTRY_FILE;
var ancestry = JSON.parse(ANCESTRY_FILE);


//Mother-child Age Difference
//Using the ancestry dataset, compute the average age difference between mothers
//And their children

/*

function average(array){
  function plus(a,b){ return a + b;}
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person){
  byName[person.name] = person;
});

var ageDifferences = [];

function setAgeDifference(){
  for (var i = 0; i < ancestry.length; i++){
    var child = ancestry[i];
    if (child.mother !== null && byName[child.mother] !== undefined){
      var mother = byName[child.mother];
      var ageDiff = mother.born - child.born;

      ageDifferences.push(ageDiff);
    }
  }
}

setAgeDifference();
console.log(ageDifferences);
console.log(average(ageDifferences));

*/

//Historical Life expectancy
//Compute and output the average age of the people in the ancestry dataset per century.
//A person is assigned to a century by taking Math.ceil(person.died / 100).
/*

function average(array){
  function plus(a, b){return a + b;}
  return array.reduce(plus) / array.length;
}

function age(person){
  var personAge = person.died - person.born;
  return personAge;
}

function century(person){
  return Math.ceil(person.died / 100);
}

*/
//console.log(average(ancestry.filter(century).map(age)));



//Vector
//Write a constructor Vector that represents a vector in a two dimensional space.
//It takes x and y parameters (numbers), which it should save to properties of the same name.
//Give the vector plus and minus methods, as well as a getter property to the prototype
//that computes the length of the vector from the origin




function Vector(x, y) {
  this.x = x;
  this.y = y;
}

var v1 = new Vector(3, 5);
var v2 = new Vector(10, 20);

Vector.prototype.plus = function(vector){
  var sumVector = new Vector(vector.x + this.x, vector.y + this.y);
  return sumVector;
}

Vector.prototype.distance = function(){
  function square(n){
    return n * n;
  }

  var distFromOrigin = Math.sqrt(square(this.x) + square(this.y));
  return "This vector is " + distFromOrigin + " units from the origin.";
}

Vector.prototype.scalar = function(c){
  return scalarVector = new Vector(c * this.x, c * this.y);
}


//console.log(v1.scalar(2));
//console.log(v2.distance());
//console.log(v1.plus(v2));
