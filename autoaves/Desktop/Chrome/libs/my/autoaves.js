/**
 * Created by admin on 2014/11/21.
 */


function init() {
    initVars();
    initEvents();
}

function initVars() {
    if (cheackIE()) {
        window.location.href='../IE/index.html';
    }

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


function initEvents() {

}

$(document).ready(init);