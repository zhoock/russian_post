"use strict";

var Backbone = require('backbone');
var TcfpsOption = require('../models/TcfpsOption');

module.exports = Backbone.Collection.extend({
    model: TcfpsOption,
    initialize: function() {}
});

