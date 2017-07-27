//Chapter 10: Modules

//Write a simple module that can convert month numbers (zero-based, as in Date type)
//to names and can convert names back to numbers.
//Give it its own namespace since it will need an internal array of month names,
//and use plain JavaScript, without any module loader system

var monthModule = function(){
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
"October", "November", "December"];

  return {
    name: function(number){ return months[number];},
    number: function(name){ return months.indexOf(name);}
  };
}();

console.log(monthModule.name(11));
