"use strict";

var Backbone = require('backbone');
var russianCase = require('../utils/russianCase.js');

module.exports = Backbone.Model.extend({
    getTitle: function() {
        var comma_after_optionName = (this.has('optionName') || this.has('msp')) && this.has('issues');
        var msp = "";
        if(this.has('msp')) {
            switch(this.get('msp')) {
                case 6:
                    msp = "Полгода";
                    break;
                case 12:
                    msp = "Год";
                    break;
                default:
                    msp = `${this.get('msp')}&nbsp;${russianCase(this.get('msp'), "месяц", "месяца", "месяцов")}`;
            }
        }
        return `${this.has('optionName') && this.get('optionName') || ""} ${msp}${comma_after_optionName && `, ` || ""} ${this.has('issues') && `${this.get('issues')}&nbsp;${russianCase(this.get('issues'), "выпуск", "выпуска", "выпусков")}` || ""}`;
    },

    getPrice: function() {
        return this.get('priceHome');
    },

    hasPrice: function() {
        return this.has('priceHome');
    }
});