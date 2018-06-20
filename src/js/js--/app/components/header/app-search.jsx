"use strict";
var React = require('react');

var Search = React.createClass({
    showSearch: function() {
        $(".js-b-nav").addClass('b-nav--show-search');
    },
    render: function () {
        return (
                <nav className="b-nav js-b-nav">
                    <div className="row">
                        <div className="small-5 small-centered columns">
                            <ul>
                                <li><a href="#" className="active">Подборки</a></li> <li><a href="#">По алфавиту</a><i className="icon-Dropdown"></i></li> <li><a href="#">По теме</a></li>
                            </ul>
                        </div>
                        <div className="small-1 columns"><i onClick={this.showSearch} className="icon-Search"></i></div>
                    </div>
                    <div className="row">
                        <div className="small-12 columns">
                            <div className="b-search__wrapper">
                                <input autofocus="true" type="search"
                                       placeholder="Поиск по индексу, названию, теме или издателю" value=""/>
                            </div>
                        </div>
                    </div>
                </nav>
        );
    }
});

module.exports = Search;