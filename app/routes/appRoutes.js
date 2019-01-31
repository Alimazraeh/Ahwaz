'use strict';

module.exports = function(app){

    var historicalPeople = require("../controller/historicalpeopleController");
    var historicalPlaces = require("../controller/historicalplacesController");
    var localPlaces = require("../controller/localplacesController");
    var language = require("../controller/languageController");
    var favorites = require("../controller/favoritesController");

   //historical people
    app.route('/historicalpeople')
        .get(historicalPeople.listAllHistoricalPeople);
    app.route('/historicalpeople/:personId')   
        .get(historicalPeople.listHistoricalPeopleById); 

    //historical places    
    app.route('/historicalplaces')
       .get(historicalPlaces.listAllHistoricalPlaces);
    app.route('/historicalplaces/:placeId')   
       .get(historicalPlaces.listHistoricalPlaceById); 

    //local places    
    app.route('/localplaces')
       .get(localPlaces.listAllLocalPlaces);
    app.route('/localplaces/:placeId')   
       .get(localPlaces.listLocalPlaceById); 

    //language
    app.route('/language/:termName') 
       .get();  

    //favorites    
    app.route('/favorites/:userId')
       .get();
}