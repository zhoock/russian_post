"use strict";
var React = require('react');

var CatalogItem = React.createClass({
    render: function () {
        return (
                <div className="b-block-magazine">
                    <a href={'/items/'+this.props.item.id}>
                        <figure>
                            <div className="left">
                                <div className="b-block-magazine__logs--package">
                                    <img src={this.props.item.img1}/>
                                    <img src={this.props.item.img2}/>
                                    <img src={this.props.item.img3}/>
                                </div>
                            </div>
                            <div className="b-block-magazine__together">{this.props.item.typeTitle}</div>
                            <figcaption>{this.props.item.title}
                            </figcaption>
                            <div className="b-description">{this.props.item.summary}</div>
                            <div className="b-price">
                                <div className="b-price__book">от {this.props.item.price} &#8381;</div>
                            </div>
                        </figure>
                    </a>
                </div>
        );
    }
});

module.exports = CatalogItem;