"use strict";

var React = require('react/addons');
var PublicationHeader = require('./PublicationHeader.jsx');
var PublicationTitle = require('./PublicationTitle.jsx');
var PublicationPrices = require('./PublicationPrices.jsx');

var Publication = React.createClass({
    render: function() {
        return (
            <section className="b-subscription b-subscription--shadow">
                <PublicationHeader {...this.props} />

                <PublicationTitle {...this.props} />

                <PublicationPrices {...this.props} />
            </section>
        );
    }
});

module.exports = Publication;