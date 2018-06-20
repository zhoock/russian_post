"use strict";
var React = require('react');

var Alfabet = React.createClass({
    render: function () {
        return (
                <div className="small-1 columns">
                    <div className="b-alphabet js-section"><a href="#1" className="active">A</a><a href="#2">Б</a><a
                            href="#3">Д</a><a
                            href="#4">Е</a><a href="#5">Ж</a><a href="#6">З</a><a href="#7">И</a><a href="#8">К</a><a
                            href="#">Н</a><a href="#">О</a><a href="#">П</a><a href="#">Р</a><a href="#">С</a><a
                            href="#">Т</a><a href="#">У</a><a href="#">Ф</a><a href="#">Х</a><a href="#">Э</a><a
                            href="#">Ю</a>
                    </div>
                </div>
        );
    }
});

module.exports = Alfabet;