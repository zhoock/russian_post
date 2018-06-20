"use strict";
var React = require('react');
var SubscribesItems = require('./smart-subscribesItems.jsx');

var PubHouse = React.createClass({
    render: function () {
        return (
                <div>
                    <h1 className="personal-area">Мои подписки</h1>

                    <div className="row">
                        <div className="small-12 columns">
                            <section className="b-results b-my-subscription">
                                <SubscribesItems elements={this.props.elements}/>
                            </section>
                        </div>
                    </div>
                </div>
        );
    }
});

module.exports = PubHouse;