//The Sum of a Range
/*
function range(start, end, n){              //n is an increment variable
  var rangeArray = [];
  if (n == undefined){
    n = 1;
  }
  for (var i = start; i <= end; i += n)
    rangeArray.push(i);
    return rangeArray;
}

function sum(array){
var sum = 0;
  for (var i = 0; i < array.length; i++)
    sum += array[i];
    console.log(sum);
}
*/

//Reversing an Array
/*
function reverseArray(array){             //Will take an array and produce a new array that has the same elements in reverse order
  var newArray = [];
    for (var i = array.length-1 ; i > -1; i--)
      newArray.push(array[i]);
      console.log(newArray);
}

var testArray = ['my', 'name', 'is', 'william'];

function reverseArrayInPlace(array){      //Will keep array given as parameter and reverse the elements
  var i = 0;
    while (i < array.length-1){
      array.splice(i, 0, array.pop());
      i++;
    }
    return array;
}
*/

//List to array
/*
var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

function arrayToList(array)
{
  var list = null;
  for (var i = array.length-1; i > -1; i--)
    {
        list = {value: array[i], rest: list};
    }
    return list;
}

function listToArray(node)
{
    var array = [];
    for (var list = node; node; node = node.rest)
      {
        array.push(node.value);
      }
    return array;
}

function prepend(element, node)
{
  var newArray = listToArray(node);
  newArray.unshift(element);
  newArray = arrayToList(newArray);
  return newArray;
}

function nth(node, num){

}
*/

//Deep equal
/*
function deepEqual(a, b)
{

}
*/
