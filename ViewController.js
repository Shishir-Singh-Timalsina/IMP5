function ViewController()
	{
	this.personModel = new PersonModel();
	this.localStoragePersons = JSON.parse(localStorage.getItem('persons')) || [];

	this.updatePersonsView = function()
		{
		var personList = "";
		if(this.localStoragePersons.length !== 0)
			{			
			for(var i = 0; i < this.localStoragePersons.length; i++)
			{
				var nodea = document.createElement("LI");
				var textnode = document.createTextNode(this.localStoragePersons[i]['name']); 
				nodea.appendChild(textnode);
				document.getElementById("list").appendChild(nodea);
			}			
		}		
	}

	this.addPerson = function(name)
	{
		var newPerson = new Person(name);
		this.personModel.addPerson(newPerson);
		this.personModel.addStorage();
		this.updatePersonsView();
	}
}