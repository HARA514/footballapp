// JavaScript Document

var feedURL = "http://api.football-data.org/v1/soccerseasons/398/teams";

var selectedTeamURL;

$(document).on('pageshow', '#premierleague', function(event) {
	
	
	<!-- Use an HTML GET request to obtain data from a Yahoo Pipe
	<!-- The Yahoo pipe currently parses the BBC News RSS feed  -->
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.open("GET", feedURL, false);
	xmlhttp.send();
		
		
	<!-- parse the resulting JSON into Javascript Data Object -->
	<!-- you can use a live parser to inspect the contents of the JSON
	<!-- http://json.parser.online.fr/ -->
	var teams= JSON.parse(xmlhttp.responseText);

	$('#teams').append(teams.teams[0].name);
		
	
	
	<!-- Define Ractive binding -->
	//var ractive = new Ractive({
    //	el: 'container', <!-- where -->
    //	template: '#myTemplate', <!-- how -->
    //	data: { weather : weather.consolidated_weather } <!-- what - specify the list of news articles 'items' using dot notation-->
//	});
	
});







	
function getData() {
$.ajax({
  headers: { 'X-Auth-Token': 'e41abc632db14f7cabc6d28ae1efcb7e' },
  url: 'http://api.football-data.org/v1/fixtures?timeFrame=n1',
  dataType: 'json',
  type: 'GET',
}).done(function(response) {
  // do something with the response, e.g. isolate the id of a linked resource        
  var regex = /.*?(\d+)$/; // the ? makes the first part non-greedy
  var res = regex.exec(response.fixtures[0]._links.awayTeam.href);
  var teamId = res[1];
  console.log(teamId);
  $('#teamID').html(teamId);
});
}
