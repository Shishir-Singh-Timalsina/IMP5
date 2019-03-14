var controller = new ViewController();
controller.updatePersonsView();

function loadName(){
	var name = $('#name').val();
	controller.addPerson(name);
}

 //Load json file 
 function load() {

	$.ajax({
	   url: "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp",
	   
	   jsonpCallback: 'jsonCallback',

	   dataType: 'jsonp',
	   data: {},

	   success: function (result) {
		   console.log(result);    
	   	},
	   error: function () {
		   console.log("error");
	   }
	}).done(function(data) {
	   renderList(data);
	});

}

//Render list based on data from json file
function renderList(data) {
	var $list = $('#ajaxList');
	$.each(data, function(key, value) {
		var data = '';
		data += '<li>';
		data += value.name;
		data += ' email : ';
		data += '<a href="#">';
		data += value.email;
		data += '</a>';
		data += '</li>';
		$list.append(data);
	})
}
//Run when document is ready
$(document).ready(function() {
	//Assign handler for click action for submit button
	$('#submit').on('click', function() {
		load();
	});
});
