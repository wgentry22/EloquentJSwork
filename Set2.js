//Minimum Function
/*
function minimumValue(a,b){
  if (a > b){
    console.log(b + " is the minimum of the set.") ;
  } else if (a < b){
    console.log(a + " is the minimum of the set.");
  } else {
    console.log('The values are equal.');
  }
}
*/

//Recursion Function isEven, works even with negative numbers
/*
function isEven(number){
  if (number >= 0) {
    if (number === 0) {
      console.log(true);
    }
    else if ( number === 1) {
      console.log(false);
    }
    else {
      return isEven(number -= 2);
    }
  } else if (number < 0){
      if (number === 0) {
        console.log(true);
      }
      else {
        return isEven(number += 2);
      }
  }
}
*/

//Bean Counting
/*
function countChar(string, letter){
  var count = 0
  for (var i = 0; i < string.length-1; i++)
    if (string[i] === letter){
      count +=1
    }
    console.log("There are " + count + " " + letter + "\'s in \'" + string + "\'.");
}
*/
