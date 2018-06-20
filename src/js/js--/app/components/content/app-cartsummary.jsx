"use strict";
var React = require('react');

var CartSummary = React.createClass({
	getInitialState: function () {
		return {
			qty: 0,
			total: 0
		};
	},
	render: function() {
		return (
				<div className="b-cart_wrap">
					<section className="b-cart__recently-added">
						<div className="row scrollyeah">
							<div className="small-2 columns">
								<div className="title"><i className="icon-Item_pop_close"></i></div>
								<div className="text-center"><img src="/src/images/photo-magazine3.jpg"/></div>
							</div>
							<div className="small-2 columns">
								<div className="title"><i className="icon-Item_pop_close"></i></div>
								<div className="text-center"><img src="/src/images/photo-magazine3.jpg"/></div>
							</div>
							<div className="small-2 columns">
								<div className="title"><i className="icon-Item_pop_close"></i></div>
								<div className="text-center"><img src="/src/images/photo-magazine3.jpg"/></div>
							</div>
							<div className="small-2 columns">
								<div className="title"><i className="icon-Item_pop_close"></i></div>
								<div className="text-center"><img src="/src/images/photo-magazine3.jpg"/></div>
							</div>
							<div className="small-2 columns">
								<div className="title"><i className="icon-Item_pop_close"></i></div>
								<div className="text-center"><img src="/src/images/photo-magazine3.jpg"/></div>
							</div>
							<div className="small-2 columns">
								<div className="title"><i className="icon-Item_pop_close"></i></div>
								<div className="text-center"><img src="/src/images/photo-magazine3.jpg"/></div>
							</div>
						</div>
						<div className="b-cart__recently-added__submit">
							<p>{this.state.qty} изданий на {this.state.total} &#8381;</p><a
								className="btn btn__primary js-trigger-modal">Оформить</a>
						</div>
					</section>
					</div>
		);
	}
});

module.exports = CartSummary;