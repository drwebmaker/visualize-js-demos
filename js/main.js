/**
 * Created by valeriy.abornyev on 1/19/2016.
 */

define(function (require) {

    'use strict';

    var $ = require('jquery'),
        underscore = require('underscore'),
        director = require('director');

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


    function showDemo(demoId){

        sideBar.selectItem(demoId);

        var $iframe = $('#iframe');
        $iframe.ready(function() {
            $.get("./demos/" + demoId + "/demo.html", function(data) {
                $iframe.contents().find("body").empty().append(data);
            });
            //$iframe.contents().find("body").empty().append(templ);
            //console.log(templ);
        });

        //$(".iframe-container").empty();
        //$.get("./demos/" + demoId + "/demo.html", function(template) {
        //    $.tmpl(template).appendTo(".iframe-container .result");
        //
        //});
        //$(".iframe-container #target").empty();
        //$.tmpl( "<script src='./${demoId}/demo.js'></script>", { "demoId" : demoId }).appendTo(".iframe-container #target");

    }

    var sideBar = new SideBar();

    var router = Router({
        '/demos/:demoId': showDemo
    });

    router.init("demos/report-basic-render");

    $('.tabs-menu a').click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });



});

