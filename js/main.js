
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
});
