"use strict";
var React = require('react');
var RowItem = require('./app-search-card.jsx');

var CatalogItem = React.createClass({
    render: function () {
        var rows = _.map(this.props.item.items, function (el) {
            return <RowItem key={el.id} item={el}/>;
        });
        return (
                <article className="b-search-results__item">
                    <h2>{this.props.item.title}</h2>
                    {rows}
                </article>
        );
    }
});

module.exports = CatalogItem;