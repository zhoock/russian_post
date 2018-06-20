"use strict";
var React = require('react');
var Header = require('./header/app-header.jsx');
var Search = require('./header/app-search.jsx');
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
                        <Search />
                        {this.props.children}
                    </section>
                    <Footer />
                </div>
        );
    }
});

module.exports = Template;