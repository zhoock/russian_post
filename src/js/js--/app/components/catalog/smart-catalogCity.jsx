"use strict";
var React = require('react');
var request = require('superagent');

var CatalogitemCity_news = require('./app-catalogitemCity-new.jsx');

var CityCatalog = React.createClass({
    getInitialState: function () {
        return {
            press_city: '',
            press_city_count: ''
        };
    },
    componentDidMount: function () {
        var that = this;
        request
                .get(this.props.elements)
                .type('json')
                .end(function (err, res) {
                    var press_city = _.map(res.body.items, function (item) {
                        return <CatalogitemCity_news key={item.id} item={item}/>;
                    });
                    that.setState({
                        press_city: press_city,
                        press_city_count: res.body.count
                    });
                });
    },
    render: function () {
        var press_city = this.state.press_city;
        var press_city_count = this.state.press_city_count;

        return (
                <section className="b-press-city">
                    <div className="row">
                        <div className="small-10 columns">
                            <h2>{this.props.title}</h2>
                        </div>
                        <div className="small-2 columns">
                            <div className="text-right"><a href={this.props.moreUtl} className="more">Ещё {press_city_count}</a><i className="icon-More"></i></div>
                        </div>
                    </div>
                    <div className="row">
                        {press_city}
                    </div>
                </section>
        );
    }
});

module.exports = CityCatalog;