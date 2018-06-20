"use strict";
var React = require('react');

var Ranges = React.createClass({
    render: function () {
        return (
                <div className="b-subscription__journal">
                    <div className="row">
                        <div className="small-11 small-centered columns">
                            <h1 onClick={this.props.onclick.bind(this)}><i className="icon-Dropdown"></i>{this.props.item.title}</h1>

                            <p className="b-subscription__description">{this.props.item.text}</p>

                            <p className="b-subscription__info">{this.props.item.annotation}</p>
                        </div>
                    </div>
                </div>
        );
    }
});

module.exports = Ranges;