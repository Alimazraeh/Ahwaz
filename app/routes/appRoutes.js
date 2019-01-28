'use strict';

module.exports = function(app){

    var historicalPeople = require("../controller/historicalpeopleController");
    var historicalPlaces = require("../controller/historicalplacesController");
    var localPlaces = require("../controller/localplacesController");
    var language = require("../controller/languagesController");
    var favorites = require("../controller/favoritesController");

   //historical people
    app.route('/historicalpeople')
        .get();
    app.route('/historicalpeople/:personId')   
        .get(); 

    //historical places    
    app.route('/historicalplaces')
       .get();
    app.route('/historicalplaces/:placeId')   
       .get(); 

    //local places    
    app.route('/localplaces')
       .get();
    app.route('/localplaces/:placeId')   
       .get(); 

    //language
    app.route('/language/:termName') 
       .get();  

    //favorites    
    app.route('/favorites/:userId')
       .get();
}