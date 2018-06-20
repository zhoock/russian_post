"use strict";
var React = require('react');

var setItems = React.createClass({
    render: function () {
        return (
                <div className="b-block-magazine">
                    <a href="#">
                        <figure><img src={this.props.item.img}/>
                            <figcaption>{this.props.item.title}</figcaption>
                            <span className="b-price__book">от {this.props.item.price} ₽</span>
                        </figure>
                    </a>
                </div>
        );
    }
});

module.exports = setItems;