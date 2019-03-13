function PersonModel()
{
  this.persons = JSON.parse(localStorage.getItem('persons')) || new Array();

  this.addPerson = function(person)
  {
    this.persons.push(person);
  }

  this.getPersons = function()
  {
    return this.persons;
  }

  this.addStorage = function(){
  	localStorage.setItem('persons', JSON.stringify(this.persons));
  }
}

function Person(personName){
	this.name = personName;

	this.getName = function(){
		return this.name;
	}
}

