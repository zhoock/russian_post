"use strict";
var React = require('react');

var MenuItem = React.createClass({
    render: function() {
        var rows = _.map(this.props.item.items, function (el) {
            return (
                    <a href={'/item/bytype/'+el.id}>{el.title}</a>
            );
        });
        return (
                <article className="b-categories__item">
                    <div className="b-categories__item__letter" id={this.props.item.id}>{this.props.item.title}</div>
                    <div className="b-categories__item__set">
                        {rows}
                    </div>
                </article>
        );
    }
});

module.exports = MenuItem;