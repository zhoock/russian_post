"use strict";
var React = require('react');
var request = require('superagent');
var CategoriesItem = require('./app-categoreslist-item.jsx');
var AlfabetMenu = require('./app-alfabetMenu.jsx');

var CategoresList = React.createClass({
    getInitialState: function () {
        return {
            list: ''
        };
    },
    componentDidMount: function () {
        var that = this;
        request
                .get('/dist/api/categories.json')
                .type('json')
                .end(function (err, res) {
                    var categoriesItem = _.map(res.body.items, function (item) {
                        return <CategoriesItem key={item.id} item={item}/>;
                    });
                    that.setState({
                        list: categoriesItem
                    });

                    $('.b-categories__item__letter')
                            .waypoint(function (direction) {
                                var $links = $('.js-section a[href="#' + this.id + '"]');
                                $('.js-section a.active').removeClass('active');
                                $links.addClass('active', direction === 'down');
                                //$links.removeClass('active', direction === 'up');

                                if (direction === 'up' && this.id === 1) {
                                    $(".js-section").removeClass("stuck");
                                }
                                if ($('.b-categories__item__letter').offset().top - $(window).scrollTop() < 0) {
                                    $(".js-section").addClass("stuck");
                                }
                                else {
                                    $(".js-section").removeClass("stuck");
                                }
                            }, {offset: '0'})
                            .waypoint(function (direction) {

                                var $links = $('.js-section a[href="#' + this.id + '"]');
                                $('.js-section a.active').removeClass('active');
                                $links.addClass('active', direction === 'up');
                                if (this.id === "1" && direction === 'up') {
                                    $(".js-section").removeClass("stuck");
                                }
                            }, {
                                offset: function () {
                                    return -$(this).height();
                                }
                            });


                });

    },
    render: function () {
        return (
                <div className="row">
                    <div className="small-11 columns">
                        <section className="b-categories">
                            {this.state.list}
                        </section>
                    </div>

                    <AlfabetMenu />
                </div>
        );
    }
});

module.exports = CategoresList;