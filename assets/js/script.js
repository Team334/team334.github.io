$(document).ready(function() {
    var slideshow = $("#slideshow");

    setInterval(function() {
        var active = $(".active.slide");
        var next = (active.next().length > 0) ? active.next() : $("#slideshow img:first");
        next.css("z-index", 2);
        active.fadeOut(1500, function() {
            active.css("z-index", 1).show().removeClass("active");
            next.css("z-index", 3).addClass("active");
        });
    }, 7000);

});
