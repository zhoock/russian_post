"use strict";
var React = require('react');
var Header = require('./header/app-header.jsx');
var SearchRes = require('./header/app-search-res.jsx');
var Footer = require('./footer/app-footer.jsx');

var Template = React.createClass({
    headerClick: function () {
        $('#cabmenu').fadeToggle('fast');
        return false;
    },
    render: function () {
        this.authInfo = {
            count: 3,
            auth: true,
            userName: "Иванов Пётр",
            menuList: [
                {
                    link: '/link1',
                    title: 'Москва'
                },
                {
                    link: '/link2',
                    title: 'Мои подписки'
                },
                {
                    link: '/exit',
                    title: 'Выйти'
                }
            ]
        };

        return (
                <div className="container">
                    <Header authInfo={this.authInfo} onClick={this.headerClick}/>
                    <section className="b-content" role="main">
                        <nav className="b-nav b-nav--cart">
                            <div className="row">
                                <div className="small-12 columns">
                                    <ul>
                                        <li><i className="icon-back"></i><a href="#">В каталог изданий</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <SearchRes />
                        {this.props.children}
                    </section>
                    <Footer />
                </div>
        );
    }
});

module.exports = Template;