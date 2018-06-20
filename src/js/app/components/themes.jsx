"use strict";
var React = require('react');
var TemplateShort = require('./app-template-short.jsx');
var CatalogSection = require('./catalog/smart-catalogSection.jsx');
var MostViewes = require('./catalog/smart-mostViews.jsx');

var PubHouse = React.createClass({
    render: function () {
        return (
                <TemplateShort>

                    <CatalogSection elements="/dist/api/themes.json" title="Военное дело"/>

                    <MostViewes elements="/dist/api/recent_viewed.json" title="Вы недавно смотрели" moreUrl="/more" />
                </TemplateShort>
        );
    }
});

module.exports = PubHouse;