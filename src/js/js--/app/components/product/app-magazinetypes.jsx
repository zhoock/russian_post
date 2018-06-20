"use strict";
var React = require('react');

var MagazineTypes = React.createClass({
    render: function () {
        return (
                <div>
                    <img src={this.props.item.img}
                            className="b-subscription__photo"/>

                        <div className="b-subscription__type"><span>{this.props.item.title}</span>
                        </div>
                </div>
        );
    }
});

module.exports = MagazineTypes;