"use strict";
var React = require('react');
var CatalogPagePublications = require('./product/app-pagepublications.jsx');
var TemplateSearch = require('./app-template-search.jsx');
var MostViewes = require('./catalog/smart-mostViews.jsx');

var CatalogItem = React.createClass({
    getInitialState: function () {
        return {
            viewed: '',
            viewed_count: ''
        };
    },
    componentDidMount: function () {

    },
    render: function () {
        return (
                <TemplateSearch>
                    <section role="main" className="b-content">
                        <CatalogPagePublications/>

                        <MostViewes elements="/dist/api/recent_viewed.json" title="Вы недавно смотрели" />
                    </section>
                </TemplateSearch>
        );
    }
});

module.exports = CatalogItem;