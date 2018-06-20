"use strict";

var Backbone = require('backbone');
var Set = require('../models/Set');

module.exports = Backbone.Collection.extend({
    model: Set
});