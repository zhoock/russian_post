"use strict";
var React = require('react');
var SearchResults = require('./app-search-results.jsx');
var request = require('superagent');

//TODO get most search variables

var Search = React.createClass({
    getInitialState: function () {
        return {
            searchResults: ''
        };
    },
    handle_onChange: function (e) {
        var that = this;
        if ($(e.target).val().length > 0) {
            request
                    .get('/dist/api/searchResults.json')
                    .type('json')
                    .end(function (err, res) {
                        var searchResults = res.body.items;
                        that.setState({
                            searchResults: searchResults
                        });
                        $('#search__dropdown').slideDown();
                    });
        }
        else {
            $('#search__dropdown').slideUp();
        }
        return false;
    },
    render: function () {
        return (
                <section className="b-search text-center">
                    <h1>{this.props.header}</h1>

                    <div className="b-search__wrapper">
                        <input type="text" placeholder="Поиск по индексу, названию, теме или издателю"
                               onKeyUp={this.handle_onChange.bind(this)}/>

                        <div className="b-search__dropdown text-left" id="search__dropdown">
                            <SearchResults items={this.state.searchResults} />
                        </div>
                    </div>

                    <div className="tags">
                        <a>Детские журналы</a><a>Вокруг света</a><a>Бизнес и&nbsp;
                        маркетинг</a><a>Бухгалтерам</a>
                    </div>
                </section>
        );
    }
});

module.exports = Search;