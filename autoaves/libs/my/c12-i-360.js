/**
 * Created by keyj on 2014/11/21.
 */

function init() {
    initVars();
    initEvents();
}

function initVars() {
    resize_iframe_360();
}

function initEvents() {
    $(window).resize(function () {
        resize_iframe_360();
    });
}

function resize_iframe_360() {
    var panel_360_width = $("#panel-360").width();
    var new_height =  panel_360_width * 49/128;

    if(new_height > 434 )
    {
        new_height = 434;
    }
    else if(new_height <=434 && new_height>368)
    {
        new_height = 434;
    }
    else if(new_height <=368 && new_height>276)
    {
        new_height = 368;
    }
    else if(new_height <=276 && new_height>207)
    {
        new_height = 276;
    }
    else
    {
        new_height = 207;
    }

    $("#iframe-360").css({
        "height": new_height.toString() + "px"
    });
}

$(document).ready(init);