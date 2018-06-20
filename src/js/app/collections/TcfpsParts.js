"use strict";

var Backbone = require('backbone');
var TcfpsPart = require('../models/TcfpsPart');

module.exports = Backbone.Collection.extend({
    model: TcfpsPart
});
