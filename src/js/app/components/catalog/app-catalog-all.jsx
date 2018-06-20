"use strict";
var React = require('react');
var request = require('superagent');

var CatalogItem_new = require('./app-catalogitem-new.jsx');
var CatalogItem3c_new = require('./app-catalogitem3c.jsx');
var CatalogitemCity_news = require('./app-catalogitemCity-new.jsx');
var Viewed = require('./app-viewed.jsx');


var Recomended = require('../content/app-recomended.jsx');
var CatalogSet = require('./app-catalogset.jsx');


var CatalogAll = React.createClass({
    getInitialState: function () {
        return {
            newest: '',
            press_city: '',
            press_city_count: '',
            papers: '',
            seems: '',
            seems_count: '',
            viewed: '',
            viewed_count: '',
        };
    },
    componentDidMount: function () {
        var that = this;
        request
            .get('/dist/api/getnewest.json')
            .type('json')
            .end(function (err, res) {
                var newest_ = _.map(res.body.items, function (item) {
                    return <CatalogItem_new key={item.id} item={item} columns={3} />;
                });
                that.setState({
                    newest: newest_,
                    newest_count: res.body.count
                });
            });
        request
                .get('/dist/api/press_samara.json')
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
        request
                .get('/dist/api/gazet.json')
                .type('json')
                .end(function (err, res) {
                    var papers = _.map(res.body.items, function (item) {
                        return <CatalogItem3c_new key={item.id} item={item}/>;
                    });
                    that.setState({
                        papers: papers
                    });
                });
        request
                .get('/dist/api/seems.json')
                .type('json')
                .end(function (err, res) {
                    var newest_ = _.map(res.body.items, function (item) {
                        return <CatalogItem3c_new key={item.id} item={item}/>;
                    });
                    that.setState({
                        seems: newest_,
                        seems_count: res.body.count
                    });
                });
        request
                .get('/dist/api/recent_viewed.json')
                .type('json')
                .end(function (err, res) {
                    var newest_ = _.map(res.body.items, function (item) {
                        return <Viewed key={item.id} item={item}/>;
                    });
                    that.setState({
                        viewed: newest_,
                        viewed_count: res.body.count
                    });
                });
    },
    render: function () {
        var newest = this.state.newest;
        var newest_count = this.state.newest_count;
        var press_city = this.state.press_city;
        var press_city_count = this.state.press_city_count;
        var papers = this.state.papers;
        var seems = this.state.seems;
        var seems_count = this.state.seems_count;
        var viewed = this.state.viewed;
        var viewed_count = this.state.viewed_count;

        //var lastview = _.map(lastview_items.items, function (item) {
        //    item.section = 'lastview';
        //    return <SimpleCard key={item.id} item={item}/>
        //});
        return (
                <div>
                    <section className="b-new-popular-magazines">
                        <div className="row">
                            <div className="small-10 columns">
                                <h2>Новые и популярные журналы</h2>
                            </div>
                            <div className="small-2 columns">
                                <div className="text-right"><a className="more">Ещё {newest_count}</a><i className="icon-More"></i></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="small-9 columns">
                                <div className="row">
                                    {newest}
                                </div>
                            </div>
                            <div className="small-3 columns">
                                <Recomended />
                            </div>
                        </div>
                    </section>
                    <div className="row">
                        <CatalogSet />
                    </div>
                    <section className="b-press-city">
                        <div className="row">
                            <div className="small-10 columns">
                                <h2>Пресса Самары</h2>
                            </div>
                            <div className="small-2 columns">
                                <div className="text-right"><a className="more">Ещё {press_city_count}</a><i className="icon-More"></i></div>
                            </div>
                        </div>
                        <div className="row">
                            {press_city}
                        </div>
                    </section>
                    <section className="b-seems">
                        <div className="row">
                            <div className="small-10 columns">
                                <h2>Похоже на то, что вы выписываете</h2>
                            </div>
                            <div className="small-2 columns">
                                <div className="text-right"><a className="more">Ещё {seems_count}</a><i className="icon-More"></i></div>
                            </div>
                        </div>
                        <div className="row">
                            {seems}
                        </div>
                    </section>
                    <section className="b-newspaper">
                        <div className="row">
                            <div className="small-12 columns">
                                <h2>Газеты</h2>
                            </div>
                        </div>
                        <div className="row">
                            {papers}
                        </div>
                    </section>

                    <section className="b-recently-viewed">
                        <div className="row">
                            <div className="small-10 columns">
                                <h2>Вы недавно смотрели</h2>
                            </div>
                            <div className="small-2 columns">
                                <div className="text-right"><a className="more">Ещё {viewed_count}</a><i className="icon-More"></i></div>
                            </div>
                        </div>
                        <div className="row">
                            {viewed}
                        </div>
                    </section>
                </div>
        );
    }
});

module.exports = CatalogAll;