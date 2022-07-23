'use strict';
var $ = require('jquery');
$(document).ready(function ($) {
    $('.gallery__items').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });
});