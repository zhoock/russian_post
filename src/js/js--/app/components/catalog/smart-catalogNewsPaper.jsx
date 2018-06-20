"use strict";
var React = require('react');
var request = require('superagent');

var CatalogItem3c_new = require('./app-catalogitem3c.jsx');

var NewspaperCatalog = React.createClass({
    getInitialState: function () {
        return {
            papers: ''
        };
    },
    componentDidMount: function () {
        var that = this;
        request
                .get(this.props.elements)
                .type('json')
                .end(function (err, res) {
                    var papers = _.map(res.body.items, function (item) {
                        return <CatalogItem3c_new key={item.id} item={item}/>;
                    });
                    that.setState({
                        papers: papers
                    });
                });
    },
    render: function () {
        var papers = this.state.papers;

        return (
                <section className="b-newspaper">
                    <div className="row">
                        <div className="small-12 columns">
                            <h2>{this.props.title}</h2>
                        </div>
                    </div>
                    <div className="row">
                        {papers}
                    </div>
                </section>
        );
    }
});

module.exports = NewspaperCatalog;