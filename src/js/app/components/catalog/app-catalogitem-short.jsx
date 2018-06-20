"use strict";
var React = require('react');
var Link = require('react-router-component').Link;

var CatalogItem = React.createClass({
    render: function() {
        var className = "small-3 columns end";
        if (this.props.item.long) {
            className = "small-6 columns end";
        }
        if (this.props.hidden === "true") {
            className += " js-loadmoreanimation";
        }
        return (
                <div className={className}>
                    <div className={this.props.item.tablet?"b-block-magazine elVersion":"b-block-magazine"}>
                        <Link href={'/item/' + this.props.item.section + '/'+this.props.item.id}>
                        <figure className={this.props.item.subtitle?"text-center":""}>
                            {this.props.item.subtitle ? <div className="together">{this.props.item.subtitle}</div> : ''}
                            <div className={this.props.item.tablet?"":"text-center"}><img src={this.props.item.img} className="magazine"/>{this.props.item.tablet?<img src="/src/images/tablet1-big.jpg" className="tablet"/>:""}</div>
                            <figcaption>
                                {this.props.item.title}
                            </figcaption>
                            <div className="b-description" dangerouslySetInnerHTML={{__html: this.props.item.summary}}></div>
                            <div className={this.props.item.long?"":"b-price"}>
                                {this.props.item.cost?<span className={this.props.item.type?"b-price__book":"b-price__mobile"}>{this.props.item.old_cost?<span className="strike">{this.props.item.old_cost} &#8381;</span>:"от"} {this.props.item.cost} &#8381;</span>:''}
                                {this.props.item.cost_tablet?<span className="b-price__mobile">от {this.props.item.cost_tablet} &#8381;</span>:''}
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