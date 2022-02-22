//Contemplamento - JQuery

$("#readmain, #playmain, #seemain, #remembermain").hide();

function toggleTo(){
    if($("#tomain").is(":hidden")){
        $("#tomain").show();
        $("#readmain, #playmain, #seemain, #remembermain").hide();
    }
}

function toggleRead(){
    if($("#readmain").is(":hidden")){
        $("#readmain").show();
        $("#tomain, #playmain, #seemain, #remembermain").hide();
    }
}

function togglePlay(){
    if($("#playmain").is(":hidden")){
        $("#playmain").show();
        $("#tomain, #readmain, #seemain, #remembermain").hide();
    }
}

function toggleSee(){
    if($("#seemain").is(":hidden")){
        $("#seemain").show();
        $("#tomain, #readmain, #playmain, #remembermain").hide();
    }
}

function toggleRemember(){
    if($("#remembermain").is(":hidden")){
        $("#remembermain").show();
        $("#tomain, #readmain, #playmain, #seemain").hide();
    }
}