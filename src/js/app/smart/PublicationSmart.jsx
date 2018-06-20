var React = require('react');
var Publication = require('../components/publication/Publication.jsx');
var _ = require('underscore');

var PublicationSmart = React.createClass({
    render: function() {
        var item = this.props.item;
        return (
            <div className="small-9 columns">
                <Publication cover={item.getCoverURL()}
                             type={item.getTypeRU()}
                             title={item.get('title')}
                             annotation={item.get('annotation')}
                             description={item.getDescription()}
                             prices={item.getPricesByRegion(null)} />
            </div>
        );
    }
});

module.exports = PublicationSmart;