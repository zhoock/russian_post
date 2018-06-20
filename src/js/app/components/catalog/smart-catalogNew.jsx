"use strict";
var React = require('react');
var request = require('superagent');

var CatalogItem_new = require('./app-catalogitem-new.jsx');
var Recomended = require('../content/app-recomended.jsx');

var CatalogNewList = React.createClass({
    getInitialState: function () {
        return {
            newest: '',
            newest_count: ''
        };
    },
    componentDidMount: function () {
        var that = this;
        request
                .get(this.props.elements)
                .type('json')
                .end(function (err, res) {
                    var newest_ = _.map(res.body.items, function (item) {
                        return <CatalogItem_new key={item.id} item={item}/>;
                    });
                    that.setState({
                        newest: newest_,
                        newest_count: res.body.count
                    });
                });
    },
    render: function () {
        var newest = this.state.newest;
        var newest_count = this.state.newest_count;

        return (
                <section className="b-new-popular-magazines">
                    <div className="row">
                        <div className="small-10 columns">
                            <h2>{this.props.title}</h2>
                        </div>
                        <div className="small-2 columns">
                            <div className="text-right"><a href={this.props.moreUrl} className="more">Ещё {newest_count}</a><i
                                    className="icon-More"></i></div>
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
        );
    }
});

module.exports = CatalogNewList;