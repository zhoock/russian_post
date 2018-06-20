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
        if (this.props.clear === 'true') {
            return (
                    <div className="container">
                        <Header onClick={this.headerClick}/>
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
                        <Header onClick={this.headerClick}/>
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