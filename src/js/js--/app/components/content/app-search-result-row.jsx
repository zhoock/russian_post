"use strict";
var React = require('react');

var SearchResultsRow = React.createClass({
    render: function() {
        var rows_titles = _.map(this.props.item.items, function(item){
            return <div className="b-search__dropdown__title">{item.title}</div>;
        });
        var rows_pics = _.map(this.props.item.items, function(item){
            return <div className="b-search__dropdown__cover"><img src={item.img} /></div>;
        });
        return (
                <div className="row">
                    <div className="small-3 columns">
                        <div className="b-search__dropdown__magazines">{this.props.item.title}</div>
                    </div>
                    <div className="small-7 columns">
                        {rows_titles}
                    </div>
                    <div className="small-2 columns">
                        {rows_pics}
                    </div>
                </div>
        );
    }
});

module.exports = SearchResultsRow;