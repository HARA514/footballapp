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

$(document).on("pagecreate","#manchesterCity", onPageCreated2);
function onPageCreated2() {

	var manchesterCityFeed = "http://api.football-data.org/v1/teams/65/players";

	var xmlhttp=new XMLHttpRequest();
	xmlhttp.open("GET", manchesterCityFeed, false);
	xmlhttp.send();
		
	var teamsObject= JSON.parse(xmlhttp.responseText);

	var myTeam = teamsObject.players;

	ractive2 = new Ractive({
	el: '#listManCity',
	
	template: '#template',
	
	data: {listManCity: myTeam}
});
}

$(document).on("pagecreate","#chelsea", onPageCreated3);
function onPageCreated3() {

	var chelseaFeed = "http://api.football-data.org/v1/teams/61/players";

	var xmlhttp=new XMLHttpRequest();
	xmlhttp.open("GET", chelseaFeed, false);
	xmlhttp.send();
		
	var teamsObject= JSON.parse(xmlhttp.responseText);

	var myTeam = teamsObject.players;

	ractive3 = new Ractive({
	el: '#listManCity',
	
	template: '#template',
	
	data: {listChelsea: myTeam}
});
}

