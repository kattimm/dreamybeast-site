$(document).ready(function(){

    var logo = $("#logo");
    var nav = $("#nav");
    var ul = $("ul");
    var content = $("#content-div");

    // sets every tab content to no-display to hide all tab content
    var hideAllTabs = function() {
        $("#webTab").removeClass("yes-display").addClass("no-display");
        $("#printTab").removeClass("yes-display").addClass("no-display");
        $("#photoTab").removeClass("yes-display").addClass("no-display");
        $("#graphicTab").removeClass("yes-display").addClass("no-display");
        $("#aboutTab").removeClass("yes-display").addClass("no-display");
    };

    
    // when you click a link...
    $("a").click(function() {

        // sets clicked link to variable
        var link = $(this);
        var linkId = link.attr("id");
        console.log(linkId);

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
        
        // if any link besides blog is clicked...
        if ( linkId !== "linkBlog") {
            // hides all tab contents
            hideAllTabs();           
        }

        // when a link is clicked, displays that tab's content 
        var displayTab = function() {
            if ( linkId == "linkWeb") {
                $("#webTab").addClass("yes-display");
            } else if ( linkId == "linkPrint") {
                $("#printTab").addClass("yes-display");    
            } else if ( linkId == "linkPhoto") {
                $("#photoTab").addClass("yes-display");
            } else if ( linkId == "linkGraphic") {
                $("#graphicTab").addClass("yes-display");
            } else if ( linkId == "linkAbout") {
                $("#aboutTab").addClass("yes-display");
            }
        };

        // sets timeout on tab display if the content bg isn't open yet
        if ( $(content).hasClass("content-hide")) {
            setTimeout(displayTab, 1500);
        } else {
            setTimeout(displayTab, 200);
        }

        // assigns the content-hide div the class content-view (shows bg)
        if ( $(content).hasClass("content-hide")) {
            $(content).addClass("content-view").removeClass("content-hide");
        }

    });
    
    // when you click the logo, 
    $(logo).click(function() {
        
        // function to replace logo and nav to default
        var reset = function() {
            $(logo).css("transform", "");
            $(nav).css({"transform": "", "width": "40%"});
            $(ul).css("text-align", "center");
        }

        // function to hide content bg div
        var hideContent = function() {
            $(content).removeClass("content-view").addClass("content-hide");
        }

        setTimeout(reset, 200);
        hideAllTabs();
        setTimeout(hideContent, 100);
     
    });
    
});

/*
when a tab is selected, the tab content is set to display
*/