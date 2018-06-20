"use strict";
var React = require('react');
var Header = require('./header/app-header.jsx');
var Footer = require('./footer/app-footer.jsx');
var SecondMenu = require('./content/app-secondmenu.jsx');

var Template = React.createClass({
    headerClick: function() {
        $('#cabmenu').fadeToggle('fast');
        return false;
    },
	render: function() {
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

        if (this.props.clear === 'true') {
            return (
                    <div className="container">
                        <Header authInfo={this.authInfo} onClick={this.headerClick}/>
                        <section className="b-content" role="main">
                            {this.props.children}
                        </section>
                        <Footer />
                    </div>
            );
        }
        else {
            return (
                    <div className="container">
                        <Header authInfo={this.authInfo} onClick={this.headerClick}/>
                        <section className="b-content" role="main">
                            <SecondMenu />
                            {this.props.children}
                        </section>
                        <Footer />
                    </div>
            );
        }
	}
});

module.exports = Template;