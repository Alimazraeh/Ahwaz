'use strict';

var LocalPlace = require('../model/localplaceModel');

exports.listAllLocalPlaces = function(req, res){
    LocalPlace.getAllLocalPlaces(function(error, localplace){
        if(error){
            resJsonFailure(res, error);
        } else {
            resJsonSuccess(res, localplace);
        }
    });
};

exports.listLocalPlaceById = function(req, res){
    var placeId = req.params.placeId;
    LocalPlace.getLocalPlaceId(placeId, function(error, localplace){
        if(error){
            resJsonFailure(res, error);
        } else {
            resJsonSuccess(res, localplace);
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