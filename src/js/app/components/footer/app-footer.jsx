"use strict";
var React = require('react');

var Footer = React.createClass({
    render: function () {
        return (
                <footer role="contentinfo">
                    <div className="row">
                        <div className="small-6 columns">
                            <p className="copy">2015 &copy; ФГУП Почта России</p>
                        </div>
                        <div className="small-2 columns">
                            <ul className="social">
                                <li><a href="#"><i className="icon-vk-icon"></i></a></li>
                                <li><a href="#"><i className="icon-facebook-icon"></i></a></li>
                                <li><a href="#"><i className="icon-twitter-icon"></i></a></li>
                            </ul>
                        </div>
                        <div className="small-4 columns">
                            <nav>
                                <ul className="menu">
                                    <li><a href="#">Для бизнеса</a></li>
                                    <li><a href="#">Пресс центр</a></li>
                                    <li><a href="#">О компании</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </footer>
        );
    }
});

module.exports = Footer;