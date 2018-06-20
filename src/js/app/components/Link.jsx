var React = require('react');
var _ = require('underscore');

var Link = React.createClass({
    onClick: function(e) {
        var old_url = window.location.href;
        if(this.props.pushstate) {
            e.preventDefault();
            var history = window.history;
            if('pushState' in history) {
                let { state, href, title, hash } = this.props;
                history.pushState(state || null, title || null, href);
            } else {

            }
        }
        if(_.isFunction(this.props.onClick)) {
            return this.props.onClick(e, old_url);
        }
    },
    render: function() {
        return (
            <a href={this.props.href} onClick={this.onClick}>{this.props.children}</a>
        );
    }
});

module.exports = Link;