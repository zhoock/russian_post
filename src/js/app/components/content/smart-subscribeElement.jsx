"use strict";
var React = require('react');

var PubHouse = React.createClass({
    render: function () {
        var that = this;
        var list = _.map(this.props.item.items, function(item) {
            var className = "b-block-magazine ";
            var actionBtn = "";
            if (that.props.item.type === "expired") {
                className += " b-block-magazine__renew";
                actionBtn = <div className="btn btn__change-period">Возобновить подписку</div>;
            }
            if (item.extended) {
                className += " b-block-magazine__extend";
                actionBtn = <div className="btn btn__change-period">Продлить подписку</div>;
            }
            return (
                    <div className={className}><a href="#">
                        <figure>
                            <div className="b-block-magazine__cover">
                                <div className="b-block-magazine__logs--package">
                                    <img src={item.img1} />
                                    <img src={item.img2} />
                                    <img src={item.img3} />
                                </div>
                            </div>

                            <div className="b-block-magazine__data">
                                <div className="b-block-magazine__together">{item.subtitle}</div>
                                <figcaption>{item.title}</figcaption>
                                <div className="b-description">{item.period}</div>
                                <div className="b-block-magazine__address">{item.address}</div>
                                <div className="b-block-magazine__name">{item.name}</div>
                                <div className="b-block-magazine__latest-numbers"><i
                                        className="icon-calendar"></i>{item.last_date}
                                </div>
                                {actionBtn}
                            </div>
                        </figure>
                    </a>
                    </div>
            );
        });
        return (
                <article className="b-my-subscription__item">
                    <h2>{this.props.item.title}</h2>

                    {list}
                </article>
        );
    }
});

module.exports = PubHouse;