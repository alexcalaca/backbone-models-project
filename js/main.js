
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

  //Create a method called start
  start: function(){
    console.log("Vehicle started.");
  }
});
