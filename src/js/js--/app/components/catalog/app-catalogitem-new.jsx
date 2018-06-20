"use strict";
var React = require('react');

var CatalogItem = React.createClass({
    render: function() {
        return (
                <div className="small-4 columns end">
                    <div className="b-block-magazine"><a href={'/items/'+this.props.item.id} className="js-trigger-modal">
                        <figure>
                            <div className="text-center"><img src={this.props.item.img}
                                                              className="magazine"/></div>
                            <figcaption>{this.props.item.title}</figcaption>
                            <div className="b-description" dangerouslySetInnerHTML={{__html: this.props.item.summary}}></div>
                            <div className="b-price"><span className="b-price__book">от {this.props.item.cost} &#8381;</span>
                            </div>
                        </figure>
                    </a></div>
                </div>
        );
    }
});

module.exports = CatalogItem;