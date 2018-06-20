"use strict";
var React = require('react');
var RowItemRow = require('./app-search-row.jsx');
var request = require('superagent');

var CatalogItem = React.createClass({
    getInitialState: function () {
        return {
            element: ''
        };
    },
    componentDidMount: function () {
        var that = this;
        request
                .get(that.props.elements)
                .type('json')
                .end(function (err, res) {
                    var rows = _.map(res.body.items, function (item) {
                        return <RowItemRow key={item.id} item={item}/>;
                    });
                    that.setState({
                        rows: rows
                    });
                });
    },
    render: function () {
        return (
                <div className="row">
                    <div className="small-12 columns">
                        <section className="b-results">
                            {this.state.rows}

                            <div className="row">
                                <div className="small-12 columns">
                                    <div className="b-show-more"><a href="#">Показать ещё</a></div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
        );
    }
});

module.exports = CatalogItem;