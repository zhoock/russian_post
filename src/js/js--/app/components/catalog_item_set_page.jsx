"use strict";
var React = require('react');
var CatalogDetailSetPage = require('./product/app-catalogdetail-set_page.jsx');
var TemplateSearch = require('./app-template-search.jsx');

var CatalogItem = React.createClass({
	render: function() {
		return (
			<TemplateSearch>
				<CatalogDetailSetPage/>
			</TemplateSearch>
		);
	}
});

module.exports = CatalogItem;