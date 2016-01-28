$(document).ready(function() {
    var slideshow = $("#slideshow");
    var index = 0;
    var max_index = 5;

    function cycleImage() {
        var slides = $(".slide");
        var currSlide = $(".active.slide"); 
        index = next(index);
        var nextSlide = $(slides[index]); 

        nextSlide.css("z-index", 2);
        currSlide.fadeOut(200, function() {
            currSlide.css("z-index", 1).show().removeClass("active");
            nextSlide.css("z-index", 3).addClass("active");
        }); 
    }

    function next(i) {
        return i + 1 == max_index ? 0 : i + 1;
    }

    function prev(i) {
        return i - 1 == -1 ? 4 : i - 1;
    }

    var interval;

    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(function() {
            $("ul.tabs").tabs("select_tab", "pic" + index);
        }, 2000);
    }
    resetInterval();

    $("li.tab.cols3 > a").click(function() {
        if (parseInt(this.innerHTML) != index) {
            index = prev(parseInt(this.innerHTML));
            cycleImage();
        }
        resetInterval();
    });

    $("ul.tabs").tabs();
});
