'use strict'

var sql = require('./db.js');

var LocalPlace = function(localPlace){
    this.localPlace = localPlace.localPlace;
}

LocalPlace.getAllLocalPlaces = function getAllLocalPlaces(result){
        let query = "Select * FROM localplaces";    
        sql.query(query, function(error, response){
            if(error){
                console.log("Error:"+ error);
                result(null, error);
            } else{
                console.log("Response:"+ response);
                result(null, response);
            }
        });
}

LocalPlace.getLocalPlaceId = function getLocalPlaceId(placeId, result){
    let query = "Select * FROM localplaces WHERE local_place_id = " + placeId;
    sql.query(query, function(error, response){
        if(error){
            console.log("Error:"+ error);
            result(null, error);
        } else{
            console.log("Response:"+ response);
            result(null, response);
        }
    });
}
module.exports = LocalPlace;