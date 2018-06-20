"use strict";
var React = require('react');
var TemplateShort = require('./app-template-short.jsx');
var Basket = require('./content/smart-basket.jsx');

var PubHouse = React.createClass({
    render: function () {
        return (
                <TemplateShort clear="true">
                    <nav className="b-nav b-nav--cart">
                        <div className="row">
                            <div className="small-12 columns">
                                <ul>
                                    <li><i className="icon-back"></i><a href="#">Продолжить покупки</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <Basket elements="/dist/api/cart.json" />

                </TemplateShort>
        );
    }
});

module.exports = PubHouse;