"use strict";
var React = require('react');
var MenuItem = require('./app-menuitem.jsx');

var Nav = React.createClass({
    render: function() {
        var items = _.map(this.state.items, function(item) {
            return <MenuItem item={item} />;
        });
        return (
                <nav>
                    <div className="row">
                        <div className="small-8 small-centered columns">
                            <ul>
                                {items}
                            </ul>
                        </div>
                    </div>
                </nav>
        );
    }
});

module.exports = Nav;