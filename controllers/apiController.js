'use strict';

var mongoose = require('mongoose');
var Superhero = mongoose.model('superheros');

exports.get = (req, res) => {
    Superhero.find(function (err, superheros) {
        console.log(superheros)
        res.render(
            'api',
            { title: 'Superhero API', superheros: superheros }
        );
    });
}

exports.post = (req, res) => {
    let superHeroes = new Superhero({ name: req.body.name });
    superHeroes.save(function (err, superhero) {
        console.log(superhero)
        res.redirect('/api/superheros');
    });
}

exports.getSuperhero = (req, res) => {
    let query = { "_id": req.params.id };
    Superhero.findOne(query, function (err, superhero) {
        console.log(superhero)
        res.render(
            'superhero',
            { title: 'Superhero API - ' + superhero.name, superhero: superhero }
        );
    });
} 

exports.putSuperhero = (req, res) => {
    var query = { "_id": req.params.id };
    var update = { name: req.body.name };
    var options = { new: true };
    Superhero.findOneAndUpdate(query, update, options, function (err, superhero) {
        console.log(superhero)
        res.render(
            'superhero',
            { title: 'Superhero API - ' + superhero.name, superhero: superhero }
        );
    });
}

exports.deleteSuperhero = (req, res) => {
    var query = { "_id": req.params.id };
    Superhero.findOneAndRemove(query, function (err, superhero) {
        console.log(superhero)
        res.redirect('/api/superheros');
    });
}