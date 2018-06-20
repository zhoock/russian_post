"use strict";
var React = require('react');
var request = require('superagent');
var SameItems = require('./app-sameitems.jsx');
var Ranges = require('./app-ranges.jsx');
var SelectedRanges = require('./app-selectedranges.jsx');

var CatalogDetail = React.createClass({
    getInitialState: function () {
        return {
            item: '',
            same_items: ''
        };
    },
    componentDidMount: function () {
        var that = this;
        request
                .get('/dist/api/catalog_item.json')
                .type('json')
                .end(function (err, res) {
                    var same_items = _.map(res.body.same_items, function (item) {
                        return <SameItems centered="true" key={item.id} item={item}/>;
                    });
                    var ranges = _.map(res.body.item.periods, function (item) {
                        return <Ranges key={item.id} item={item}/>;
                    });
                    that.setState({
                        item: res.body.item,
                        same_items: same_items,
                        selectedRanges: '',
                        ranges: ranges
                    });
                });
    },
    selectRange: function (e) {
        var $this = $(e.target),
                $handle;

        if ($this.hasClass('handle')) {
            $handle = $this;
        }
        else if ($this.parent().hasClass('handle')) {
            $handle = $this.parent();
        }
        else {
            return false;
        }

        $handle.toggleClass('active');

        var selected = [];
        $('#range_selector .jswrap_year').each(function (v, k) {
            var a = $(k).find('.active');
            if (a.length > 0) {
                var t_ = [];
                a.each(function (v, k) {
                    console.log($(k));
                    t_.push($(k).text());
                });


                selected.push({
                    "title": $(k).data('title'),
                    "text": t_.join(' ')
                });
            }
        });

        var selectedRanges = _.map(selected, function (item) {
            return <SelectedRanges key={item.id} item={item}/>;
        });
        this.setState({
            selectedRanges: selectedRanges
        });
    },
    handle_onChange: function (e) {
        var $this = $(e.target);
        $this.parent().toggleClass('b-subscription-period--focus');
        $('#range_selector').fadeToggle();

        //TODO send AJAX search
        e.preventDefault();
    },
    customSelect: function (e) {
        var $this = $(e.target);
        $this.parent().toggleClass('b-custom-select—-focus');
        $('.js-custom-select-values').fadeToggle();

        e.preventDefault();
    },
    customSelectChoose: function (e) {
        var $this = $(e.target);

        if ($this.hasClass('handle')) {
            var c_value = $this.text();
            $('.js-custom-select-values .b-custom-select__suggest__element--selected').removeClass('b-custom-select__suggest__element--selected');
            $this.addClass('b-custom-select__suggest__element--selected');
            $('.js-custom-select-value').text(c_value);
            $('.js-custom-select-values').fadeOut();
        }
    },
    closeModal: function () {
        $('.js-modal__close').fadeOut(function () {
            $(this).removeClass('open');
        });
        $('.js-modal-overlay').fadeOut(function () {
            $(this).removeClass('open');
        });
    },
    render: function () {
        if (this.state.item) {
            return (
                    <div>
                        <i className="icon-region_pop_close js-modal__close open"
                           onClick={this.closeModal.bind(this)}></i>

                        <div className="b-modal-overlay js-modal-overlay open">
                            <div className="modal_closer" onClick={this.closeModal.bind(this)}></div>
                            <div className="b-modal b-modal-effect-1">
                                <section className="b-modal-content b-subscription">
                                    <div className="row small-collapse">
                                        <div className="small-12 columns">
                                            <div className="b-subscription__heading b-subscription--shadow text-center">
                                                <img src={this.state.item.img1} className="b-subscription__photo"/>

                                                <div className="b-subscription__type">{this.state.item.productType}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="small-10 small-centered columns">
                                            <h1>{this.state.item.title}</h1>

                                            <p className="b-subscription__description"
                                               dangerouslySetInnerHTML={{__html: this.state.item.description}}></p>

                                            <p className="b-subscription__info"
                                               dangerouslySetInnerHTML={{__html: this.state.item.caption}}></p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="small-10 small-centered columns">
                                            <div className="b-subscription__period">
                                                <div dangerouslySetInnerHTML={{__html: this.state.item.prices[0].title}}></div>
                                                <div className="b-subscription__price">{this.state.item.prices[0].price} ₽</div>
                                            </div>

                                            <div className="b-subscription__period">
                                                <div dangerouslySetInnerHTML={{__html: this.state.item.prices[1].title}}></div>
                                                <div className="discount">{this.state.item.prices[1].discount}</div>

                                                <div className="b-subscription__price">{this.state.item.prices[1].price} ₽</div>
                                            </div>
                                            <div className="b-subscription__period">
                                                <div dangerouslySetInnerHTML={{__html: this.state.item.prices[2].title}}></div>

                                                <div className="discount">{this.state.item.prices[2].discount}</div>

                                                <div className="b-subscription__price">{this.state.item.prices[2].price} ₽ </div>
                                            </div>
                                            <div className="b-subscription__period">
                                                <div1>год,</div1>
                                                <div>6 выпусков</div>
                                                <div className="discount">скидка 40%</div>
                                                <div className="b-subscription__price">1250 ₽</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="b-card">
                                        <form>
                                            <div className="row">
                                                <div className="small-11 columns small-centered">
                                                    <div className="b-card__form-elements">
                                                        <label for="name">Период подписки</label>

                                                        <div className="b-subscription-period">
                                                            <div className="b-choose-periods"
                                                                 onClick={this.handle_onChange.bind(this)}>
                                                                <div className="wrapper-periods">
                                                                    {this.state.selectedRanges}
                                                                </div>
                                                            </div>
                                                            <div className="b-dropdown" id="range_selector"
                                                                 onClick={this.selectRange.bind(this)}>
                                                                {this.state.ranges}
                                                            </div>
                                                        </div>
                                                        <label for="name">Доставка</label>

                                                        <div className="b-custom-select">
                                                            <div className="b-custom-select__value js-custom-select-value"
                                                                 onClick={this.customSelect.bind(this)}>До
                                                                адресата
                                                            </div>
                                                            <input readonly="readonly" value="До адресата"
                                                                   type="text"/>

                                                            <div className="b-custom-select__suggest-wrapper js-custom-select-values"
                                                                 onClick={this.customSelectChoose.bind(this)}>
                                                                <div className="b-custom-select__suggest">
                                                                    <div className="handle b-custom-select__suggest__element b-custom-select__suggest__element--selected">
                                                                        До адресата
                                                                    </div>
                                                                    <div className="handle b-custom-select__suggest__element">
                                                                        До адресата2
                                                                    </div>
                                                                    <div className="handle b-custom-select__suggest__element">
                                                                        До адресата3
                                                                    </div>
                                                                    <div className="handle b-custom-select__suggest__element">
                                                                        До адресата4
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <label for="address">Адрес (населённый пункт, улица, дом, квартира)</label>

                                                        <div className="b-custom-address">
                                                            <input id="address" type="text"
                                                                   placeholder="Москва, Маросейка 3/16"/>

                                                        </div>

                                                        <label for="fio">ФИО получателя</label>
                                                        <div className="b-custom-input">
                                                            <input id="fio" type="text" placeholder="Супрунов Константин Николаевич" />
                                                        </div>
                                                    </div>
                                                    <div className="text-center"><a className="btn btn__primary btn--cart btn--expand"><i className="icon-shoppingcart"></i>В корзину<span className="price">932,18 &#8381;</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    <section
                                            className="b-recently-viewed b-recently-viewed--buy-with b-recently-viewed--grey">
                                        <div className="row">
                                            <div className="small-11 small-centered columns">
                                                <h2>Покупают вместе</h2>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="small-11 small-centered columns">
                                                <div className="row">
                                                    {this.state.same_items}
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                            </div>
                        </div>
                    </div>
            );
        }
        else {
            return (<div></div>);
        }
    }
});

module.exports = CatalogDetail;