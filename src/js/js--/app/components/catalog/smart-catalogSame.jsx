"use strict";
var React = require('react');
var request = require('superagent');

var CatalogItem3c_new = require('./app-catalogitem3c.jsx');

var SameItems = React.createClass({
    getInitialState: function () {
        return {
            seems: '',
            seems_count: ''
        };
    },
    componentDidMount: function () {
        var that = this;
        request
                .get(this.props.elements)
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
    },
    render: function () {
        var seems = this.state.seems;
        var seems_count = this.state.seems_count;

        return (
                <section className="b-seems">
                    <div className="row">
                        <div className="small-10 columns">
                            <h2>{this.props.title}</h2>
                        </div>
                        <div className="small-2 columns">
                            <div className="text-right"><a href={this.props.moreUrl} className="more">Ещё {seems_count}</a><i className="icon-More"></i></div>
                        </div>
                    </div>
                    <div className="row">
                        {seems}
                    </div>
                </section>
        );
    }
});

module.exports = SameItems;