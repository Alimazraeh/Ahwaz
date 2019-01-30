'use strict';

var LocalPlace = require('../model/localplaceModel');

exports.listAllLocalPlaces = function(req, res){
    LocalPlace.getAllLocalPlaces(function(error, localplace){
        if(error){
            res.send(error);
        } else {
            res.send(localplace);
        }
    });
};

exports.listLocalPlaceById = function(req, res){
    var placeId = req.params.placeId;
    LocalPlace.getLocalPlaceId(placeId, function(error, localplace){
        if(error){
            res.send(error);
        } else {
            res.send(localplace);
        }
    });
};