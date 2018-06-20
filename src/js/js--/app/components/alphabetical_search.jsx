"use strict";
var React = require('react');
var Alfabet = require('./content/app-alfabet.jsx');
var TemplateAlfabet = require('./app-template-alfabet.jsx');
var MostViewes = require('./catalog/smart-mostViews.jsx');


var AlphabeticalSearch = React.createClass({
	render: function() {
		return (
			<TemplateAlfabet>
                <Alfabet elements="/dist/api/alfbet.json" />

                <MostViewes elements="/dist/api/recent_viewed.json" title="Вы недавно смотрели" />
			</TemplateAlfabet>
		);
	}
});

module.exports = AlphabeticalSearch;