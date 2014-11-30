/**
 * Created by admin on 2014/11/21.
 */


function init() {
    initVars();
    initEvents();
}

function initVars() {

    $('#myCarousel').carousel('pause');

    $("#myCarousel").swiperight(function() {
        $(this).carousel('prev');
    });
    $("#myCarousel").swipeleft(function() {
        $(this).carousel('next');
    });
}

function initEvents() {

}

$(document).ready(init);