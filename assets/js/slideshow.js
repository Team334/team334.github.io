$(document).ready(function() {
    var slideshow = $("#slideshow");
    var index = 0;
    var max_index = 5;

    function cycleImage(i) {
        var slides = $(".slide");
        var currSlide = $(".slide.active"); 
        var nextSlide = $(slides[next(i)]); 

        currSlide.removeClass("active");
        nextSlide.addClass("active");

        var tabs = $(".row.index .col.s1"); 
        var currTab = $(".active.col.s1");
        var nextTab = $(tabs[next(i)]);

        currTab.removeClass("active");
        nextTab.addClass("active");
    }

    function next(i) {
        return i + 1 == max_index ? 0 : i + 1;
    }

    var interval, timeout;
    function resetInterval() {
        interval = setInterval(function() {
            cycleImage(index);
            index = next(index);
        }, 4000);
    }
    resetInterval();

    $(".row.index .col.s1").click(function() {
        var selected = parseInt(this.children[0].innerHTML) - 2;
        cycleImage(selected);

        clearInterval(interval);
        clearTimeout(timeout);

        timeout = setTimeout(function() {
            resetInterval();
        }, 10000);
    });
});
