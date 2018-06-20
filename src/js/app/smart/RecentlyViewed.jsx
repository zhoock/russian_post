var React = require('react/addons');

var RecentlyViewed = React.createClass({
    render: function() {
        return (
            <section className="b-recently-viewed">
                <div className="row">
                    <div className="small-10 columns">
                        <h2>Вы недавно смотрели</h2>
                    </div>
                    <div className="small-2 columns">
                        <div className="text-right"><a className="more">Ещё {viewed_count}</a><i className="icon-More"></i></div>
                    </div>
                </div>
                <div className="row">
                    {viewed}
                </div>
            </section>
        );
    }
});

module.exports = RecentlyViewed;