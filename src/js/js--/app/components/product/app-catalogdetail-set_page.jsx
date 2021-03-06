"use strict";
var React = require('react');
var request = require('superagent');
var SameItems = require('./app-sameitems.jsx');
var Ranges = require('./app-ranges.jsx');
var SetInfo = require('./smart-setInfo.jsx');
var SetItems = require('./smart-setItems.jsx');
var PeriodsInfo = require('./smart-periodsInfo.jsx');
var SelectedRanges = require('./app-selectedranges.jsx');
var SubscribeForm = require('../content/smart-subscribeForm.jsx');

var CatalogDetail = React.createClass({
    getInitialState: function () {
        return {
            item: '',
            same_items: '',
            setInfo: '',
            periodsInfo: '',
            setItems: ''
        };
    },
    componentDidMount: function () {
        var that = this;
        request
                .get('/dist/api/catalog_item-set.json')
                .type('json')
                .end(function (err, res) {
                    var same_items = _.map(res.body.same_items, function (item) {
                        return <SameItems className="small-2 columns end" key={item.id} item={item}/>;
                    });
                    var ranges = _.map(res.body.item.periods, function (item) {
                        return <Ranges key={item.id} item={item}/>;
                    });

                    var setInfo = _.map(res.body.item.setInfo, function (item) {
                        return <SetInfo onclick={that.stateOnclick} key={item.id} item={item}/>;
                    });

                    var periodsInfo = _.map(res.body.item.periodsInfo, function (item) {
                        return <PeriodsInfo key={item.id} item={item}/>;
                    });

                    var setItems = _.map(res.body.item.setItems, function (item) {
                        return <SetItems key={item.id} item={item}/>;
                    });

                    that.setState({
                        item: res.body.item,
                        same_items: same_items,
                        selectedRanges: '',
                        ranges: ranges,
                        setInfo: setInfo,
                        periodsInfo: periodsInfo,
                        setItems: setItems
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
    stateOnclick: function (e) {
        var $this = $(e.target);
        var $parent = $this.parents('.b-subscription__journal');
        $parent.find('.b-subscription__description').slideToggle();
        $parent.toggleClass('b-subscription__journal--show');
    },
    handle_onChange: function (e) {
        var $this = $(e.target);
        $this.parent().toggleClass('b-subscription-period--focus');
        $('#range_selector').fadeToggle();

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
                        <div className="row">
                            <div className="small-9 columns">
                                <section className="b-subscription b-subscription--shadow">
                                    <div className="row">
                                        <div className="small-12 columns">
                                            <div className="b-subscription__heading b-subscription__heading--set b-subscription--shadow text-center">
                                                <img src={this.state.item.img1} className="b-subscription__photo"/>
                                                <img src={this.state.item.img2} className="b-subscription__photo"/>
                                                <img src={this.state.item.img3} className="b-subscription__photo"/>

                                                <div className="b-subscription__type">{this.state.item.productType}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {this.state.setInfo}

                                    <div className="b-subscription__periods">
                                        <div className="row">
                                            <div className="small-11 small-centered columns">
                                                {this.state.periodsInfo}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="b-card">
                                        <SubscribeForm />
                                    </div>
                                </section>
                            </div>
                            <div className="small-3 columns">
                                <aside className="b-included b-subscription b-included--popup">
                                    <h1>Издания из&nbsp;комплекта</h1>

                                    {this.state.setItems}
                                </aside>
                            </div>
                        </div>
                        <section
                                className="b-recently-viewed">
                            <div className="row">
                                <div className="small-12 small-centered columns">
                                    <h2>Похожие идания</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="small-12 small-centered columns">
                                    <div className="row">
                                        {this.state.same_items}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
            );
        }
        else {
            return (<div></div>);
        }
    }
});

module.exports = CatalogDetail;
