var React = require('react');

var ModalHeader = React.createClass({
    render: function() {
        return (
            <div className="row small-collapse">
                <div className="small-12 columns">
                    <div className="b-subscription__heading b-subscription--shadow text-center">
                        <img src={this.props.cover} className="b-subscription__photo"/>

                        <div className="b-subscription__type">
                            <i className="icon-book" />
                            {this.props.type}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ModalHeader;