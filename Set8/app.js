//Chapter 12: Manipulating the DOM

//buildTable
//Write a function buildTable that, given an array of objects that all
//have the same set of properties, builds up a DOM structure representing a table.

function buildTable(data){
  var node = document.createElement("table");
  var tr = document.createElement("tr");
  var headers = Object.keys(data[0]);
    for (var i = 0; i < headers.length; i++){
      var header = headers[i];
      var ch = document.createElement("th");
      ch.appendChild(document.createTextNode(header));
      tr.appendChild(ch);
    }
    node.appendChild(tr);
    data.forEach(function (rowdata){
      tr = document.createElement("tr");
      for (var i = 0; i < headers.length; i++){
        var header = headers[i];
        var cd = document.createElement("td");
        cd.appendChild(document.createTextNode(rowdata[header]));
        if (typeof rowdata[header] == "number"){
          cd.style.textAlign = "right";
        }
        tr.appendChild(cd);
      }
      node.appendChild(tr);
    });
    return node;
}

function playerOfFIFA(){
  this.teams = [];
  this.addTeam = function(teamName, domesticLeague, stars){
    this.teams.push(new Team(teamName, domesticLeague, stars));
  }
}

function Team(teamName, domesticLeague, stars){
  this.Name = teamName;
  this.League = domesticLeague;
  this.Stars = stars;
}
var Gentry = new playerOfFIFA();
Gentry.addTeam("Manchester United", "Premier League", 5);
Gentry.addTeam("Manchester City", "Premier League", 5);
Gentry.addTeam("Juventus", "Serie A", 5);
