"use strict";

var Backbone = require('backbone');
var Price = require('../models/Price');

module.exports = Backbone.Collection.extend({
    model: Price
});