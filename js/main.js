/**
 * Created by valeriy.abornyev on 1/19/2016.
 */

$(function(){

    'use strict';

    function showDemo(demoId){
        console.log(demoId);
    }

    var router = Router({
        '/demos/:demoId': showDemo
    });

    router.init("demos/report-basic-render");

    $('.dl-list').on('click', function(evt){
        var $target = $(evt.target);
        if ($target.is('a')){

            $(this)
                .find('.dl-list__item--selected')
                .removeClass('dl-list__item--selected');

            $target
                .parent()
                .addClass('dl-list__item--selected');
        }
    });

    $('.icon-list').on('click', function () {
        $('.main-container').addClass('l-offscreen--open-left');
    });

    $('.icon-cross').on('click', function () {
        $('.main-container').removeClass('l-offscreen--open-left');
    });

    var contentHeight = $(window).height() - $('.header-container').height() -1;
    $('.left-sidebar').height(contentHeight);
    $('.main-content').height(contentHeight);
});
