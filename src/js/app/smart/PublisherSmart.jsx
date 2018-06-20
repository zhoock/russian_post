var React = require('react');
var Publisher = require('../components/content/Publisher.jsx');
var _ = require('underscore');

var PublisherSmart = React.createClass({
    render: function() {
        var publisher = this.props.publisher;
        console.log(publisher)
        return (
            <Publisher color={publisher.get('color')}
                       title={publisher.get('title')}
                       logo={publisher.hasLogo() && publisher.getLogo()} />
        );
    }
});

module.exports = PublisherSmart;