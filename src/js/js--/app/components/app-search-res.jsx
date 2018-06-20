"use strict";
var React = require('react');
var TemplateSearchRes = require('./app-template-searchResult.jsx');
var SearchResult = require('./content/smart-search_result.jsx');
var MostViewes = require('./catalog/smart-mostViews.jsx');

var CatalogItem = React.createClass({
	render: function() {
		return (
			<TemplateSearchRes>
                <SearchResult elements="/dist/api/search_res.json" />

                <MostViewes elements="/dist/api/recent_viewed.json" title="Вы недавно смотрели" moreUrl="/more" />
			</TemplateSearchRes>
		);
	}
});

module.exports = CatalogItem;