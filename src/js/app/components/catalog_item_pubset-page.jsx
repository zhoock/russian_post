"use strict";
var React = require('react');
var CatalogDetailPubSetPage = require('./product/app-catalogdetail_pubset_page.jsx');
var TemplateSearch = require('./app-template-search.jsx');

var CatalogItem = React.createClass({
	render: function() {
		return (
			<TemplateSearch>
				<CatalogDetailPubSetPage/>
			</TemplateSearch>
		);
	}
});

module.exports = CatalogItem;