var nameList=[];
var desctiption=[];

var showProfile=false;


function setProfile(index){
    if(!showProfile){
        $(".panel-hover").css("visibility", "visible");
        showProfile=true;
    }
    else{
        hideProfile();
    }
    // if($(".panel-hover").css("visibility") === "hidden")
    // {
       
    // }
    
    $("#panel-profile-photo").attr("src", "./img/"+index+".png");
}
function hideProfile(){
    $(".panel-hover").css("visibility", "hidden");
    showProfile=false;
}
