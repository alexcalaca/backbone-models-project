
//Create backbone vehicle model 
var Vehicle = Backbone.Model.extend({

  //Initialize object
  initialize: function(){
    console.log("initialized");
  },

  //Vehicle unique identification
  idAttribute: "registrationNumber",

  //Create a method called start
  start: function(){
    console.log("Vehicle started.");
  }
});
