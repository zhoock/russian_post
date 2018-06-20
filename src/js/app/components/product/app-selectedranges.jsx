"use strict";
var React = require('react');

var SelectedRanges = React.createClass({
    render: function () {
        return (
                <div className="b-choose-periods__period">
                    {this.props.item.title}: {this.props.item.text}
                </div>
        );
    }
});

module.exports = SelectedRanges;