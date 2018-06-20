"use strict";
var React = require('react');


var CatalogItem = React.createClass({
    render: function () {
        if (this.props.item.type === 'paper') {
            return (
                    <div className="small-3 columns end">
                        <div className="b-block-magazine">
                            <a href={'/items/'+this.props.item.id} className="js-trigger-modal">
                            <figure>
                                <div className="text-center">
                                    <div className="publishingHouse">{this.props.item.typeTitle}</div>
                                    <img src="/src/images/photo-magazine4.jpg" className="magazine"/>
                                    <figcaption>{this.props.item.title}</figcaption>
                                </div>
                            </figure>
                        </a>
                        </div>
                    </div>
            );
        }
        else if (this.props.item.type === 'large') {
            return (

                    <div className="small-6 columns end">
                        <div className="b-block-magazine b-block-magazine--big">
                            <a href={'/items/'+this.props.item.id} className="js-trigger-modal">
                            <figure>
                                <div className="text-center">
                                    <div className="b-block-magazine__together">{this.props.item.typeTitle}</div>
                                    <div className="b-block-magazine__logs--package">
                                        <img src={this.props.item.img1} />
                                        <img src={this.props.item.img2} />
                                        <img src={this.props.item.img3} />
                                    </div>
                                    <figcaption>{this.props.item.title}</figcaption>
                                    <div className="b-description">{this.props.item.summary}</div><span
                                        className="b-price__book">
                      <span className="strike">{this.props.item.old_cost} &#8381;</span>{this.props.item.cost} &#8381;</span>
                                </div>
                            </figure>
                        </a></div>
                    </div>
            );
        }
        else {
            return (
                    <div className="small-3 columns end">
                        <div className="b-block-magazine"><a href={'/items/'+this.props.item.id}
                                                             className="js-trigger-modal">
                            <figure>
                                <div className="text-center">
                                    <div className="magazine-title">{this.props.item.magazine_title}</div>
                                    <img src={this.props.item.img} className={this.props.item.imgclass?"magazine "+this.props.item.imgclass:"magazine"}/>
                                </div>
                                <figcaption>{this.props.item.title}</figcaption>
                                <div className="b-description"
                                     dangerouslySetInnerHTML={{__html: this.props.item.summary}}></div>
                                <div className="b-price"><span
                                        className="b-price__book">от {this.props.item.cost} &#8381;</span>
                                </div>
                            </figure>
                        </a></div>
                    </div>
            );
        }
    }
});

module.exports = CatalogItem;