"use strict";
var React = require('react');

var SameItems = React.createClass({
    render: function () {
        return (
                <div className={this.props.className?this.props.className:"small-3 columns end"}>
                    <div className={this.props.centered==="true"?"text-center":""}>
                        <a href={'/items/'+this.props.item.id}>
                            <figure><img src={this.props.item.img}/>
                                <figcaption>{this.props.item.title}</figcaption>
                            </figure>
                        </a>
                    </div>
                </div>
        );
    }
});

module.exports = SameItems;