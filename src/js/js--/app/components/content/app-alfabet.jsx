"use strict";
var React = require('react');
var AlfabetList = require('./app-alfabetlist.jsx');
var request = require('superagent');

var Alfabet = React.createClass({
    getInitialState: function () {
        return {
            alfabetList: ''
        };
    },
    componentDidMount: function () {
        var that = this;
        request
                .get('/dist/api/alfbet.json')
                .type('json')
                .end(function (err, res) {
                    var alfabetList = _.map(res.body.items, function (item) {
                        return <AlfabetList key={item.id} item={item}/>;
                    });
                    that.setState({
                        alfabetList: alfabetList
                    });
                });

    },
    render: function () {
        return (
                <div className="row">
                    <div className="small-12 columns">
                        <section className="b-results">
                            {this.state.alfabetList}
                        </section>
                    </div>
                </div>
        );
    }
});

module.exports = Alfabet;