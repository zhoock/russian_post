"use strict";
var React = require('react');
var SearchResultsRow = require('./app-search-result-row.jsx');

var SearchResults = React.createClass({
    render: function() {
        var rows = _.map(this.props.items, function(item) {
            return <SearchResultsRow item={item} />;
        });
        return (
                <div>
                    {rows}
                    <div className="row small-collapse">
                        <div className="small-12 columns">
                            <div className="text-center"><a href="#" className="show-all">Показать все</a>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
});

module.exports = SearchResults;