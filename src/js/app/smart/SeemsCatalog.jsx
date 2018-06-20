var React = require('react/addons');

var SeemsCatalog = React.createClass({
    render: function() {
        return (
            <section className="b-seems">
                <div className="row">
                    <div className="small-10 columns">
                        <h2>Похоже на то, что вы выписываете</h2>
                    </div>
                    <div className="small-2 columns">
                        <div className="text-right"><a className="more">Ещё {seems_count}</a><i className="icon-More"></i></div>
                    </div>
                </div>
                <div className="row">
                    {seems}
                </div>
            </section>
        );
    }
});

module.exports = SeemsCatalog;