$(document).ready(function() {
    var slideshow = $("#slideshow");
    var index = 0;
    var max_index = 5;

    function cycleImage(i) {
        var slides = $(".slide");
        var currSlide = $(".active.slide"); 
        var nextSlide = $(slides[next(i)]); 

        nextSlide.css("z-index", 2);
        currSlide.fadeOut(200, function() {
            currSlide.css("z-index", 1).show().removeClass("active");
            nextSlide.css("z-index", 3).addClass("active");
        }); 
    }

    function next(i) {
        return i + 1 == max_index ? 0 : i + 1;
    }

    var interval;
    function resetInterval() {
        interval = setInterval(function() {
            $("ul.tabs").tabs("select_tab", "pic" + next(index));
        }, 2000);
    }
    resetInterval();

    $("li.tab.cols3 > a").click(function() {
        if (index != parseInt(this.innerHTML) - 1) {
            cycleImage(parseInt(this.innerHTML) - 1);
            index = parseInt(this.innerHTML) - 1;
        }
    });

    $("ul.tabs").tabs();
});
