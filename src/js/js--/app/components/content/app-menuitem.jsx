"use strict";
var React = require('react');


var MenuItem = React.createClass({
    getInitialState: function() {
        return {
            activeMenuId: 'home'
        };
    },
    render: function() {
        return (
            <span><li><a className={this.props.item.menuid===this.state.activeMenuId?"active":""} href={this.props.item.link}>{this.props.item.title}</a></li> </span>
        );
    }
});

module.exports = MenuItem;