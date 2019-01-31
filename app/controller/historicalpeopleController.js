'use strict';

var HistoricalPeople = require('../model/historicalpeopleModel');

exports.listAllHistoricalPeople = function(req, res){
    HistoricalPeople.getAllHistoricalPeople(function(error, historicalpeople){
        if(error){
            resJsonFailure(res, error);
        } else {
            resJsonSuccess(res, historicalpeople);
        }
    });
};

exports.listHistoricalPeopleById = function(req, res){
    var personId = req.params.personId;
    HistoricalPeople.getHistoricalPeopleId(personId, function(error, historicalpeople){
        if(error){
            resJsonFailure(res, error);
        } else {
            resJsonSuccess(res, historicalpeople);
        }
    });
};

function resJsonSuccess(res, result){
    res.json({
        code: 200,
        status: "success",
        msg: "People retrieved successfully",
        data: result
    });
}

function resJsonFailure(res, error){
    res.json({
        code: 404,
        status: "failure",
        msg: error,
        data: ""
    });
}