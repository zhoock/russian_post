"use strict";
var React = require('react');

var CatalogItem = React.createClass({
    render: function () {
        if (this.props.item.type === 'large') {
            return (
                    <div className="small-6 columns end">
                        <div className="b-block-magazine b-block-magazine--red b-block-magazine--big">
                            <a href={'items/press/'+this.props.item.id} className="js-trigger-modal">
                                <figure>
                                    <div className="text-center">
                                        <div className="b-block-magazine__together">{this.props.item.typeTitle}</div>
                                        <img src={this.props.item.logo}/>

                                        <div className="b-block-magazine__logs">
                                            <img src={this.props.item.img1}/>
                                            <img src={this.props.item.img2}/>
                                            <img src={this.props.item.img3}/>
                                        </div>
                                    </div>
                                </figure>
                            </a></div>
                    </div>
            );
        }
        else {
            return (
                    <div className="small-3 columns end">
                        <div className="b-block-magazine">
                            <a href={'items/press/'+this.props.item.id} className="js-trigger-modal">
                            <figure>
                                <div className="text-center">
                                    <img src={this.props.item.img1} className="magazine"/></div>
                                <figcaption>{this.props.item.title}</figcaption>
                                <div className="b-description">{this.props.item.introtext}</div>
                                <div className="b-price"><span className="b-price__book">от {this.props.item.cost} &#8381;</span></div>
                            </figure>
                        </a></div>
                    </div>
            );
        }
    }
});

module.exports = CatalogItem;