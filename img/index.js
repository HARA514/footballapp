


var jsonFile = "http://kieran-taylor.worcestercomputing.com/manutdplayers.json";


function getData(){
$.getJSON(jsonFile, function (json) {

    // Set the variables from the results array
    var name = json.response[0].name;
	console.log(name);

    $('#showData').html(name);
});
}