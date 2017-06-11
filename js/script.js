$(document).ready(function(){

    var logo = $("#logo");
    var nav = $("#nav");
    var ul = $("ul");
    var content = $("#content-div");
    
    // when you click a link...
    $("a").click(function() {
        // sets logo transform in css
        if ( $(logo).css( "transform" ) == 'none' ) {
            $(logo).css({"transform": "translate(-88%, 120%) scale(0.4)"});
        } else {
             
        }
        
        // sets nav transform in css
        if ( $(nav).css( "transform" ) == 'none' ){
            $(nav).css({"transform": "translate(0, 575%)", "width": "90%"});
            $(ul).css("text-align", "left");
        } else {
            
        }
        
        // assigns the content-hide div the class content-view 
        if ( $(content).hasClass("content-hide")) {
            $(content).addClass("content-view").removeClass("content-hide");
        } 
    });
    
    // when you click the logo, replace logo, nav, and content to default
    $(logo).click(function() {
        $(logo).css("transform", "");
        $(nav).css({"transform": "", "width": "40%"});
        $(ul).css("text-align", "center");
        $(content).removeClass("content-view").addClass("content-hide");
    });
    
    
});

