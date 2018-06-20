"use strict";

var Backbone = require('backbone');
var russianCase = require('../utils/russianCase.js');

module.exports = Backbone.Model.extend({
    defaults: {
        periodicity: null
    },

    getDescription: function() {
        var text = "";
        var hasPage = this.has('pagesMin') && this.has('pagesMax');
        var hasWeight = this.has('weightMin') && this.has('weightMax');
        var hasPeriodicity = this.has('periodicity');
        var desc = hasPage || hasWeight || hasPeriodicity;
        var pageSame = this.get('pagesMin') == this.get('pagesMax');
        var weightSame = this.get('pagesMin') == this.get('pagesMax');
        if(hasPage) {
            if(!pageSame) {
                text += `${this.get('pagesMin')} – ${this.get('pagesMax')}&nbsp;${russianCase(this.get('pagesMax'), 'страница', 'страницы', 'страницы')}`;
            } else {
                text += `${this.get('pagesMin')}&nbsp;${russianCase(this.get('pagesMax'), 'страница', 'страницы', 'страницы')}`;
            }
        }
        if(hasWeight) {
            if(hasPage) {
                text += ", ";
            }
            if(!weightSame) {
                text +=  `${this.get('weightMin')} – ${this.get('weightMax')}&nbsp;г.`;
            } else {
                text +=  `${this.get('weightMin')}&nbsp;г.`;
            }
        }
        return desc &&
               `${text} ${hasPeriodicity && `Выходит ${this.get('periodicity')}`}`;
    }
});