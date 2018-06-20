var React = require('react');
var Elements = require('../../collections/Elements');
var Item = require('./app-catalogitem-new.jsx');
var Complect = require('./Complect.jsx');
var _ = require('underscore');

var CatalogSection = React.createClass({
    getInitialState: function() {
        return {
            elements: new Elements
        };
    },
    render: function(){
        var elements = this.props.elements || this.state.elements;
        return (
            <div>
                {elements.map((sub_el) => {
                    var cover = sub_el.getCoverURL();
                    var summary = sub_el.getSummaryByRegion(null);
                    var CustomComponent = _.first(_.compact([
                        sub_el.isSet() && Complect,
                        Item
                    ]));
                    var title = sub_el.get('title');
                    return (
                        <CustomComponent item={{cost: sub_el.getPriceByRegion(null),
                                                img: cover,
                                                summary: summary,
                                                title: title,
                                                publicationCode: sub_el.get('publicationCode')}}
                             columns={this.props.columns}
                             placeholder={sub_el.isPlaceholder()}
                             model={sub_el}
                             onClick={this.props.onClick} />
                    );
                })}
            </div>
        );
    }
});

module.exports = CatalogSection;