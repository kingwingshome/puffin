/**
 * Created by admin on 2014/11/21.
 */


function init() {
    initVars();
    initEvents();
}

function initVars() {

}

function initEvents() {
    $("#btn-video-1").on("click", function () {
        $("#iframe-video").attr({src:'pages/C12/I/video/1.html'});
    });
    $("#btn-video-2").on("click", function () {
        $("#iframe-video").attr({src:'pages/C12/I/video/2.html'});
    });
    $("#btn-video-3").on("click", function () {
        $("#iframe-video").attr({src:'pages/C12/I/video/3.html'});
    });
    $("#btn-video-4").on("click", function () {
        $("#iframe-video").attr({src:'pages/C12/I/video/4.html'});
    });
}

$(document).ready(init);