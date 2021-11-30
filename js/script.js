//Contemplamento - JQuery

$(function(){
    $('#btn1').click(function(){
        $('p').fadeOut('slow');
    });
});

function saveCookie(){
    localStorage.setItem("scrl", document.getElementById("#menu").scrollLeft);
};

function restoreCookie(){
    document.getElementById("#menu").scrollLeft = localStorage.getItem("scrl");
};