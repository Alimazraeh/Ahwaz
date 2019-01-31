'use strict'

var sql = require('./db.js');

var HistoricalPeople = function(historicalPeople){
    this.historicalPeople = historicalPeople.historicalPeople;
}

HistoricalPeople.getAllHistoricalPeople = function getAllHistoricalPeople(result){
        let query = "Select * FROM historicalpeople";    
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

HistoricalPeople.getHistoricalPeopleId = function getHistoricalPeopleId(personId, result){
    let query = "Select * FROM historicalpeople WHERE person_id = " + personId;
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
module.exports = HistoricalPeople;