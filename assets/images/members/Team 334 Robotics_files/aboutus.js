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
var card_height = 0;
$(document).ready(function() {
     $('#personmodal').modal();
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
    $('.person').click(function(){
      $('#personmodal').find('h4').text($(this).find('.title').text());
      ($(this).find('.name').text())? $('#personmodal').find('h5').html("<div class=title>"+$(this).find('.name').text()+"</div>") : $('#personmodal').find('h5').html(' ');
      $('#personmodal').find('.quote').html($(this).find('.quote').html());
      $('#personmodal').modal('open');
    });
    $(".person").hover(
      function() {
        $( this ).addClass( "faded" );
        $(this).css("cursor","pointer");
      }, function() {
        $( this ).removeClass( "faded" );
        $(this).css('cursor','default');
      }
    );
    $(".collapsible-header").click(function() {
        var shadow = this;
        setTimeout(function() {
            if ($(shadow).hasClass("active")) {
                $(shadow).next().find(".row").each(function() {
                    $(this).find(".card").each(function() {
                        if ($(this).height() > card_height) {
                            card_height = $(this).height();
                        }
                    });

                    $(this).find(".card").each(function() {
                        $(this).css("height", card_height);
                        var text = $(this).find('.card-content');
                        $(text).hide();
                        var parent = $(text).parent();
                        var img = $(parent).find('img').height()
                        var title = $(parent).find('.title').height();
                        var title2 = $(parent).find('.title2').height();
                        $(parent).css('height',img+title+title2)
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
