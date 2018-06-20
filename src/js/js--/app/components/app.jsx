"use strict";
var React = require('react');
var Template = require('./app-template.jsx');
var SecondMenu = require('./content/app-secondmenu.jsx');
var CatalogNewList = require('./catalog/smart-catalogNew.jsx');
var CatalogSet = require('./catalog/app-catalogset.jsx');
var CityCatalog = require('./catalog/smart-catalogCity.jsx');
var SameItems = require('./catalog/smart-catalogSame.jsx');
var NewspaperCatalog = require('./catalog/smart-catalogNewsPaper.jsx');
var MostViewes = require('./catalog/smart-mostViews.jsx');

var App = React.createClass({
	render: function() {
		return (
			<Template summary="true">
                <SecondMenu hideSearch="true" activeStep="1"/>
                <CatalogNewList elements="/dist/api/getnewest.json" title="Новые и популярные журналы" moreUrl="/more" />

                <CatalogSet />

                <CityCatalog elements="/dist/api/press_samara.json" title="Пресса Самары" moreUrl="/more" />

                <SameItems elements="/dist/api/seems.json" title="Похоже на то, что вы выписываете" moreUrl="/more" />

                <NewspaperCatalog elements="/dist/api/gazet.json" title="Газеты2" />

                <MostViewes elements="/dist/api/recent_viewed.json" title="Вы недавно смотрели" moreUrl="/more" />

			</Template>
		);
	}
});

module.exports = App;