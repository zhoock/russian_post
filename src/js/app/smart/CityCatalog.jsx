var React = require('react/addons');

var CityCatalog = React.createClass({
    render: function() {
        return (
            <section className="b-press-city">
                <div className="row">
                    <div className="small-10 columns">
                        <h2>Пресса Самары</h2>
                    </div>
                    <div className="small-2 columns">
                        <div className="text-right"><a className="more">Ещё {press_city_count}</a><i className="icon-More"></i></div>
                    </div>
                </div>
                <div className="row">
                    // {press_city}
                </div>
            </section>
        );
    }
});

module.exports = CityCatalog;