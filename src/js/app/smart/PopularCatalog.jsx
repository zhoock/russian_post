var React = require('react/addons');
var Recomended = require('../components/content/app-recomended.jsx');
var CatalogHeader = require('../components/catalog/CatalogHeader.jsx');
var CatalogSection = require('../components/catalog/CatalogSection.jsx');
var Modal = require('../components/modal/Modal.jsx');

var PopularCatalog = React.createClass({
    onClick: function(e, model, old_url) {
        var modal = <Modal model={model}
                           oldUrl={old_url} ></Modal>;
        if(!$('#modal-nest').length) {
            $('body').prepend('<div id="modal-nest"></div>');
        }
        var $nest = $('#modal-nest');
        $nest.html('');
        React.render(modal, $nest.get(0));
    },
    render: function() {
        var newest_count = 0;
        var newest = [];
        return (
            <section className="b-new-popular-magazines">
                <CatalogHeader publication={this.props.publication} />
                <div className="row">
                    <div className="small-9 columns">
                        <CatalogSection elements={this.props.elements} line="3" onClick={this.onClick} />
                    </div>
                    <div className="small-3 columns">
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = PopularCatalog;