"use strict";
var React = require('react');

var EmptySubscribe = React.createClass({
    render: function () {
        return (
                <section className="b-my-subscription--none text-center">
                    <img src="/src/images/no-cover.svg"/>

                    <h2>Здесь появятся ваши подписки</h2>

                    <div className="btn btn__primary btn--expand">Перейти в каталог изданий</div>
                </section>
        );
    }
});

module.exports = EmptySubscribe;