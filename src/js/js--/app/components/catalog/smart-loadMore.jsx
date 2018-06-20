"use strict";
var React = require('react');

var SameItems = React.createClass({
    render: function () {
        return (
                <div className="row">
                    <div className="small-12 columns">
                        <div className="b-show-more"><a href="#" onClick={this.props.handle.bind(this)}>Показать ещё</a>
                        </div>
                    </div>
                </div>
        );
    }
});

module.exports = SameItems;