//Regular expressions

//RegExp Golf
//Write a regular expression to test whether any of the given substrings
//Occur in a string.

var catAndCar = /ca+(r|t)?/ //this works, tests to see if car or cat is in a string
var popAndProp = /p(r?)op/; //this works, tests to see if prop or pop is in a string
var ferretFerryAndFerrari = /ferr(et|y|ari)/; //This works
var endingInIous = /ious$/; //This works
var whitespaceFollowedByDotCommaColonOrSemicolon = /\s+[.,:;]/; //this works
var longerThanSixLetters = /\w{7,}/; //this works
var withoutLetterE = /[e^]/; //works
