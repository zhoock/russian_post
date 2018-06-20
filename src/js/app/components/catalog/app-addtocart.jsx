"use strict";
var React = require('react');
var AppActions = require('../../actions/app-actions.jsx');

var AddToCart = React.createClass({
	handler: function(){
		AppActions.addItem(this.props.item);
	},
	render: function() {
		return (
		    <a className="btn btn__primary btn--cart" onClick={this.handler}><i className="icon-cart-plus"></i>{this.props.item.cost} &#8381;</a>
		);
	}
});

module.exports = AddToCart;