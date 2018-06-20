"use strict";
var React = require('react');

var PackageList = React.createClass({
    render: function () {
        return (
                <div className="b-block-magazine">
                    <a href={'/items/'+this.props.item.id}>
                        <figure>
                            <img src="/src/images/photo-magazine7.jpg"/>
                            <figcaption dangerouslySetInnerHTML={{__html: this.props.item.title}}></figcaption>
                            <span className="b-price__book">от {this.props.item.price} &#8381;</span>
                        </figure>
                    </a>
                </div>
        );
    }
});

module.exports = PackageList;