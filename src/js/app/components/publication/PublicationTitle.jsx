var React = require('react');

var PublicationTitle = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="small-10 small-centered columns">
                    <h1>{this.props.title}</h1>

                    <p className="b-subscription__description"
                       dangerouslySetInnerHTML={{__html: this.props.annotation || null}}></p>

                    <p className="b-subscription__info"
                       dangerouslySetInnerHTML={{__html: this.props.description || null}}></p>
                </div>
            </div>
        );
    }
});

module.exports = PublicationTitle;