var React = require('react/addons');
var CatalogHeader = require('../components/catalog/CatalogHeader.jsx');
var CatalogSection = require('../components/catalog/CatalogSection.jsx');
var Modal = require('../components/modal/Modal.jsx');

var NewspaperCatalog = React.createClass({
    onClick: function(e, model, old_url) {
        var modal = <Modal cover={model.getCoverURL()}
                           oldUrl={old_url}
                           type={model.getTypeRU()}
                           title={model.get('title')}
                           annotation={model.get('annotation')}
                           description={model.getDescription()}
                           prices={model.getPricesByRegion(null)}></Modal>;
        if(!$('#modal-nest').length) {
            $('body').prepend('<div id="modal-nest"></div>');
        }
        var $nest = $('#modal-nest');
        $nest.html('');
        React.render(modal, $nest.get(0));
    },

    render: function() {
        return (
            <section className="b-newspaper">
                <CatalogHeader publication={this.props.publication} />
                <div className="row">
                    <CatalogSection elements={this.props.elements}
                                    columns={this.props.columns}
                                    onClick={this.onClick} />
                </div>
            </section>
        );
    }
});

module.exports = NewspaperCatalog;