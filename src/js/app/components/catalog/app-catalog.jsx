"use strict";
var React = require('react');
var CatalogItem = require('./app-catalogitem.jsx');

var Catalog = React.createClass({
    render: function () {
        var items = _.map(this.state.items, function (item) {
            return <CatalogItem key={item.id} item={item}/>;
        });
        return (
                <div className="row">
                    {items}
                </div>
        );
    }
});

module.exports = Catalog;