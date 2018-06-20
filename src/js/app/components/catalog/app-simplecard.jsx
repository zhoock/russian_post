"use strict";
var React = require('react');
var Link = require('react-router-component').Link;


var SimpleCard = React.createClass({
    render: function() {
        return (
                <div className="small-2 columns end">
                    <div className="text-center">
                        <Link href={'/item/' + this.props.item.section + '/'+this.props.item.id}>
                        <figure><img src={this.props.item.img} />
                            <figcaption>
                                {this.props.item.title}
                            </figcaption>
                        </figure>
                        </Link>
                    </div>
                </div>
        );
    }
});

module.exports = SimpleCard;