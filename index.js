// JavaScript Document

$.ajax({
  headers: { 'X-Auth-Token': 'e41abc632db14f7cabc6d28ae1efcb7e' },
  url: 'http://api.football-data.org/v1/teams/66/players',



var url = "http://api.football-data.org/v1/teams/66/players";
    $.getJSON(url,function (data, textStatus) {
           var players=data.results[0].name;
          console.log(name);
      });
	
