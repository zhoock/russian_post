"use strict";
var React = require('react');

var Publisher = React.createClass({
    render: function() {
        return (
            <div className="b-publishing-house b-publisher">
                <a href="javascript:void(0);" style={{backgroundColor: this.props.color}}>
                    <p className="b-publishing-house__heading b-publishing-house__heading--tt">издательство</p>
                    {this.props.logo && <img src={this.props.logo} className="logo"/>}

                    <div className="b-publishing-house__logs">
                        {null}
                    </div>

                    <p className="b-publishing-house__title">{this.props.title}</p>

                    <div className="b-publishing-house__show">
                        <i className="icon-show" />
                        <span>Показать</span>
                    </div>
                </a>
            </div>
        );
    }
});

module.exports = Publisher;