var React = require('react');

var PublicationHeader = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="small-12 columns">
                    <div className="b-subscription__heading b-subscription--shadow text-center">
                        <nav className="b-nav">
                            <div className="row">
                                <div className="small-8 small-centered columns">
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0);" className="text-center active">
                                                <img src={this.props.cover} className="b-subscription__photo" />
                                                <div className="b-subscription__type" >
                                                    <i className="icon-book" />
                                                    <span>{this.props.type}</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = PublicationHeader;