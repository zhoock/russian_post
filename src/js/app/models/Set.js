"use strict";

var Backbone = require('backbone');
var _ = require('underscore');

module.exports = Backbone.Model.extend({
    _path: null,

    getPrice: function() {
        return this.getPriceByRegion(null);
    },

    getPriceByRegion: function(region) {
        var geolocation = window.geolocation;
        var tcfpsCode = region || _.has(geolocation, 'tcfpsCode') && geolocation.tcfpsCode;
        if(_.has(geolocation, 'tcfpsCode')) {
            var price = _.findWhere(this.get('priceFrom'), {tcfpsCode: tcfpsCode});
        } else {
            var price = _.first(this.get('priceFrom'))  || {price: null};
        }
        if(_.isObject(price) && _.has(price, 'price')) {
            return price.price;
        }
    },

    getCoverURL: function() {
        return this._cover(this.urlToCover);
    },

    getSetCoverURL: function() {
        return this._cover(this.urlToSetCoverURL);
    },

    setPath: function(path) {
        if(_.isString(path)) {
            this._path = path;
        }
    },

    urlToCover: function(url) {
        return url.replace(/(\.[^.]+)$/, "_COVER$1");
    },

    urlToSetCoverURL: function(url) {
        return url.replace(/(\.[^.]+)$/, "_SET_COVER$1");
    },

    _cover: function(replace_func) {
        return _.first(_.compact([
            this.has('covers') && `${this._path}${replace_func(_.first(this.get('covers')).url)}`,
            this.get('publicationType') === "MAGAZINE" && "/online-subscription-static/images/Magazine_placeholder.svg",
            this.get('publicationType') === "NEWSPAPER" && "/online-subscription-static/images/Newspaper_placeholder.svg",
            "/online-subscription-static/images/Newspaper_placeholder.svg"
        ]));
    }
});