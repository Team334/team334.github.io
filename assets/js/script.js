$(document).ready(function() {
    var slideshow = $("#slideshow");

    setInterval(function() {
        var activeSlide = $(".active.slide");
        var next = (activeSlide.next().length > 0) ? activeSlide.next() : $("#slideshow img:first");
        next.css("z-index", 2);
        activeSlide.fadeOut(1500, function() {
            activeSlide.css("z-index", 1).show().removeClass("active");
            next.css("z-index", 3).addClass("active");
        });

        $("ul.tabs").tabs('select_tab', 'pic2')

    }, 7000);

    $("ul.tabs").tabs();
});
