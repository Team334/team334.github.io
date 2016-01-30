function attach(crumb) {
        var crumbs = $(".nav");
        crumb = "<a href=\"#!\" class=\"breadcrumb\">" + crumb + "</a>";
        crumbs.append(crumb);
    }

function detach() {
    var crumbs = $(".nav");
    if (crumbs.children().length > 1) {
        crumbs.children()[crumbs.children().length - 1].remove();
    }
}

$(document).ready(function() {

    $(document).scroll(function() {
        var loc = $(this).scrollTop()
        $(".section").each(function() {

            if (loc >= $(this).position().top && $(this).attr("name") != "") {
                detach();
                attach($(this).attr("name"));
            } else if ($(this).attr("name") == "") {
                detach();
            }
        });        
    });

    $(".section").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $("div[id=" + $(this).attr("name").toLowerCase() + "]").position().top 
        }, 750);
    });

    $(document).on("mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function() {
      $('html, body').stop().animate();
    });

    $("a[href=#aboutus]").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0 
        }, 750);
    });
});
