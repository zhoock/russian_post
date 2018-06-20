"use strict";
var React = require('react');

var Header = React.createClass({
    getInitialState: function () {
        var menuList = _.map(this.props.authInfo.menuList, function (item) {
            return <li><a href={item.link}>{item.title}</a></li>;
        });
        return {
            menuList: menuList
        };
    },
    render: function () {
        return (
                <div className="row">
                    <div className="large-12 columns">
                        <header role="banner">
                            <div className="row">
                                <div className="small-8 columns">
                                    <a href="/" className="logo"><img src="/src/images/logo.svg" alt="Логотип Почты России" title="Логотип Почты России"/></a>
                                </div>
                                <div className="small-4 columns">
                                    <div className="b-account">
                                        <ul>
                                            <li className="question"><i className="icon-Help"></i><a href="#">Помощь</a>
                                            </li>
                                            <li className="menu"><span className="counter">{this.props.authInfo.count}</span>
                                                <a href="#" onClick={this.props.onClick}>{this.props.authInfo.userName}</a><i
                                                        className="icon-Dropdown"></i>

                                                <div className="b-account__menu" id="cabmenu">
                                                    <ul>
                                                        {this.state.menuList}
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </header>
                    </div>
                </div>
        );
    }
});

module.exports = Header;