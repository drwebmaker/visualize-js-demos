/**
 * Created by valeriy.abornyev on 1/19/2016.
 */
var contentHeight = $(window).height() - $('.header-container').height() -1;
$('.left-sidebar').height(contentHeight);
$('.main-content').height(contentHeight);

function openList() {
    $('.main-container').addClass('l-offscreen--open-left')
}
function closeList() {
    $('.main-container').removeClass('l-offscreen--open-left')
}