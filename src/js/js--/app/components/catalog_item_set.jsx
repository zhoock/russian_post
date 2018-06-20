"use strict";
var React = require('react');
var CatalogDetailSet = require('./product/app-catalogdetail-set.jsx');
var TemplatePopup = require('./app-template-popup.jsx');

var CatalogItem = React.createClass({
	render: function() {
		return (
			<TemplatePopup>
				<CatalogDetailSet/>
			</TemplatePopup>
		);
	}
});

module.exports = CatalogItem;