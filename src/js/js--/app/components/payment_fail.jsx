"use strict";
var React = require('react');
var request = require('superagent');

var Payment = React.createClass({
    getInitialState: function () {
        return {
            summary: ''
        };
    },
    componentDidMount: function () {
        var that = this;
        request
                .get('/dist/api/payment_fail.json')
                .type('json')
                .end(function (err, res) {
                    that.setState({
                        summary: res.body
                    });
                });

    },
    render: function () {
        return (
                <section role="main" className="b-content">
                    <div className="row">
                        <div className="small-12 columns">
                            <div className="b-card-payment">
                                <h1>Связь банк</h1>

                                <form>
                                    <div className="b-card-payment__details b-card-payment__details--error">
                                        <p>{this.state.summary.response}</p>
                                    </div>
                                    <div className="b-card-payment__amount b-card-payment__amount--error text-center">
                                        <img
                                                src="/src/images/logo.svg" alt="Логотип Почты России"
                                                title="Логотип Почты России"
                                                width="100" height="50" className="logo"/>

                                        <h2 className="error"><i className="icon-shopping_cart_delete"></i>Оплата не
                                            прошла</h2>

                                        <p className="b-card-payment__amount__order-number">Номер заказа: {this.state.summary.id}</p><a
                                            className="btn btn__primary btn--expand">Оплатить другой картой</a><a
                                            href="#"
                                            className="return">Вернуться
                                        на сайт</a>
                                    </div>
                                </form>
                                <div className="b-payment-systems">
                                    <ul className="left">
                                        <li><img src="/src/images/visa.svg"/></li>
                                        <li><img src="/src/images/visaelectron.svg"/></li>
                                        <li><img src="/src/images/masterCard.svg"/></li>
                                        <li><img src="/src/images/maestro.svg"/></li>
                                    </ul>
                                    <ul className="right">
                                        <li><img src="/src/images/pci.png"/></li>
                                        <li><img src="/src/images/vermedByVisa.svg"/></li>
                                        <li><img src="/src/images/masterCardSecureCode.svg"/></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        );
    }
});

module.exports = Payment;