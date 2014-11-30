/**
 * Created by admin on 2014/11/21.
 */


function init() {
    initVars();
}

function initVars() {

    $("#myCarousel").swiperight(function() {
        $(this).carousel('prev');
    });
    $("#myCarousel").swipeleft(function() {
        $(this).carousel('next');
    });
}

$(document).ready(init);