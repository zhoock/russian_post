"use strict";
var React = require('react');
var CatalogDetailPubSet = require('./product/app-catalogdetail_pubset.jsx');
var TemplatePopup = require('./app-template-popup.jsx');

var CatalogItem = React.createClass({
	render: function() {
		return (
			<TemplatePopup>
				<CatalogDetailPubSet/>
			</TemplatePopup>
		);
	}
});

module.exports = CatalogItem;