"use strict";
var React = require('react');
var request = require('superagent');
var CatalogItem = require('./catalog/app-catalogitem-short.jsx');
var TemplateShort = require('./app-template-short.jsx');
var Banner = require('./pub/banner.jsx');
var MostViewes = require('./catalog/smart-mostViews.jsx');

var PubHouse = React.createClass({
    headerClick: function() {
        $('#cabmenu').fadeToggle('fast');
        return false;
    },
    getInitialState: function () {
        return {
            element: {},
            itemsList: ''
        };
    },
    componentDidMount: function () {
        var that = this;
        var source = ['/dist/api/publishing-house.json','/dist/api/publishing-house-nocover.json'];
        request
                .get(source[Math.floor(Math.random() * (3 - 1) + 1)-1])
                .type('json')
                .end(function (err, res) {
                    var itemsList = _.map(res.body.items, function (item) {
                        return <CatalogItem key={item.id} item={item}/>;
                    });
                    that.setState({
                        element: res.body.pub,
                        itemsList: itemsList
                    });
                });
    },
    render: function() {
        return (
                <TemplateShort>

                    <Banner element={this.state.element} />

                    <div className="row">
                        <div className="small-12 columns">
                            <div className="row">
                                {this.state.itemsList}
                            </div>
                        </div>
                    </div>

                    <MostViewes elements="/dist/api/recent_viewed.json" title="Вы недавно смотрели" moreUrl="/more" />
                </TemplateShort>
        );
    }
});

module.exports = PubHouse;