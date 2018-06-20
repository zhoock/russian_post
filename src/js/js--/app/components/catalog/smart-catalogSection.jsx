"use strict";
var React = require('react');
var request = require('superagent');
var CatalogItem = require('./app-catalogitem-short.jsx');
var LoadMore = require('./smart-loadMore.jsx');

var CatalogSection = React.createClass({
    getInitialState: function () {
        return {
            element: {},
            itemsList: ''
        };
    },
    loadMore: function (e) {
        //p.s. сработает единожды, т.к. идентичные ID будут подгружаться
        var that = this;
        var $parent = $(e.target).parent();
        $parent.addClass('active');
        e.preventDefault();
        request
                .get('/dist/api/themes_new.json')
                .type('json')
                .end(function (err, res) {
                    var itemsList = _.map(res.body.items, function (item) {
                        return <CatalogItem hidden="true" key={item.id} item={item}/>;
                    });

                    var tmpState = that.state.itemsList.slice();
                    _.map(itemsList, function (item) {
                        tmpState.push(item);
                    });

                    $.fn.fade_card = function (ops) {
                        var $elem = this;
                        var res = $.extend({ delay: 50, speed: 50 }, ops);
                        for (var i=0, pause=0, l=$elem.length; i<l; i++, pause+=res.delay) {
                            $elem.eq(i).delay(pause).fadeIn(res.speed);
                        }
                        return $elem;
                    };

                    setTimeout(function () {
                        $parent.removeClass('active');
                        $('.js-loadmoreanimation').fade_card();
                    },1000);

                    that.setState({itemsList: tmpState});
                });
    },
    componentDidMount: function () {
        console.log('asd');
        var that = this;
        request
                .get('/dist/api/themes.json')
                .type('json')
                .end(function (err, res) {
                    var itemsList = _.map(res.body.items, function (item) {
                        return <CatalogItem key={item.id} item={item}/>;
                    });
                    that.setState({
                        element: res.body.element,
                        itemsList: itemsList
                    });
                });
    },
    render: function () {
        return (

                <section className="b-theme">
                    <div className="row">
                        <div className="small-12 columns">
                            <h2>{this.state.element.title}</h2>
                        </div>
                    </div>
                    <div className="row">
                        {this.state.itemsList}
                    </div>

                    <LoadMore handle={this.loadMore}/>
                </section>
        );
    }
});

module.exports = CatalogSection;