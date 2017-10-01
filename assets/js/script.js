$(document).ready(function() {
    if (getTimeRemaining(kickoff).total > 0){
      var nextevent = kickoff;
      startcountdown(nextevent);
      $('.nextevent').text('Kickoff');
    }
    else if(getTimeRemaining(buildseasoned).total > 0){
      var nextevent = buildseasoned;
      startcountdown(nextevent);
      $('.nextevent').text('End of build season');
    }
    else if(getTimeRemaining(comp).total > 0 ){
      var nextevent = comp;
      startcountdown(nextevent);
      $('.nextevent').text('New York Regional competition');
    }
    else{
      $('footer').hide();
    }
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
var kickoff = 'January 06 2018 10:30:00 GMT-0500';
var buildseasoned = 'February 17 2018 20:30:00 GMT-0500';
var comp = 'March 22 2018 10:00:00 GMT-0500';
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
function startcountdown(nextevent){
  window.setInterval(function(){
    var timeleft = getTimeRemaining(nextevent);
    $('.daysleft').text(timeleft.days);
    $('.hoursleft').text(timeleft.hours);
    $('.minutesleft').text(timeleft.minutes);
    $('.secondsleft').text(timeleft.seconds);
  },1000);
}
