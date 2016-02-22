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

    $("nav.section").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $("div[id=" + $(this).attr("name").toLowerCase() + "]").position().top 
        }, 750);
    });

    $(document).scroll(function() {
        var loc = $(this).scrollTop()
        $(".section").each(function() {

            if (loc >= ($(this).position().top - 5) && $(this).attr("name") != "") {
                detach();
                attach($(this).attr("name"));
            } else if ($(this).attr("name") == "") {
                detach();
            }
        });        
    });

    $(".collapsible-header").click(function() {
        var shadow = this;
        setTimeout(function() {
            if ($(shadow).hasClass("active")) {
                $(shadow).next().find(".row").each(function() {
                    var height = 0;
                    $(this).find(".card").each(function() {
                        if ($(this).height() > height) {
                            height = $(this).height();
                        }
                    });
                    $(this).find(".card").each(function() {
                        $(this).css("min-height", height);
                    });
                });
            }
        }, 1)
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
