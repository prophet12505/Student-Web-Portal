
function setProfile(index){
    $(".panel-hover").css("visibility", "visible");
    $("#panel-profile-photo").attr("src", "./img/"+index+".png");
}
function hideProfile(){
    $(".panel-hover").css("visibility", "hidden");
}
