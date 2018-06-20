"use strict";
var React = require('react');
var request = require('superagent');

var CatalogSet = React.createClass({
    getInitialState: function () {
        return {
            catalogSet: ''
        };
    },
    componentDidMount: function () {
        var that = this;
        request
                .get('/dist/api/catalog_set.json')
                .type('json')
                .end(function (err, res) {
                    var catalogSet = res.body.catalogSet;
                    that.setState({
                        catalogSet: catalogSet
                    });
                });
    },
    render: function () {
        var element = this.state.catalogSet;
        return (
                <div className="row">
                    <div className="small-12 columns">
                        <section className="b-selection">
                            <a href={'/items/catalog_set/'+element.id}>
                                <div className="row">
                                    <div className="small-7 columns">
                                        <img src={element.img1}/>
                                        <img src={element.img2}/>
                                        <img src={element.img3}/>
                                    </div>

                                    <div className="small-5 columns">
                                        <p className="b-selection__choice"
                                           dangerouslySetInnerHTML={{__html: element.typeTitle}}></p>

                                        <h3 className="b-selection__heading"
                                            dangerouslySetInnerHTML={{__html: element.title}}></h3>

                                        <p className="b-selection__tagline"
                                           dangerouslySetInnerHTML={{__html: element.summary}}></p>

                                        <div className="btn btn__primary btn--cart"><i
                                                className="icon-shoppingcart"></i>В корзину
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </section>
                    </div>
                </div>
        );
    }
});

module.exports = CatalogSet;