"use strict";
var React = require('react');
var request = require('superagent');

var Payment = React.createClass({
    getInitialState: function () {
        return {
            summary: ''
        };
    },
    cvcHelpToggle: function () {
        $('.js-ccv__dropdown').fadeToggle('fast');
    },
    customSelect: function(e) {
        var $this = $(e.target);
        $this.parent().toggleClass('b-custom-select—-focus');
        $this.parent().find('.js-custom-select-values').fadeToggle();

        e.preventDefault();
    },
    customSelectChoose: function(e) {
        var $this = $(e.target);

        if ($this.hasClass('handle')) {
            var c_value = $this.text();
            var $parent = $this.parents('.js-custom-select-values');
            var $uParent = $parent.parent();
            $parent.find('.b-custom-select__suggest__element--selected').removeClass('b-custom-select__suggest__element--selected');
            $this.addClass('b-custom-select__suggest__element--selected');
            $uParent.find('.js-custom-select-value').text(c_value);
            $parent.fadeOut();
        }
    },
    componentDidMount: function () {
        var that = this;
        request
                .get('/dist/api/payment.json')
                .type('json')
                .end(function (err, res) {
                    that.setState({
                        summary: res.body
                    });
                });

        $('.js-card-payment input').on('change keyup', function() {
            var err = [];
            $('.js-card-payment input').each(function(){
                if (!$(this).val()) {
                    err.push($(this).name);
                }
            });
            if (err.length === 0) {
                $('.js-btn-submit').removeClass('disabled').addClass('btn__primary');
            }
            else {
                $('.js-btn-submit').addClass('disabled').removeClass('btn__primary');
            }
        });
    },
    render: function () {
        return (
                <section role="main" className="b-content">
                    <div className="row">
                        <div className="small-12 columns">
                            <div className="b-card-payment">
                                <h1>Связь банк</h1>

                                <form className="js-card-payment">
                                    <div className="b-card-payment__details">
                                        <div className="row">
                                            <div className="small-12 columns">
                                                <label>Номер карты</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="small-12 columns">
                                                <div className="b-card-payment__details__number">
                                                    <input maxLength="4" type="text"/>
                                                    <input maxLength="4" type="text"/>
                                                    <input maxLength="4" type="text"/>
                                                    <input maxLength="4" type="text"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="small-12 columns">
                                                <label>Срок действия</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="small-12 columns">
                                                <div className="b-card-payment__details__validity">
                                                    <div className="b-custom-select">
                                                        <div className="b-custom-select__value js-custom-select-value" onClick={this.customSelect.bind(this)}>Месяц</div>
                                                        <input readonly="readonly" value="Месяц" type="text"/><i className="icon-Dropdown2"></i>

                                                        <div className="b-custom-select__suggest-wrapper js-custom-select-values" onClick={this.customSelectChoose.bind(this)}>
                                                            <div className="b-custom-select__suggest">
                                                                <div className="handle b-custom-select__suggest__element b-custom-select__suggest__element--selected">
                                                                    Янв
                                                                </div>
                                                                <div className="handle b-custom-select__suggest__element">
                                                                    Фев
                                                                </div>
                                                                <div className="handle b-custom-select__suggest__element">
                                                                    Мар
                                                                </div>
                                                                <div className="handle b-custom-select__suggest__element">
                                                                    Апр
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="b-custom-select b-custom-select--year">
                                                        <div className="b-custom-select__value js-custom-select-value" onClick={this.customSelect.bind(this)}>
                                                            Год
                                                        </div>
                                                        <input readonly="readonly" value="Год"
                                                               type="text"/><i
                                                            className="icon-Dropdown2"></i>

                                                        <div className="b-custom-select__suggest-wrapper js-custom-select-values" onClick={this.customSelectChoose.bind(this)}>
                                                            <div className="b-custom-select__suggest">
                                                                <div className="handle b-custom-select__suggest__element b-custom-select__suggest__element--selected">
                                                                    2015
                                                                </div>
                                                                <div className="handle b-custom-select__suggest__element">
                                                                    2016
                                                                </div>
                                                                <div className="handle b-custom-select__suggest__element">
                                                                    2017
                                                                </div>
                                                                <div className="handle b-custom-select__suggest__element">
                                                                    2018
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="b-label-ccv">
                                                        <label>CCV/CVC</label><i onClick={this.cvcHelpToggle} className="icon-Help"></i>

                                                        <div className="b-label-ccv__dropdown js-ccv__dropdown" style={{display: "none"}}>
                                                            <div className="text-center"><img
                                                                    src="/src/images/card.png"/></div>

                                                            <p>На обороте карты три последние цифры на полосе
                                                                с&nbsp;подписью</p>
                                                        </div>
                                                    </div>
                                                    <div className="b-input-ccv">
                                                        <input type="text"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="small-12 columns">
                                                <label>Имя на карте</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="small-12 columns">
                                                <div className="b-card-payment__details__name">
                                                    <input type="text"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="b-card-payment__amount text-center">
                                        <img src="/src/images/logo.svg"
                                             alt="Логотип Почты России"
                                             title="Логотип Почты России" width="100"
                                             height="50" className="logo"/>

                                        <h2>Вы оплачиваете подписку<br/>на cумму {this.state.summary.cost} рублей</h2>

                                        <p className="b-card-payment__amount__order-number">
                                            Номер заказа: {this.state.summary.id}</p><a
                                            className="btn btn--expand disabled js-btn-submit">Оплатить</a>
                                    </div>
                                </form>

                                <div className="b-payment-systems">
                                    <ul className="left">
                                        <li><img
                                                src="/src/images/visa.svg"/></li>
                                        <li><img
                                                src="/src/images/visaelectron.svg"/></li>
                                        <li><img
                                                src="/src/images/masterCard.svg"/></li>
                                        <li><img
                                                src="/src/images/maestro.svg"/></li>
                                    </ul>
                                    <ul className="right">
                                        <li><img
                                                src="/src/images/pci.png"/></li>
                                        <li><img
                                                src="/src/images/vermedByVisa.svg"/></li>
                                        <li><img
                                                src="/src/images/masterCardSecureCode.svg"/></li>
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