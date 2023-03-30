
//Create backbone vehicle model 
var Vehicle = Backbone.Model.extend({

  //Initialize object
  initialize: function(){
    console.log("initialized");
  },

  //Vehicle unique identification
  idAttribute: "registrationNumber",

  //Vehicles can be retrieved from the server
  urlRoot: "/api/vehicles",

  //Validate registration number presence
  validate: function(attrs){
    if (!attrs.registrationNumber)
      return "Vehicle is not valid.";
  },

  //Create a method called start
  start: function(){
    console.log("Vehicle started.");
  }

});

var Car = Vehicle.extend({
  start: function(){
    console.log("Car with registration number " +
      this.get("registrationNumber") + " started.");
  }
});

var car = new Car({
  registrationNumber: "BLI288",
  color: "Brown"
});

//Remove value of car
car.unset("registrationNumber");

if (!car.isValid())
  console.log(car.validationError );

car.set("registrationNumber", "BPI287");

if (!car.isValid())
  console.log(car.validationError);
  
//create collection
var Vehicles = Backbone.Collection.extend({
  
  initialize: function(){
    console.log("Vehicles collection initialized");
  },
  model: Vehicle
});
car.start();