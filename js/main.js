$(function() {
    initApp()
});


function initApp(){
    addEvent();
    $(".rslides").responsiveSlides();
}

function addEvent(){
    $("#pull").on("click", function(e) {
       // e.preventDefault();    
        if($("nav .open-menu").attr("data-state") === "open"){
            $("nav .open-menu").slideToggle().attr("data-state", "close");
        }else{
            $("nav .open-menu").slideToggle().attr("data-state", "open");
        }
    });
    
   $(window).resize(rotetScreen);
}



function rotetScreen(){
    menushowHide();
}

function menushowHide(){
    var winWidth = $(document).width();   
    if(winWidth >768) {
         $("nav .open-menu").css("display","block");
    }else{
        if($("nav .open-menu").attr("data-state") ==="open"){
            $("nav .open-menu").css("display","none");
        }
    }
 }