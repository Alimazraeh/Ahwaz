'use strict'

var sql = require('./db.js');

var HistoricalPlace = function(historicalPlace){
    this.historicalPlace = historicalPlace.historicalPlace;
}

HistoricalPlace.getAllHistoricalPlaces = function getAllHistoricalPlaces(result){
        let query = "Select * FROM historicalplaces";    
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

HistoricalPlace.getHistoricalPlaceId = function getHistoricalPlaceId(placeId, result){
    let query = "Select * FROM historicalplaces WHERE historical_place_id = " + placeId;
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
module.exports = HistoricalPlace;