// JavaScript Document
var text = "";
var i;
var feedURL = "http://api.football-data.org/v1/soccerseasons/398/teams";

var selectedTeamURL;

$(document).on('pageshow', '#premierleague', function(event) {
	
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.open("GET", feedURL, false);
	xmlhttp.send();
		
	var teams= JSON.parse(xmlhttp.responseText);

	$('#teams').append(teams.teams[1].name);
	
	for (i = 0; i < teams.teams[i].name.length; i++) { 
    text += name[i];
	
	document.getElementById("test").innerHTML = text;
}
		
	
	
	<!-- Define Ractive binding -->
	//var ractive = new Ractive({
    //	el: 'container', <!-- where -->
    //	template: '#myTemplate', <!-- how -->
    //	data: { weather : weather.consolidated_weather } <!-- what - specify the list of news articles 'items' using dot notation-->
//	});
	
});