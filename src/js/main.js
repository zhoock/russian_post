var React = require('react');
var Collections = require('./app/collections/*', {mode: 'hash'});
var Models = require('./app/models/*', {mode: 'hash'});
var Smart = require('./app/smart/*', {mode: 'hash'});
var _ = require('underscore');

$(function(){
    _.templateSettings = {
        evaluate :   /\{\[([\s\S]+?)\]\}/g,
        interpolate: /\{\{(.+?)\}\}/g,
        escape:      /\{\{\{([\s\S]+?)\}\}\}/g
    };
    var __data = window.__data;
    var scope = _.extend({
        React: React
    }, Models, Collections, Smart);
    for (var key in __data) {
        var init = __data[key];
        init.apply(scope);
    }
});