$(document).ready(function() {
    var slideshow = $("#slideshow");
    var index = 0;
    var max_index = 5;

    function cycleToImage() {
        var slides = $(".slide");
        index = next(index);
        var currSlide = $(".active.slide"); 
        var nextSlide = $(slides[next(index)]); 


        nextSlide.css("z-index", 2);
        currSlide.fadeOut(200, function() {
        currSlide.css("z-index", 1).show().removeClass("active");
        nextSlide.css("z-index", 3).addClass("active");
        }); 
        $('#tabs').tabs('select_tab', "pic" + (index + 1));
    }

    function next(i) {
        return i + 1 == max_index ? 0 : i + 1;
    }

    setInterval(function() {
        cycleToImage(index);
    }, 7000);

    $("ul.tabs").tabs();
});
