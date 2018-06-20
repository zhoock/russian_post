"use strict";
var React = require('react');

var SecondMenu = React.createClass({
    render: function() {
        var searchIco;
        if (!this.props.hideSearch || this.props.hideSearch !== "true") {
            searchIco = <div className="small-1 columns"><i className="icon-Search"></i></div>;
        }
        return (
                <nav className="b-nav">
                    <div className="row">
                        {searchIco}
                        <div className="small-5 small-centered columns">
                            <ul>
                                <li><a href="#" className={this.props.activeStep==="1"?"active":""}>Подборки</a></li> <li><a href="#" className={this.props.activeStep==="2"?"active":""}>По алфавиту</a><i className="icon-Dropdown"></i></li> <li><a href="#" className={this.props.activeStep==="3"?"active":""}>По теме</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
        );
    }
});

module.exports = SecondMenu;