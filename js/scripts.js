var nameList=[];
var desctiption=[];

var ProfileDisplay=false;

function showProfile(index){

    if(!ProfileDisplay){
        $(".panel-hover").css("visibility", "visible");
        $(".panel-hover").css("top", "0");
        ProfileDisplay=true;
        $("#panel-profile-photo").attr("src", "./img/"+index+".png");
        $("#panel-profile-name").attr("innerHTML", nameList[index]);
    }
 }
 
function hideProfile(){
    if(ProfileDisplay){
        $(".panel-hover").css("visibility", "hidden");
        $(".panel-hover").css("top", "-50vw");
        ProfileDisplay=false;
    }
    
}
