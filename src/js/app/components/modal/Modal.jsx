"use strict";

var React = require('react');
var cn = require('classnames');
var ModalHeader = require('./ModalHeader.jsx');
var PublicationTitle = require('../publication/PublicationTitle.jsx');
var PublicationPrices = require('../publication/PublicationPrices.jsx')

var Modal = React.createClass({
    getInitialState: function() {
        return {
            open: false
        };
    },
    open: function(e){
        this.setState({open: true});
    },
    close: function(e){
        this.setState({open: false});
        $(this.refs.closeIcon.getDOMNode()).remove();
        if('pushState' in history) {
            let { state, href, title, hash } = this.props;
            history.pushState(state || null, title || null, this.props.oldUrl);
        } else {

        }
    },
    componentDidMount: function(e) {
        return this.open(e);
    },
    render: function() {
        var modalClass = cn({
            'b-modal-overlay': true,
            'js-modal-overlay': true,
            'open': this.state.open
        });
        return (
            <div className="b-subscription">
                <i className="icon-region_pop_close js-modal__close" onClick={this.close.bind(this)} ref="closeIcon"></i>
                <div className={modalClass}>
                    <div className="modal_closer" onClick={this.close.bind(this)}></div>
                    <div className="b-modal b-modal-effect-1">
                        <section className="b-modal-content b-subscription">
                            <ModalHeader {...this.props} />

                            <PublicationTitle {...this.props} />

                            <PublicationPrices {...this.props} />


                        </section>
                    </div>
                </div>
            </div>
        );
        /*
        <div className="row">
                                <div className="small-3 small-offset-1 columns">
                                    <div className="b-subscription__min"
                                         dangerouslySetInnerHTML={{__html: null}}></div>

                                    <div className="b-subscription__price">{null} ₽
                                    </div>
                                </div>

                                <div className="small-3 columns">
                                    <div className="b-subscription__half-year"><span
                                            dangerouslySetInnerHTML={{__html: null}}></span>

                                        <div className="discount">{null}</div>
                                    </div>

                                    <div className="b-subscription__price">{null} ₽
                                    </div>
                                </div>
                                <div className="small-3 columns end">
                                    <div className="b-subscription__year"><span
                                            dangerouslySetInnerHTML={{__html: null}}></span><br/>

                                        <div className="discount">{null}</div>
                                    </div>

                                    <div className="b-subscription__price">{null} ₽
                                    </div>
                                </div>
                            </div>
         */
    }
});

module.exports = Modal;
