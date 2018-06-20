"use strict";
var React = require('react');
var CatalogDetail = require('./product/app-catalogdetail.jsx');
var TemplatePopup = require('./app-template-popup.jsx');

var CatalogItem = React.createClass({
	render: function() {
		return (
			<TemplatePopup>
				<CatalogDetail/>
			</TemplatePopup>
		);
	}
});

module.exports = CatalogItem;