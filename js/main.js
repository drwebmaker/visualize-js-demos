/**
 * Created by valeriy.abornyev on 1/19/2016.
 */

$(function(){

    'use strict';

    function SideBar(){

        var self = this;
        self.$el = $('.dl-list');

        self.$el.find('.dl-list__item').on('click', function(){
             var itemId = $(this).attr('data-id');
             self.selectItem(itemId);
        });
    }

    SideBar.prototype.selectItem = function(itemId){

        var $item = this.$el.find("[data-id=" + itemId + "]");

        this.$el.find('.dl-list__item--selected')
                .removeClass('dl-list__item--selected');

        $item.addClass('dl-list__item--selected');
    };


    $('.icon-list').on('click', function () {
        $('.main-container').addClass('l-offscreen--open-left');
    });

    $('.icon-cross').on('click', function () {
        $('.main-container').removeClass('l-offscreen--open-left');
    });

    var contentHeight = $(window).height() - $('.header-container').height() -1;
    $('.left-sidebar').height(contentHeight);
    $('.main-content').height(contentHeight);

    /*----tabs switcher---*/
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    function showDemo(demoId){
        sideBar.selectItem(demoId);
    }

    var sideBar = new SideBar();

    var router = Router({
        '/demos/:demoId': showDemo
    });

    router.init("demos/report-basic-render");

});
