'use strict';

var HistoricalPlace = require('../model/historicalplaceModel');

exports.listAllHistoricalPlaces = function(req, res){
    HistoricalPlace.getAllHistoricalPlaces(function(error, historicalplace){
        if(error){
            resJsonFailure(res, error);
        } else {
            resJsonSuccess(res, historicalplace);
        }
    });
};

exports.listHistoricalPlaceById = function(req, res){
    var placeId = req.params.placeId;
    HistoricalPlace.getHistoricalPlaceId(placeId, function(error, historicalplace){
        if(error){
            resJsonFailure(res, error);
        } else {
            resJsonSuccess(res, historicalplace);
        }
    });
};

function resJsonSuccess(res, result){
    res.json({
        code: 200,
        status: "success",
        msg: "Places retrieved successfully",
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