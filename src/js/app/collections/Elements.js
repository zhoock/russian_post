"use strict";

var Backbone = require('backbone');
var PublicationElement = require('../models/PublicationElement');
var _ = require('underscore');

module.exports = Backbone.Collection.extend({
    model: PublicationElement,

    _path: null,

    initialize: function(){},

    setPath: function(path) {
        if(_.isString(path)) {
            this._path = path;
            this.map((element) => {
                element.setPath(this._path);
            });
        }
    }
});

