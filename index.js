
$(document).on("pagecreate","#manchesterUnited", onPageCreated);
function onPageCreated() {

	var feedUrl = "http://api.football-data.org/v1/teams/66/players";

	var xmlhttp=new XMLHttpRequest();
	xmlhttp.open("GET", feedUrl, false);
	xmlhttp.send();
		
	var teamsObject= JSON.parse(xmlhttp.responseText);

	var myTeam = teamsObject.players;

	ractive = new Ractive({
	el: '#listManu',
	
	template: '#template',
	
	data: {listManu: myTeam}
});
}