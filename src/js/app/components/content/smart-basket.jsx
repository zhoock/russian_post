"use strict";
var React = require('react');
var request = require('superagent');
var CartItems = require('../cart/cart_item.jsx');

var PubHouse = React.createClass({
    getInitialState: function () {
        return {
            summary: '',
            itemsList: ''
        };
    },
    componentDidMount: function () {

        $(document).on('scroll',function() {
            if($(document).height() - ($(document).scrollTop() + $(window).height()) <= 190) {
                $('.js-cart-popup').stop().animate({
                    bottom: -160
                },'fast');
            }
            else {
                $('.js-cart-popup').stop().animate({
                    bottom: -40
                },'fast');
            }
        });

        var that = this;
        request
                .get(this.props.elements)
                .type('json')
                .end(function (err, res) {
                    var itemsList = _.map(res.body.items, function (item) {
                        return <CartItems key={item.id} item={item}/>;
                    });
                    that.setState({
                        summary: res.body.summary,
                        itemsList: itemsList
                    });
                });
    },
    render: function () {
        return (
                    <div className="row">
                        <div className="small-12 columns">
                            <section className="b-results b-cart">
                                <h2>Корзина</h2>
                                {this.state.itemsList}
                                <div className="b-payment-wrap">
                                    <div className="b-payment b-payment__popup js-cart-popup">
                                        <div className="row">
                                            <div className="small-3 columns">
                                                <div className="btn btn__primary">Оплатить</div>
                                            </div>
                                            <div className="small-5 columns">
                                                <p className="or left">или</p>

                                                <p className="left"><a href="#" className="b-payment__download">Cкачать
                                                    бланк оплаты</a><br/>Оплатить
                                                    можно в любом<br/>отделении почты</p>
                                            </div>
                                            <div className="small-4 columns">
                                                <p className="b-payment__price text-right" dangerouslySetInnerHTML={{__html: this.state.summary}}></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="b-payment">
                                        <div className="row">
                                            <div className="small-3 columns">
                                                <div className="btn btn__primary">Оплатить</div>
                                            </div>
                                            <div className="small-5 columns">
                                                <p className="or left">или</p>

                                                <p className="left"><a href="#" className="b-payment__download">Cкачать
                                                    бланк оплаты</a><br/>Оплатить
                                                    можно в любом<br/>отделении почты</p>
                                            </div>
                                            <div className="small-4 columns">
                                                <p className="b-payment__price text-right" dangerouslySetInnerHTML={{__html: this.state.summary}}></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
        );
    }
});

module.exports = PubHouse;