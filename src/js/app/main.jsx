"use strict";
var App = require('./components/app.jsx');
var Categories = require('./components/categories.jsx');
var CatalogItem = require('./components/catalog_item.jsx');
var CatalogItemSet = require('./components/catalog_item_set.jsx');
var CatalogItemSetPage = require('./components/catalog_item_set_page.jsx');
var CatalogItemPubSet = require('./components/catalog_item_pubset.jsx');
var CatalogItemPubSet_page = require('./components/catalog_item_pubset-page.jsx');
var PagePublication = require('./components/page_publications.jsx');

var AlphabeticalSearch = require('./components/alphabetical_search.jsx');
var PubHouse = require('./components/pub_house.jsx');
var Themes = require('./components/themes.jsx');
var Cart = require('./components/cart.jsx');
var Payment = require('./components/payment.jsx');
var PaymentSuccess = require('./components/payment_success.jsx');
var PaymentFail = require('./components/payment_fail.jsx');
var MySubscription = require('./components/MySubscription.jsx');
var MySubscriptionNone = require('./components/MySubscription-none.jsx');
var SearchResults = require('./components/app-search-res.jsx');
var Modal = require('./components/app-modal.jsx');
var React = require('react');

if (document.getElementById('main')) {
    React.render(<App />, document.getElementById('main'));
}

if (document.getElementById('catalog_item')) {
    React.render(<CatalogItem />, document.getElementById('catalog_item'));
}

if (document.getElementById('catalog_item-set-popup')) {
    React.render(<CatalogItemSet />, document.getElementById('catalog_item-set-popup'));
}

if (document.getElementById('catalog_item-set-popup-page')) {
    React.render(<CatalogItemSetPage />, document.getElementById('catalog_item-set-popup-page'));
}

if (document.getElementById('catalog_item-pub-set')) {
    React.render(<CatalogItemPubSet />, document.getElementById('catalog_item-pub-set'));
}

if (document.getElementById('catalog_item-pub-set-page')) {
    React.render(<CatalogItemPubSet_page />, document.getElementById('catalog_item-pub-set-page'));
}

if (document.getElementById('page_publication')) {
    React.render(<PagePublication />, document.getElementById('page_publication'));
}

if (document.getElementById('alphabetical-search')) {
    React.render(<AlphabeticalSearch />, document.getElementById('alphabetical-search'));
}

if (document.getElementById('categories')) {
    React.render(<Categories />, document.getElementById('categories'));
}

if (document.getElementById('pub_house')) {
    React.render(<PubHouse />, document.getElementById('pub_house'));
}

if (document.getElementById('themes')) {
    React.render(<Themes />, document.getElementById('themes'));
}

if (document.getElementById('cart')) {
    React.render(<Cart />, document.getElementById('cart'));
}

if (document.getElementById('payment')) {
    React.render(<Payment />, document.getElementById('payment'));
}

if (document.getElementById('payment_success')) {
    React.render(<PaymentSuccess />, document.getElementById('payment_success'));
}

if (document.getElementById('payment_fail')) {
    React.render(<PaymentFail />, document.getElementById('payment_fail'));
}

if (document.getElementById('my_subscription')) {
    React.render(<MySubscription />, document.getElementById('my_subscription'));
}

if (document.getElementById('my_subscription-none')) {
    React.render(<MySubscriptionNone />, document.getElementById('my_subscription-none'));
}

if (document.getElementById('search_results')) {
    React.render(<SearchResults />, document.getElementById('search_results'));
}

if (document.getElementById('modal')) {
    React.render(<Modal status="success" type="icon-Checkbox" statusTitle="Подписка оформлена" title="Ждите почтальона" text="Перейти в <a href='#'>Мои подписки</a>" />, document.getElementById('modal'));
}

if (document.getElementById('modal2')) {
    React.render(<Modal status="error" type="icon-shopping_cart_delete" statusTitle="Оплата отклонена" title="Мы рассмотрим заявку и сообщим о результате по электронной почте" text="Перейти в <a href='#'>Мои подписки</a>" />, document.getElementById('modal2'));
}

if (document.getElementById('modal3')) {
    React.render(<Modal confirm="true" title="Будете подписываться в Москве?" text="Покажем цены доставки и издания<br>этого населенного пункта" />, document.getElementById('modal3'));
}

if (document.getElementById('modal4')) {
    React.render(<Modal type="search" text="Покажем цены доставки и издания<br>этого населенного пункта" />, document.getElementById('modal4'));
}