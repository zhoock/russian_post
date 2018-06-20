"use strict";
var React = require('react');
var request = require('superagent');
var Ranges = require('../product/app-ranges.jsx');
var SelectedRanges = require('../product/app-selectedranges.jsx');

var CatalogDetail = React.createClass({
    getInitialState: function () {
        return {
            item: '',
        };
    },
    componentDidMount: function () {
        var that = this;
        request
            .get('/dist/api/catalog_item.json')
            .type('json')
            .end(function (err, res) {
                var ranges = _.map(res.body.item.periods, function (item) {
                    return <Ranges key={item.id} item={item}/>;
                });
                that.setState({
                    item: res.body.item,
                    selectedRanges: '',
                    ranges: ranges
                });
            });

        /**
         * Объединяет элементы массива через разделитель. При этом игнорирует пустые элементы.
         */
        function join(arr /*, separator */ ) {
            var separator = arguments.length > 1 ? arguments[1] : ", ";
            return arr.filter(function(n) {
                return n
            }).join(separator);
        }

        function makeAddressString(address) {
            return join([
                join([address.postal_code], " "), (join([address.city_type, address.city], " ") || ""),
                join([address.street_type, address.street], " "),
                join([address.house_type, address.house,
                    address.block_type, address.block
                ], " "),
                join([address.settlement_type, address.settlement], " ")
            ]);
        }
        /**
         * Выводит подсказки в формате "улица, дом, город, область"
         */
        function formatResult(value, currentValue, suggestion) {
            var addressValue = makeAddressString(suggestion.data);
            suggestion.value = addressValue;

            return addressValue;
        }
        /**
         * Заполняет содержимое текстбокса в формате "улица, дом, город, область"
         */
        function formatSelected(suggestion) {
            var addressValue = makeAddressString(suggestion.data);

            return addressValue;
        }


        $("#address").suggestions({
            serviceUrl: "https://dadata.ru/api/v2",
            token: "a52c6263998ff473d65c7fa26c5ee8db91ad0a69",
            type: "ADDRESS",
            formatResult: formatResult,
            formatSelected: formatSelected,
            onSelect: function(suggestion) {
                $("#address").data('selected', true);
                $('#address_hint').fadeOut();
            },
            onInvalidateSelection: function() {
                $("#address").data('selected', false);
            }
        });

        $("#address").on('keyup', function(){
            var $this = $(this);
            var $parent = $this.parent();
            if (!$this.val()) {
                $parent
                    .removeClass('b-custom-address--warning')
                    .addClass('b-custom-address--error');
                if($('#address_hint').size() > 0) {
                    $('#address_hint').fadeIn().html('Укажите адреc')
                }
                else {
                    $this.after('<div class="hint" id="address_hint">Укажите адрес</div>');
                }
            }
            else {
                if (!$("#address").data('selected')) {
                    $parent
                        .removeClass('b-custom-address--error')
                        .addClass('b-custom-address--warning');
                    if($('#address_hint').size() > 0) {
                        $('#address_hint').fadeIn().html('Выберите адрес из списка')
                    }
                    else {
                        $this.after('<div class="hint" id="address_hint">Выберите адрес из списка</div>');
                    }
                }
                else {
                    $('#address_hint').fadeOut();
                }
            }
        });

        //$("#address2").mask("999999",{placeholder:" "});
        //
        //$("#address3").mask("99999",{placeholder:" "});

        function validateAddr2() {
            var valid = $('#address2').val().replace(/[^0-9]/g,"").length >= 6;
            $('#address2').css('border-color', valid ? '' : 'red');
            if (!valid) {
                if ($('#address2_hint').size() == 0)
                    $('#address2').after('<div class="hint" id="address2_hint">Неверно введен индекс</div>');
                $('#address2').parent().addClass('b-custom-address--error');
            }
            else {
                $('#address2_hint').fadeOut(function(){
                    $('#address2_hint').remove();
                    $('#address2').parent().removeClass('b-custom-address--error');
                })
            }
        };

        function validateAddr3() {
            var valid = $('#address3').val().length > 0;
            $('#address3').css('border-color', valid ? '' : 'red');
            if (!valid) {
                if ($('#address3_hint').size() == 0)
                    $('#address3').after('<div class="hint" id="address3_hint">Не введен номер абонентсткого ящика</div>');
                $('#address3').parent().addClass('b-custom-address--error');
            }
            else {
                $('#address3_hint').fadeOut(function(){
                    $('#address3_hint').remove();
                    $('#address3').parent().removeClass('b-custom-address--error');
                })
            }
        };

        $('#address2').keypress(function(event) {
            return event.charCode >= 48 && event.charCode <= 57;
        })
        $('#address2').keyup(function() {
            setTimeout(validateAddr2, 100);
        });
        $('#address3').keyup(function() {
            setTimeout(validateAddr3, 100);
        });
        $('#address3').focus(function() {
            setTimeout(validateAddr3, 100);
        });

        var $fields = $("#subscribeForm :input");
        $fields.keyup(function() {
            var $emptyFields = $fields.filter(function() {

                // remove the $.trim if whitespace is counted as filled
                if ($(this).is(':visible'))
                    return $.trim(this.value) === "";
            });

            if (!$emptyFields.length) {
                $('.js-btn-submit').removeClass('disabled');
                $('.js-btn-submit').addClass('btn__primary');
            } else {
                $('.js-btn-submit').removeClass('btn__primary');
                $('.js-btn-submit').addClass('disabled');
            }
        });
    },
    removeRow: function (e) {
        var that = this;
        var year = $(e.target).attr('id');
        $('.jswrap_year[data-title="' + year + '"]').find('.active').removeClass('active');
        that.checkSelected();
    },
    checkSelected: function() {
        var that = this;
        var selected = [];
        $('#range_selector .jswrap_year').each(function (v, k) {
            var a = $(k).find('.active');
            if (a.length > 0) {
                var t_ = [];
                a.each(function (v, k) {
                    t_.push($(k).text());
                });

                selected.push({
                    "title": $(k).data('title'),
                    "text": t_.join(' ')
                });
            }
        });
        this.setState({
            selectedRanges: ''
        });
        var selectedRanges = _.map(selected, function (item) {
            return <SelectedRanges onClick={that.removeRow} key={item.id} item={item}/>;
        });
        this.setState({
            selectedRanges: selectedRanges
        });
    },
    selectRange: function (e) {
        var that = this;
        var $this = $(e.target),
            $handle;

        if ($this.hasClass('handle')) {
            $handle = $this;
        }
        else if ($this.parent().hasClass('handle')) {
            $handle = $this.parent();
        }
        else {
            return false;
        }

        $handle.toggleClass('active');

        that.checkSelected();

        e.stopPropagation();
    },
    handle_onChange: function (e) {
        var $this = $(e.target);
        $this.parent().toggleClass('b-subscription-period--focus');
        $('#range_selector').toggle();

        $('body').on('click', function (e) {
            var clicked = $(e.target); // get the element clicked
            if (clicked.is('#range_selector') || clicked.parents().is('#range_selector') || clicked.is('.b-choose-periods')) {
                return;
            } else {
                $('#range_selector').hide();
            }
        });
        e.preventDefault();
    },
    customSelect: function (e) {
        var $this = $(e.target);
        $this.parent().toggleClass('b-custom-select—-focus');
        $('.js-custom-select-values').toggle();

        $('body').on('click', function (e) {
            var clicked = $(e.target); // get the element clicked
            if (clicked.is('.js-custom-select-values,.b-custom-select__value') || clicked.parents().is('.js-custom-select-values,.b-custom-select__value')) {
                return;
            } else {
                $('.js-custom-select-values').hide();
            }
        });
        e.preventDefault();
    },
    customSelectChoose: function (e) {
        var $this = $(e.target);

        if ($this.hasClass('handle')) {
            var c_value = $this.text();
            var id = $this.data('id');
            if (id == 'aya') {
                $('.js-aya').slideDown();
                $('.js-address,.js-index').slideUp();
            }
            else if(id == 'address'){
                $('.js-address').slideDown();
                $('.js-index,.js-aya').slideUp();
            }
            else if(id == 'index'){
                $('.js-index').slideDown();
                $('.js-address,.js-aya').slideUp();
            }
            $('.js-btn-submit').removeClass('btn__primary');
            $('.js-btn-submit').addClass('disabled');

            $('.js-custom-select-values .b-custom-select__suggest__element--selected').removeClass('b-custom-select__suggest__element--selected');
            $this.addClass('b-custom-select__suggest__element--selected');
            $('.js-custom-select-value').text(c_value);
            $('.js-custom-select-values').hide();
        }
    },
    closeModal: function () {
        $('.js-modal__close').removeClass('open');
        $('.js-modal-overlay').removeClass('open');
    },
    render: function () {
        return (
            <form id="subscribeForm">
                <div className="row">
                    <div className="small-11 columns small-centered">
                        <div className="b-card__form-elements">
                            <label for="name">Период подписки</label>

                            <div className="b-subscription-period">
                                <div className="b-choose-periods"
                                     onClick={this.handle_onChange.bind(this)}>
                                    <div className="wrapper-periods">
                                        {this.state.selectedRanges}
                                    </div>
                                </div>
                                <div className="b-dropdown" id="range_selector"
                                     onClick={this.selectRange.bind(this)}>
                                    {this.state.ranges}
                                </div>
                            </div>
                            <label for="name">Доставка</label>

                            <div className="b-custom-select">
                                <div className="b-custom-select__value js-custom-select-value"
                                     onClick={this.customSelect.bind(this)}>До
                                    адресата
                                </div>
                                <input readonly="readonly" value="До адресата"
                                       type="text"/>
                                <i className="icon-Dropdown2"></i>

                                <div className="b-custom-select__suggest-wrapper js-custom-select-values"
                                     onClick={this.customSelectChoose.bind(this)}>
                                    <div className="b-custom-select__suggest">
                                        <div
                                            className="handle b-custom-select__suggest__element b-custom-select__suggest__element--selected" data-id="address">
                                            До адресата
                                        </div>
                                        <div className="handle b-custom-select__suggest__element" data-id="index">
                                            До востребования
                                        </div>
                                        <div className="handle b-custom-select__suggest__element" data-id="aya">
                                            Абонентский ящик
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="b-card-payment__details b-card-payment__details--expand js-aya" style={{display: "none"}}>
                                <div className="row">
                                    <div className="small-12 columns">
                                        <div className="b-card-payment__details__number">
                                            <div className="row">
                                                <div className="small-4 columns">
                                                    <label>Почтовый индекс</label><br/>
                                                    <input type="text" id="address2" maxLength="6" required/>
                                                </div>
                                                <div className="small-8 columns">
                                                    <label>Абонентский ящик</label><br/>
                                                    <input type="text" id="address3" required/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="js-address">

                                <label for="address">Адрес (населённый пункт, улица, дом,
                                    квартира)</label>

                                <div className="b-custom-address">
                                    <input id="address" type="text"
                                           placeholder="101000, г. Москва, ул. Маросейка 3/16"
                                           style={{"padding-left":"0 !important"}}/>
                                </div>
                            </div>

                            <div className="js-index" style={{display: "none"}}>

                                <label for="address">Почтовое отделение</label>

                                <div className="b-custom-address--warning">
                                    <input id="index" type="text" placeholder="Введите адрес или индекс" />
                                </div>
                            </div>

                            <label for="fio">ФИО получателя</label>

                            <div className="b-custom-input">
                                <input id="fio" type="text"
                                       placeholder="Супрунов Константин Николаевич"/>
                            </div>
                        </div>
                        <div className="text-center"><a
                            className="btn disabled btn--cart btn--expand js-btn-submit"><i
                            className="icon-shoppingcart"></i>В корзину<span
                            className="price">932,18 &#8381;</span></a>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
});

module.exports = CatalogDetail;
