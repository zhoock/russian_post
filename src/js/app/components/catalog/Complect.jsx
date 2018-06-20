var React = require('react/addons');
var cn = require('classnames');

var Complect = React.createClass({
    render: function() {
        return (
            <div className="small-6 columns end">
                <div className="b-block-magazine b-block-magazine--big">
                    <a href={'/items/'+this.props.item.id} className="js-trigger-modal">
                        <figure>
                            <div className="text-center">
                                <div className="b-block-magazine__together">комплект</div>
                                <div className="b-block-magazine__logs--package">
                                    &nbsp;
                                </div>
                                <figcaption>{this.props.item.title}</figcaption>
                                <div className="b-description">{this.props.item.summary}</div><span
                                className="b-price__book">
                                <span className="strike"></span>{this.props.item.cost} &#8381;</span>
                            </div>
                        </figure>
                    </a>
                </div>
            </div>
        );
        // {this.props.item.old_cost} &#8381;
    }
});

module.exports = Complect;