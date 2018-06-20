"use strict";

var Backbone = require('backbone');
var _ = require('underscore');
var TcfpsOptions = require('../collections/TcfpsOptions');
var TcfpsParts = require('../collections/TcfpsParts');
var Prices = require('../collections/Prices');
var Sets = require('../collections/Sets');

module.exports = Backbone.Model.extend({
    defaults: {
        publicationType: 'NEWSPAPER',
        optionsCollection: new TcfpsOptions,
        partsCollection: new TcfpsParts,
        setsCollection: new Sets
    },

    _path: null,

    initialize: function(attr) {
        if(this.has('tcfpsOptions')) {
            this.set('optionsCollection', new TcfpsOptions(this.get('tcfpsOptions')));
        }
        if(this.has('tcfpsParts')) {
            this.set('partsCollection', new TcfpsParts(this.get('tcfpsParts')))
        }
        if(this.has('linkedPublicationSets')) {
            this.set('setsCollection', new Sets(this.get('linkedPublicationSets')));
        }
    },

    getTypeRU: function() {
        return _.first(_.compact([
            this.isNewspaper() && "Газета",
            this.isMagazine()  && "Журнал",
            "Газета"
        ]));
    },

    getCoverURL: function() {
        return this._cover(this.urlToCover);
    },

    getBigCoverURL: function() {
        return this._cover(this.urlToBigCover);
    },

    getSummaryByRegion: function(region) {
        return (this.get('partsCollection')
                    .chain()
                    .first()
                    .value() || new TcfpsParts.prototype.model)
                    .get('periodicity');
    },

    getPriceByRegion: function(region) {
        return (
            this._getModelByRegion(region)
                .get('priceFrom')
        );
    },

    getDescription: function(region) {
        var part = this._getPartsModelByRegion(region);
        if(!_.isUndefined(part)) {
            return part.getDescription();
        } else {

        }
    },

    getPricesByRegion: function(region) {
        return (
            this._getModelByRegion(region)
                .get('prices')
        );
    },

    setPath: function(path) {
        if(_.isString(path)) {
            this._path = path;
            if(!this.get('setsCollection').isEmpty()) {
                this.get('setsCollection').map((set) => {
                    set.setPath(path);
                });
            }
        }
    },

    isPlaceholder: function() {
        return !this.has('cover');
    },

    isSet: function() {
        return this.get('publicationType') === "SET";
    },

    isMagazine: function() {
        return this.get('publicationType') == 'MAGAZINE';
    },

    isNewspaper: function() {
        return  this.get('publicationType') == 'NEWSPAPER';
    },

    urlToCover: function(url) {
        return url.replace(/(\.[^.]+)$/, "_COVER$1");
    },

    urlToBigCover: function(url) {
        return url.replace(/(\.[^.]+)$/, "_BIG_COVER$1");
    },

    _getModelByRegion: function(region) {
        var geolocation = window.geolocation;
        var tcfpsCode = region || _.has(geolocation, 'tcfpsCode') && geolocation.tcfpsCode;
        if(_.has(geolocation, 'tcfpsCode')) {
            return (
                this.get('optionsCollection')
                    .findWhere({tcfpsCode: tcfpsCode})
            );
        } else {
            return (
                this.get('optionsCollection')
                    .first() || new TcfpsOptions.prototype.model
            );
        }
    },

    _getPartsModelByRegion: function(region) {
        var geolocation = window.geolocation;
        var tcfpsCode = region || _.has(geolocation, 'tcfpsCode') && geolocation.tcfpsCode;
        if(_.has(geolocation, 'tcfpsCode')) {
            return (
                this.get('partsCollection')
                    .findWhere({tcfpsCode: tcfpsCode})
            );
        } else {
            return (
                this.get('partsCollection')
                    .first() || new TcfpsParts.prototype.model
            );
        }
    },

    _cover: function(replace_func) {
        return _.first(_.compact([
            this.has('cover') && `${this._path}${replace_func(this.get('cover').url)}`,
            this.get('publicationType') === "MAGAZINE" && "/online-subscription-static/images/Magazine_placeholder.svg",
            this.get('publicationType') === "NEWSPAPER" && "/online-subscription-static/images/Newspaper_placeholder.svg",
            "/online-subscription-static/images/Newspaper_placeholder.svg"
        ]));
    }
});