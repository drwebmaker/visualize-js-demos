/**
 * Created by valeriy.abornyev on 1/19/2016.
 */
var sidebarHeight = $(window).height() - $('.header-container').height();
$('.left-sidebar').height(sidebarHeight);
$('.main-content').height(sidebarHeight);