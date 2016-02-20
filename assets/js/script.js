$(document).ready(function() {

    $(".fa.fa-bars").click(function(event) {
        setTimeout(function() {
            $("#sidebar").show();
        }, 1);
    });

    $("#content").click(function(event) {
        if ($(".fa.fa-bars").css("display") == "block" && $("#sidebar").css("display") == "block") {
            $("#sidebar").hide();
        }
    });

});
