"use strict";
var React = require('react');
var TemplateShort = require('./app-template-short.jsx');
var Subscribes = require('./content/smart-subscribes.jsx');

var MySubscribtion = React.createClass({
    render: function () {
        return (
                <TemplateShort clear="true">
                    <section role="main" className="b-content">
                        <nav className="b-nav b-nav--cart">
                            <div className="row">
                                <div className="small-12 columns">
                                    <ul>
                                        <li><i className="icon-back"></i><a href="#">В каталог изданий</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                        <Subscribes elements="/dist/api/my-subscr.json"/>
                    </section>

                </TemplateShort>
        );
    }
});

module.exports = MySubscribtion;