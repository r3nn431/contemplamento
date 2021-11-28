//Contemplamento - JQuery

$(function(){
    $('#btn1').click(function(){
        $('p').fadeOut('slow');
    });
});

function saveCookie(){
    localStorage.setItem("scrl", document.getElementById("#menu").scrollTop);
}

function restoreCookie(){
    document.getElementById("#menu").innerHTML = localStorage.getItem("scrl");
    var scrl = localStorage.getItem("scrl");
    scrollTop = scrl;
}