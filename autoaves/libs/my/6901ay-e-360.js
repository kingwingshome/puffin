/**
 * Created by admin on 2014/11/21.
 */


function init() {
    initVars();
    initEvents();
}

function initVars() {

}

function cheackIE(){
    var appName = navigator.appName,
        userAgent = navigator.userAgent;
    if(appName == 'Microsoft Internet Explorer'){
        return true;
    }
    else
    {
        if (!!window.ActiveXObject || "ActiveXObject" in window)
            return true;
        else
            return false;
    }
    return false;
}

function navigationIE() {

    if (navigator.userAgent.indexOf("MSIE") > 0) {
        //是否是IE浏览器
        if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
            //6.0

            window.location.href = 'Desktop/IE/index.html';
            console.log('IE 6.0');
        }
        if (navigator.userAgent.indexOf("MSIE 7.0") > 0) {
            //7.0

            window.location.href = 'Desktop/IE/index.html';
            console.log('IE 7.0');
        }
        if (navigator.userAgent.indexOf("MSIE 8.0") > 0) {
            //8.0

            window.location.href = 'Desktop/IE/index.html';
            console.log('IE 8.0');
        }
        if (navigator.userAgent.indexOf("MSIE 9.0") > 0) {
            //9.0

            window.location.href = 'Desktop/IE/index.html';
            console.log('IE 9.0');
        }
        if (navigator.userAgent.indexOf("MSIE 10.0") > 0) {
            //10.0

            window.location.href = 'Desktop/IE10/index.html';
            console.log('IE 10.0');
        }
    } else {
        window.location.href = 'Desktop/IE10/index.html';
    }
}

function initEvents() {

}

$(document).ready(init);