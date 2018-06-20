"use strict";
var React = require('react');

var Search = React.createClass({
    render: function () {
        return (
                <section className="b-search b-search--internal text-center">
                    <div className="b-search__wrapper">
                        <input type="text" placeholder="Поиск по индексу, названию, теме или издателю"/>

                        <div className="btn"><i className="icon-Search"></i></div>
                    </div>
                    <nav className="b-nav">
                        <div className="row">
                            <div className="small-5 small-centered columns">
                                <ul>
                                    <li><a href="#" className="active">Все</a></li> <li><a href="#">Журналы и газеты</a><i className="icon-Dropdown"></i></li> <li><a href="#">Темы</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </section>
        );
    }
});

module.exports = Search;