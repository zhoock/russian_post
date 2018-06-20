"use strict";
var React = require('react');

var Ranges = React.createClass({
    render: function () {
        var row_titles = _.map(this.props.item.rows,function(el) {
            return (<div><span>{el[0]}</span></div>);
        });
        var row_counts = _.map(this.props.item.rows,function(el) {
            return (<div><span>{el[1]}</span></div>);
        });
        return (
                <div className="b-subscription__periods__item">
                    <div><strong>{this.props.item.title}</strong></div>
                    <div className="b-subscription__periods__titles">
                        {row_titles}
                    </div>
                    <div className="b-subscription__periods__titles__quantity">
                        {row_counts}
                    </div>
                    <div className="b-subscription__periods__price">{this.props.item.price} &#8381;</div>
                </div>
        );
    }
});

module.exports = Ranges;