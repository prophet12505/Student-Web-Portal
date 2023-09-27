var nameList=["KRINALBEN PATEL","RJ SUL","MILTON CHAN","AJAV S.DHINDSA","SHEA KENNEDY","DANIEL LAMANN","PARIS MORAVEK","GUMTAS SINGH SIDHU","YUANYAN XV"];
var desctiption=[""];

var ProfileDisplay=false;

function showProfile(index){

    if(!ProfileDisplay){
        $(".panel-hover").css("visibility", "visible");
        $(".panel-hover").css("top", "4vw");
        ProfileDisplay=true;
        $("#panel-profile-photo").attr("src", "./img/"+index+".png");

        $("#panel-profile-name").html(nameList[index-1]);
        //bio display
        $("#panel-profile-bio").html(desctiption[index-1]);
    }
}
function hideProfile(){
    if(ProfileDisplay){
        $(".panel-hover").css("visibility", "hidden");
        $(".panel-hover").css("top", "-50vw");
        ProfileDisplay=false;
    }
    
}
