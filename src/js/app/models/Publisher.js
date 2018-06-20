"use strict";

var Backbone = require('backbone');
var _ = require('underscore');

module.exports = Backbone.Model.extend({
    _path: null,

    getLogo: function() {
        return _.first(_.compact([
            this.hasLogo() && !_.isNull(this._path) && `${this._path}${this.get('image').url}`,
            this.hasLogo() && this.get('image').url
        ]));
    },

    setPath: function(path) {
        if(_.isString(path)) {
            this._path = path;
        }
    },

    hasLogo: function() {
        return this.has('image');
    }
});