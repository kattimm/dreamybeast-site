$(document).ready(function() {
    var logo = $("#logo");
    var nav = $("#nav");
    var ul = $("ul");
    var content = $("#content-div");
    var desktop = null;



    // check to see if we're on desktop
    if ( $("#content-div").css("bottom") == "50px" ) {
        desktop = true;

        // remove link and ul for subnav
        $("#linkWork").remove();
        $("#navWork").remove();

        // build anchor for each link
        var webLink = "<a>web</a>";
        var printLink = "<a>print</a>";
        var photoLink = "<a>photo</a>";
        var graphicLink = "<a>graphic</a>";
        // add the id to each anchor
        var webLink = $(webLink).attr("id", "linkWeb");
        var printLink = $(printLink).attr("id", "linkPrint");
        var photoLink = $(photoLink).attr("id", "linkPhoto");
        var graphicLink = $(graphicLink).attr("id", "linkGraphic");
        var listItem = "<li></li>";
        // wrap each link in a list item tag
        var webLink = $(listItem).prepend(webLink);
        var printLink = $(listItem).prepend(printLink);
        var photoLink = $(listItem).prepend(photoLink);
        var graphicLink = $(listItem).prepend(graphicLink);
        // prepend each link into the nav bar
        $("#navUl").prepend(graphicLink);
        $("#navUl").prepend(photoLink);        
        $("#navUl").prepend(printLink);
        $("#navUl").prepend(webLink);

    }


    // sets every tab content to no-display to hide all tab content
    var hideAllTabs = function() {
        $("#webTab").removeClass("yes-display").addClass("no-display");
        $("#printTab").removeClass("yes-display").addClass("no-display");
        $("#photoTab").removeClass("yes-display").addClass("no-display");
        $("#graphicTab").removeClass("yes-display").addClass("no-display");
        $("#aboutTab").removeClass("yes-display").addClass("no-display");
    };

    
    // when you click a link...
    //
    //
    $("a").click(function() {

        // sets clicked link to variable
        var link = $(this);
        var linkId = link.attr("id");

        // opening the work submenu if work is clicked
        if ( linkId == "linkWork" ) {
            $("#navWork").toggleClass("yes-display");
        }

        if ( desktop === true ) {
        // DESKTOP BEHAVIORS
            // sets logo transform in css
            if ( $(logo).css( "transform" ) == "none" ) {
                $(logo).css({"transform": "translate(-88%, 120%) scale(0.4)"});
            } else { }
            
            // sets nav transform in css
            if ( $(nav).css( "transform" ) == "none" ){
                $(nav).css({"transform": "translate(0, 575%)", "width": "90%"});
                $(ul).css("text-align", "left");
            } else { }
        }


        // if any link besides blog is clicked...
        if ( linkId !== "linkBlog" && linkId !== "linkWork" ) {
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

        // display the content bg div when link is selected,
        // unless the work submenu is opened 
        if ( linkId !== "linkWork" ) {
            // sets timeout on tab display if the content bg isn't open yet
            if ( $(content).hasClass("content-hide")) {
                setTimeout(displayTab, 1500);
            } else {
                setTimeout(displayTab, 200);
            }
        
            // assigns the content div the class content-view (shows bg)
            if ( $(content).hasClass("content-hide")) {
                $(content).addClass("content-view").removeClass("content-hide");
            }
        }

    });
    
    // when you click the logo, 
    $(logo).click(function() {
        
        // DESKTOP BEHAVIORS
        // function to replace logo and nav to default
        var reset = function() {
            $(logo).css("transform", "");
            $(nav).css({"transform": "", "width": "40%"});
            $(ul).css("text-align", "center");
        };
    

        // function to hide content bg div
        var hideContent = function() {
            $(content).removeClass("content-view").addClass("content-hide");
        };

        if ( desktop === true ) {
            setTimeout(reset, 200);
        }
        hideAllTabs();
        setTimeout(hideContent, 100);
        $("#navWork").toggle();
     
    });
    
});
