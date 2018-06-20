"use strict";
var React = require('react');
var request = require('superagent');
var SubscribeElement = require('./smart-subscribeElement.jsx');
var EmptySubscribe = require('./smart-subscribeEmpty.jsx');

var PubHouse = React.createClass({
    getInitialState: function () {
        return {
            elements: ''
        };
    },
    componentDidMount: function () {
        var that = this;
        console.log(this.props.elements);
        request
                .get(this.props.elements)
                .type('json')
                .end(function (err, res) {
                    var itemsList;
                    if (_.isEmpty(res.body.items)) {
                        itemsList = <EmptySubscribe />;
                    }
                    else {
                        itemsList = _.map(res.body.items, function (item) {
                            return <SubscribeElement key={item.id} item={item}/>;
                        });
                    }
                    that.setState({
                        elements: itemsList
                    });
                });
    },
    render: function () {
        return (
                <div>
                    {this.state.elements}
                </div>
        );
    }
});

module.exports = PubHouse;