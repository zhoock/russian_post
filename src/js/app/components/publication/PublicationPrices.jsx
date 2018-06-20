var React = require('react');
var _ = require('underscore');
var cn = require('classnames');

var PublicationPrices = React.createClass({
    render: function() {
        var prices = this.props.prices;
        return (
            <div className="row">
                {prices.map((price, i) => {
                    var columnClass = cn({
                        "small-3": true,
                        "columns": true,
                        "small-offset-1" : i === 0
                    });
                    return (
                        <div className={columnClass}>
                            <div className="b-subscription__min"
                                 dangerouslySetInnerHTML={{__html: price.getTitle()}} />

                            <div className="b-subscription__price"
                                 dangerouslySetInnerHTML={{__html: `${price.getPrice()} &#8381;`}} />
                        </div>
                    );
                })}
            </div>
        );
    }
});

module.exports = PublicationPrices;