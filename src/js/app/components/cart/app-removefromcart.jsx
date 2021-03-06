"use strict";
var React = require('react');
var AppActions = require('../../actions/app-actions.jsx');

var RemoveFromCart = React.createClass({
	handler: function(){
		AppActions.removeItem(this.props.index);
	},
	render: function() {
		return (
			<button onClick={this.handler}>x</button>
		);
	}
});

module.exports = RemoveFromCart;