"use strict";

var Backbone = require('backbone');
var _ = require('underscore');
var Prices = require('../collections/Prices');

module.exports = Backbone.Model.extend({
    defaults: {
        priceFrom: null,
        prices: new Prices
    },

    initialize: function(attr) {
        if(_.has(attr, 'options')) {
            this.set('prices', new Prices(attr.options));
        }
    }
});