var nameList=["KRINALBEN PATEL","RJ SUL",
"MILTON CHAN","AJAV S.DHINDSA",
"SHEA KENNEDY","DANIEL LAMANN",
"PARIS MORAVEK","GUMTAS SINGH SIDHU",
"YUANYAN XV"
];
var desctiption=[];

var showProfile=false;

function collapseProfile(index) {
    var pannelHover=$(".panel-hover");
    var pannelHoverWrapper=$(".panel-hover-wrapper");
    if(pannelHover.hasClass('open')) {
        pannelHover.removeClass('open');
        pannelHover.height(0);
        $(".panel-hover").css("visibility", "hidden");
    } else {
        $(".panel-hover").css("visibility", "visible");
        pannelHover.addClass('open');
        pannelHover.height(pannelHoverWrapper.outerHeight(true));
    }
    $("#panel-profile-photo").attr("src", "./img/"+index+".png");
};
function setProfile(index){
    if(!showProfile){
        console.log('profile showed');
        $('#panel-profile-name').attr('innerHTML',nameList[index-1])
        //$(".panel-hover").css("visibility", "visible");
        // $(".panel-hover").css("hight", "50vw");
        $(".panel-hover").addClass("collapse");
        showProfile=true;
    }
    else{
        hideProfile();
    }
    
    $("#panel-profile-photo").attr("src", "./img/"+index+".png");
}
function hideProfile(){
    //$(".panel-hover").css("visibility", "hidden");
    $(".panel-hover").removeClass("collapse");
    showProfile=false;
}
