"use strict";
var React = require('react');
var CategoresList = require('./content/app-categoreslist.jsx');
var Template = require('./app-template.jsx');
var SecondMenu = require('./content/app-secondmenu.jsx');

var App = React.createClass({
	render: function() {
		return (
			<Template>
                <SecondMenu hideSearch="true" activeStep="3" />
                <CategoresList/>
			</Template>
		);
	}
});

module.exports = App;