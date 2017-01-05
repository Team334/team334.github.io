$(document).ready(function() {
    window.setInterval(function(){
      var timeleft = getTimeRemaining(kickoff);
      $('.daysleft').text(timeleft.days);
      $('.hoursleft').text(timeleft.hours);
      $('.minutesleft').text(timeleft.minutes);
      $('.secondsleft').text(timeleft.seconds);
    },1000);
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
var kickoff = 'January 07 2017 10:30:00 GMT-0500';
function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
