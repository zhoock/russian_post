"use strict";
var React = require('react');

var Ranges = React.createClass({
    render: function () {
        var values = _.map(this.props.item.values, function (el) {
            if (el.type === 'half') {
                var t_ = _.map(el.text, function (el) {
                    return (
                            <div className="b-wrapper-years__month">
                                {el}
                            </div>
                    );
                });

                return (
                        <div className="b-wrapper-years__half handle" data-val={el.val}>
                            {t_}
                        </div>
                );
            }
            else if (el.type === 'two') {
                return (
                        <div className="b-wrapper-years__twoMonth handle" data-val={el.val}>
                            <div className="b-wrapper-years__month">
                                {el.text}
                            </div>
                        </div>
                );
            }
            else {
                return (
                        <div className={el.disabled?"b-wrapper-years__month b-wrapper-years__month--not-active":"b-wrapper-years__month handle"}
                             data-val={el.val}>
                                {el.text}
                        </div>
                );
            }
        });
        return (
                <div className="b-wrapper-years jswrap_year" data-title={this.props.item.title}>
                    <div className="b-wrapper-years__year">
                        {this.props.item.title}
                    </div>
                    {values}
                </div>
        );
    }
});

module.exports = Ranges;