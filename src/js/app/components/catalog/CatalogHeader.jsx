"use strict";

var React = require('react/addons');

var CatalogHeader =  React.createClass({
    getInitialState: function() {
        return {
            newest_count: ''
        };
    },
    render: function() {
        var publication = this.props.publication;
        var newest_count = this.state.newest_count;
        return (
            <div className="row">
                <div className="small-10 columns">
                    <h2>{publication.get('name')}</h2>
                </div>
                <div className="small-2 columns">
                    <div className="text-right"><a className="more">Ещё {newest_count}</a><i className="icon-More"></i></div>
                </div>
            </div>
        );
    }
});

module.exports = CatalogHeader;