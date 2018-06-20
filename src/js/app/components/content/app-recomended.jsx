"use strict";
var React = require('react');

var Search = React.createClass({
    render: function() {
        return (
                <div className="b-publishing-house">
                    <a href="#">
                        <p className="b-publishing-house__heading b-publishing-house__heading--tt">
                            издательство</p><img
                            src="/src/images/publishing-house1.png" className="logo"/>

                        <div className="b-publishing-house__logs"><img
                                src="/src/images/photo-magazine1.jpg"/><img
                                src="/src/images/photo-magazine1.jpg"/><img
                                src="/src/images/photo-magazine1.jpg"/></div>

                        <p className="b-publishing-house__title">Аргументы и факты</p>

                        <div className="b-publishing-house__show"><i
                                className="icon-show"></i><span>Показать</span></div>
                    </a>
                </div>
        );
    }
});

module.exports = Search;