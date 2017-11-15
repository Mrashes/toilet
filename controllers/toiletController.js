const db = require("../models")

module.exports = {
    findAll: function(req, res){
        db.Toilet
            .find({})
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    findToiletById: function(req, res){
        db.Toilet
            .find({toiletid: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },    
    create: function(req, res){
        db.Toilet
            .create(req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
}