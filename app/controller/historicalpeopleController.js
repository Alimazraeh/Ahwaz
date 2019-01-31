'use strict';

var HistoricalPeople = require('../model/historicalpeopleModel');

exports.listAllHistoricalPeople = function(req, res){
    HistoricalPeople.getAllHistoricalPeople(function(error, historicalpeople){
        if(error){
            res.send(error);
        } else {
            res.send(historicalpeople);
        }
    });
};

exports.listHistoricalPeopleById = function(req, res){
    var personId = req.params.personId;
    HistoricalPeople.getHistoricalPeopleId(personId, function(error, historicalpeople){
        if(error){
            res.send(error);
        } else {
            res.send(historicalpeople);
        }
    });
};