"use strict";
var React = require('react');

var Banner = React.createClass({
    render: function () {
        return (
                <div className={this.props.element.noCover==="true"?"b-banner-publisher b-banner-publisher--cover-no b-banner-publisher__overlay--"+this.props.element.colorClassName:"b-banner-publisher b-banner-publisher__overlay--"+this.props.element.colorClassName}>
                    <div className={this.props.element.colorClassName?"b-banner-publisher__overlay b-banner-publisher__overlay--"+this.props.element.colorClassName:""}></div>
                    <img src={this.props.element.bannerPic} />
                    <div className="row">
                        <div className="small-7 columns">
                            <h1>{this.props.element.title}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="small-6 columns">
                            <p>{this.props.element.introtext}</p>

                            <p>{this.props.element.url}</p>
                        </div>
                    </div>
                </div>
        );
    }
});

module.exports = Banner;