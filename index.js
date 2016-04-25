// JavaScript Document
var feedURL = "http://api.football-data.org/v1/soccerseasons/398/teams";

var selectedTeamURL;

$(document).on('pageshow', '#premierleague', function(event) {
	
	console.log("premier page shown");
	alert("premier page shown");
	
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.open("GET", feedURL, false);
	xmlhttp.send();
		
	var teamsObject= JSON.parse(xmlhttp.responseText);

	$('#teams').append(teamsObject.teams[1].name);
	
	
	
	
	for ( var i = 0; i < teamsObject.teams.length; i++) { 
    	$('#teams').append(teamsObject.teams[i].name);
	}
		
	
	
	<!-- Define Ractive binding -->
	//var ractive = new Ractive({
    //	el: 'container', <!-- where -->
    //	template: '#myTemplate', <!-- how -->
    //	data: { weather : weather.consolidated_weather } <!-- what - specify the list of news articles 'items' using dot notation-->
//	});
	
});