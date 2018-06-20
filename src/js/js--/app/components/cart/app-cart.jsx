"use strict";
var React = require('react');
var RemoveFromCart = require('./app-removefromcart.jsx');
var Increase = require('./app-increaseitem.jsx');
var Decrease = require('./app-decreaseitem.jsx');
var Link = require('react-router-component').Link;

var Catalog = React.createClass({
	render: function(){
		var total = 0;
		var items = _.map(this.state.items, function(item, i) {
			var subtotal = item.cost * item.qty;
			total += subtotal;
			return (
				<tr key={i}>
					<td><RemoveFromCart index={i} /></td>
					<td>{item.title}</td>
					<td>{item.qty}</td>
					<td>
						<Increase index={i} />
						<Decrease index={i} />
					</td>
					<td>${subtotal}</td>
				</tr>
			);
		});
		return (
			<div>
			<table className="table table-hover">
				<thead>
					<tr>
						<th></th>
						<th>Item</th>
						<th>Qty</th>
						<th></th>
						<th>Subtotal</th>
					</tr>
				</thead>
				<tbody>
					{items}
				</tbody>
				<tfoot>
					<tr>
						<td colSpan="4" className="text-right">Total</td>
						<td>{total}</td>
					</tr>
				</tfoot>
			</table>
			<Link href="/">Continue Shopping</Link>
			</div>
		);
	}
});

module.exports = Catalog;