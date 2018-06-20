"use strict";
var React = require('react');

var SecondMenu = React.createClass({
    showAlfabet: function(e) {
        $('.js-alfabetcontent').fadeToggle('fast');
        e.preventDefault();
    },
    render: function() {
        return (
                <nav className="b-nav">
                    <div className="row">
                        <div className="small-5 small-centered columns">
                            <ul>
                                <li><a href="#">Подборки</a></li> <li><a href="#" className="active index-list-show" onClick={this.showAlfabet.bind(this)}>По алфавиту</a><i className="icon-Dropdown"></i></li> <li><a href="#">По теме</a></li>
                            </ul>
                            <div className="b-index-wrapper js-alfabetcontent" style={{display: "none"}}>
                                <div className="b-index-list">
                                    <div className="b-index-list__item">
                                        <div className="b-index-list__item__heading"> 0–9</div>
                                        <div className="b-index-list__item__set"><a href="#">1</a><a href="#">2</a><a href="#">3</a><a
                                                href="#">4</a><a href="#">5</a><a href="#">6</a><a href="#">7</a><a href="#">8</a><a
                                                href="#">9</a><a href="#">0</a>
                                        </div>
                                    </div>
                                    <div className="b-index-list__item">
                                        <div className="b-index-list__item__heading"> АБВ</div>
                                        <div className="b-index-list__item__set"><a href="#">А</a><a href="#">Б</a><a href="#">В</a><a
                                                href="#">Г</a><a href="#">Д</a><a href="#">Е</a><a href="#">Ё</a><a href="#">Ж</a><a
                                                href="#">З</a><a href="#">И</a><a href="#">К</a><a href="#">Л</a><a href="#">М</a><a
                                                href="#">Н</a><a href="#">О</a><a href="#">П</a><a href="#">Р</a><a href="#">С</a><a
                                                href="#">Т</a><a href="#">У</a><a href="#">Ф</a><a href="#">Х</a><a href="#">Ц</a><a
                                                href="#">Ч</a><a href="#">Ш</a><a href="#">Щ</a><a href="#">Э</a><a href="#">Ю</a><a
                                                href="#">Я</a>
                                        </div>
                                    </div>
                                    <div className="b-index-list__item">
                                        <div className="b-index-list__item__heading"> ABC</div>
                                        <div className="b-index-list__item__set"><a href="#">A</a><a href="#">B</a><a href="#">C</a><a
                                                href="#">D</a><a href="#">E</a><a href="#">F</a><a href="#">G</a><a href="#">H</a><a
                                                href="#">I</a><a href="#">J</a><a href="#">K</a><a href="#">L</a><a href="#">M</a><a
                                                href="#">N</a><a href="#">О</a><a href="#">P</a><a href="#">Q</a><a href="#">R</a><a
                                                href="#">S</a><a href="#">T</a><a href="#">U</a><a href="#">V</a><a href="#">W</a><a
                                                href="#">X</a><a href="#">Y</a><a href="#">Z</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
        );
    }
});

module.exports = SecondMenu;