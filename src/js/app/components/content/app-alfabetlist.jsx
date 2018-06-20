"use strict";
var React = require('react');
var AlfabetItem = require('./app-alfabetlist-card.jsx');

var CatalogItem = React.createClass({
    render: function () {
        var items = _.map(this.props.item.items, function (item) {
            return <AlfabetItem item={item}/>;
        });
        return (
                <article className="b-letters">
                    <h2>{this.props.item.title}</h2>

                    {items}
                </article>
        );
    }
});

module.exports = CatalogItem;