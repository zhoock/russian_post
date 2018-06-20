"use strict";

var React = require('react/addons');
var Publication = require('../models/Publication');
var Elements = require('../collections/Elements');
var CatalogHeader = require('../components/catalog/CatalogHeader.jsx');
var CatalogSection = require('../components/catalog/CatalogSection.jsx');
// var Recomended = require('../components/content/app-recomended');


var Catalog = React.createClass({
    getInitialState: function() {
        return {
            publication: new Publication(),
            elements: new Elements()
        };
    },
    render: function(){
        return (
            <div>
                <section className="b-new-popular-magazines">
                    <CatalogHeader publication={this.props.publication} />
                    <CatalogSection elements={this.props.elements} inRow={this.props.inRow} />
                </section>
            </div>
        );
    }
});

module.exports = Catalog;