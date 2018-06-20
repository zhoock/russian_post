"use strict";
var React = require('react');
var Link = require('react-router-component').Link;


var CatalogItem = React.createClass({
	render: function() {
		return (
				<div className="small-4 columns end">
					<div className={this.props.item.tablet?"b-block-magazine elVersion":"b-block-magazine"}>
						<Link href={'/item/' + this.props.item.section + '/'+this.props.item.id}>
						<figure>
							<div className={this.props.item.tablet?"":"text-center"}><img src={this.props.item.img} className="magazine"/>{this.props.item.tablet?<img src="/src/images/tablet1-big.jpg" className="tablet"/>:""}</div>
							<figcaption>{this.props.item.title}</figcaption>
							<div className="b-description" dangerouslySetInnerHTML={{__html: this.props.item.summary}}></div>
							<div className="b-price"><span className="b-price__book">от {this.props.item.cost} &#8381;</span>
								{this.props.item.tablet?<span className="b-price__mobile">от {this.props.item.cost_tablet} &#8381;</span>:""}
							</div>
						</figure>
						</Link>
					</div>
				</div>
					//<AddToCart item={this.props.item} />
		);
	}
});

module.exports = CatalogItem;