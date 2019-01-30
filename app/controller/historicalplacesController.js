'use strict';

var HistoricalPlace = require('../model/historicalplaceModel');

exports.listAllHistoricalPlaces = function(req, res){
    HistoricalPlace.getAllHistoricalPlaces(function(error, historicalplace){
        if(error){
            res.send(error);
        } else {
            res.send(historicalplace);
        }
    });
};

exports.listHistoricalPlaceById = function(req, res){
    var placeId = req.params.placeId;
    HistoricalPlace.getHistoricalPlaceId(placeId, function(error, historicalplace){
        if(error){
            res.send(error);
        } else {
            res.send(historicalplace);
        }
    });
};