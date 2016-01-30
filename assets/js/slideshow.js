$(document).ready(function() {
    var slideshow = $("#slideshow");
    var index = 0;
    var max_index = 5;

    function cycleImage(i) {
        var slides = $(".slide");
        var currSlide = $(".active.slide"); 
        var nextSlide = $(slides[next(i)]); 

        transition(currSlide, nextSlide, 1);

        var cards = $(".preview");
        var currCard = $(".preview.active");
        var nextCard = $(cards[next(i)]);

        transition(currCard, nextCard, 6);
    }

    function transition(prev, next, min_z) {
        next.css("z-index", min_z + 1);
        prev.fadeOut(200, function() {
            prev.css("z-index", min_z).show().removeClass("active");
            next.css("z-index", min_z + 2).addClass("active");
        }); 
    }

    function next(i) {
        return i + 1 == max_index ? 0 : i + 1;
    }

    var interval;
    function resetInterval() {
        interval = setInterval(function() {
            $("ul.tabs").tabs("select_tab", "pic" + next(index));
        }, 2500);
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
