"use strict";
var React = require('react');

var CatalogItem = React.createClass({
    render: function () {
        if (this.props.statusTitle) {
            return (
                    <div className="b-modal-overlay js-modal-overlay open">
                        <div className="b-modal b-modal-effect-1">
                            <section className="b-modal-content b-message">
                                <i className="icon-region_pop_close js-modal__close"></i>

                                <div className="row small-collapse">
                                    <div className="small-12 columns">
                                        <div className={this.props.status?"b-message__status b-message__status--"+this.props.status:"b-message__status"}>
                                            <i className={this.props.type}></i>
                                            {this.props.statusTitle}
                                        </div>
                                        <div className="b-message__notice">{this.props.title}</div>
                                    </div>
                                </div>
                                <div className="b-message__action"
                                     dangerouslySetInnerHTML={{__html: this.props.text}}></div>
                            </section>
                        </div>
                    </div>
            );
        }
        else if (this.props.confirm === "true") {
            return (
                    <div className="b-modal-overlay js-modal-overlay open">
                        <div className="b-modal b-modal-effect-1">
                            <section className="b-modal-content b-message b-message--region"><i
                                    className="icon-region_pop_close js-modal__close"></i>

                                <div className="row small-collapse">
                                    <div className="small-12 columns">
                                        <div className="b-message__notice">{this.props.title}</div>
                                        <div className="b-message__prompt">
                                            <a className="btn btn__prompt">Да</a>
                                            <a className="btn btn__prompt">Нет</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="b-message__promise"
                                     dangerouslySetInnerHTML={{__html: this.props.text}}></div>
                            </section>
                        </div>
                    </div>
            );
        }
        else if (this.props.type === "search") {
            return (
                    <div className="b-modal-overlay js-modal-overlay open">
                        <div className="b-modal b-modal-effect-1">
                            <section className="b-modal-content b-message b-message--address"><i
                                    className="icon-region_pop_close js-modal__close"></i>

                                <div className="row small-collapse">
                                    <div className="small-12 columns">
                                        <div className="b-message__address">
                                            <form>
                                                <div className="b-custom-address">
                                                    <input id="address" type="text"
                                                           placeholder="Введите населённый пункт или индекс"/>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="b-message__promise"
                                     dangerouslySetInnerHTML={{__html: this.props.text}}></div>
                            </section>
                        </div>
                    </div>
            );
        }
        else {
            return (<div></div>);
        }
    }
});

module.exports = CatalogItem;