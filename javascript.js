var controller = new ViewController();
controller.updatePersonsView();

function load(){
	var name = $('#name').val();
	controller.addPerson(name);
}

