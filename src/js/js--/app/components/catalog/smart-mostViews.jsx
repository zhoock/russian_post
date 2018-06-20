"use strict";
var React = require('react');
var request = require('superagent');

var Viewed = require('./app-viewed.jsx');

var SameItems = React.createClass({
    getInitialState: function () {
        return {
            viewed: '',
            viewed_count: ''
        };
    },
    componentDidMount: function () {
        var that = this;
        request
                .get(this.props.elements)
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
        var viewed = this.state.viewed;
        var viewed_count = this.state.viewed_count;

        var moreLink = '';
        if (this.props.moreUrl) {
            moreLink = <div className="text-right"><a href={this.props.moreUrl} className="more">Ещё {viewed_count}</a><i className="icon-More"></i></div>;
        }

        return (
                <section className="b-recently-viewed">
                    <div className="row">
                        <div className="small-10 columns">
                            <h2>{this.props.title}</h2>
                        </div>
                        <div className="small-2 columns">
                            {moreLink}
                        </div>
                    </div>
                    <div className="row">
                        {viewed}
                    </div>
                </section>
        );
    }
});

module.exports = SameItems;