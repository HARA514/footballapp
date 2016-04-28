$(document).on("pagecreate","#manchesterUnited", onPageCreated);
function onPageCreated() {

	var manchesterUnitedFeed = "http://api.football-data.org/v1/teams/66/players";

	var xmlhttp=new XMLHttpRequest();
	xmlhttp.open("GET", manchesterUnitedFeed, false);
	xmlhttp.send();
		
	var teamsObject= JSON.parse(xmlhttp.responseText);

	var myTeam = teamsObject.players;

	ractive = new Ractive({
	el: '#listManu',
	
	template: '#template',
	
	data: {listManu: myTeam}
});
}

$(document).on("pagecreate","#manchesterCity", onPageCreated);
function onPageCreated() {

	var manchesterCityFeed = "http://api.football-data.org/v1/teams/65/players";

	var xmlhttp=new XMLHttpRequest();
	xmlhttp.open("GET", manchesterCityFeed, false);
	xmlhttp.send();
		
	var teamsObject= JSON.parse(xmlhttp.responseText);

	var myTeam = teamsObject.players;

	ractive = new Ractive({
	el: '#listManCity',
	
	template: '#template',
	
	data: {listManCity: myTeam}
});
}

