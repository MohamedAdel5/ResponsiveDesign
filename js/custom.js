/*global $*/

$(function () {
    'use strict';
    $('.info li').click(function () {
        $(this).addClass('selected');
        $(this).siblings('li').removeClass('selected');
        $('.info p').hide();
        $('.' + $(this).data('class')).fadeIn(300);
    });
    
    $('.navbar .menu').click(function () {
        $('.navbar ul').addClass('visible-custom').removeClass('hidden-custom').toggle();
        
    });
});