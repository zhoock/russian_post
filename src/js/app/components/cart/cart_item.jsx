"use strict";
var React = require('react');

var CatalogItem = React.createClass({
    getInitialState: function () {
        var that = this;
        return {
            item: that.props.item
        };
    },
    restoreItem: function(e) {
        e.preventDefault();
        var state = this.state.item;
        state.deleted = 'false';
        this.setState({
            item: state
        });
    },
    removeItem: function(e) {
        e.preventDefault();
        var state = this.state.item;
        state.deleted = 'true';
        this.setState({
            item: state
        });
    },
    render: function () {
        var control;
        if (this.state.item.deleted === 'true') {
            control = <a href="#" className="link-restore" onClick={this.restoreItem.bind(this)}>Восстановить</a>;
        }
        else {
            control = <i className="icon-Item_pop_close" onClick={this.removeItem.bind(this)}></i>;
        }
        var img1, img2;
        if (this.state.item.img2) {
            img1 = <img src={this.state.item.img2}/>;
        }
        if (this.state.item.img3) {
            img2 = <img src={this.state.item.img3}/>;
        }
        var period,alert;
            if (this.state.item.closed) {
                period =
                        <div className="b-block-magazine__add-instance">
                            <div className="btn btn__change-period">Изменить период</div>
                        </div>;
                alert = <i className="icon-Alert"></i>;
            }
            else {
                period =
                        <div className="b-block-magazine__add-instance">+ Добавить еще экземпляр
                            <div className="b-price">
                                <div className="b-price__book" dangerouslySetInnerHTML={{__html: this.state.item.price}}></div>
                            </div>
                        </div>;
            }
        return (
                <article className="b-cart__item">
                    <div className={this.state.item.closed==='true'?"b-block-magazine b-block-magazine__period-closed":"b-block-magazine"}>
                        {control}
                        <a href="#" className={this.state.item.deleted==='true'?'restore':''}>
                        <figure>
                            <div className="b-block-magazine__cover">
                                <div className="b-block-magazine__logs--package">
                                    <img src={this.state.item.img1} />
                                    {img1}
                                    {img2}
                                </div>
                            </div>
                            <div className="b-block-magazine__data">
                                <div className="b-block-magazine__together">{this.state.item.typeTitle}</div>
                                <figcaption>{this.state.item.title}</figcaption>
                                <div className="b-block-magazine__period">{this.state.item.period}</div>
                                <div className="b-description">{alert} {this.state.item.description}</div>
                                <div className="b-block-magazine__address">{this.state.item.address}</div>
                                <div className="b-block-magazine__name">{this.state.item.userName}</div>
                                {period}
                            </div>
                        </figure>
                    </a></div>
                </article>
        );
    }
});

module.exports = CatalogItem;