//Contemplamento - JQuery

$("#readmain, #playmain, #remembermain").hide();

function toggleTo(){
    if($("#tomain").is(":hidden")){
        $("#tomain").show();
        $("#readmain, #playmain, #remembermain").hide();
    }
}

function toggleRead(){
    if($("#readmain").is(":hidden")){
        $("#readmain").show();
        $("#tomain, #playmain, #remembermain").hide();
    }
}

function togglePlay(){
    if($("#playmain").is(":hidden")){
        $("#playmain").show();
        $("#tomain, #readmain, #remembermain").hide();
    }
}

/*function toggleSee(){
    if($("#seemain").is(":hidden")){
        $("#seemain").show();
        $("#tomain, #readmain, #playmain, #remembermain").hide();
    }
}*/

function toggleRemember(){
    if($("#remembermain").is(":hidden")){
        $("#remembermain").show();
        $("#tomain, #readmain, #playmain").hide();
    }
}

function protected(e){
    var password = "ilovemyself";
    var ask = prompt('Digite a senha.', '');
    var readid = e.target.id;
    if (ask.toLowerCase() == password){
        switch (readid){
            case 'loveletter':
                window.open("read/loveletter.html", target="_blank");
                break;
            default:
                break;
        }
    }else{
        alert("Errada.");
    }
    
}