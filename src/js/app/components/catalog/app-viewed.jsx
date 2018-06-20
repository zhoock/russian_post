"use strict";
var React = require('react');

var CatalogItem = React.createClass({
    render: function () {
        return (
                <div className="small-2 columns end">
                        <a href={'/items/'+this.props.item.id}>
                        <figure><img src={this.props.item.img}/>
                            <figcaption>{this.props.item.title}</figcaption>
                        </figure>
                        </a>
                </div>
        );
    }
});

module.exports = CatalogItem;