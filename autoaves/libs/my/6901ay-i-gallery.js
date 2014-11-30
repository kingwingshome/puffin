/**
 * Created by keyj on 2014/11/21.
 */

function init() {
    $("#myCarousel").swiperight(function() {
        $(this).carousel('prev');
    });
    $("#myCarousel").swipeleft(function() {
        $(this).carousel('next');
    });
}

$(document).ready(init);