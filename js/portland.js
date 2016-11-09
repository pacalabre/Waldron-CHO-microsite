

// Calendar Plugin

var eventData = [
  {
    "date": "2016-12-01",
    "badge": true,
    "title": "The Purpose Effect",
    "body":"<p>The Impact of Aligning Personal, Role, and Organizational Purpose</p>",
    "footer":"Barran Liebman LLP 601 SW 2nd Avenue Suite 2300 Portland, OR"
  }

];

$(document).ready(function () {
        $("#my-calendar").zabuto_calendar({
          today: true,
          data: eventData,
          modal: true
        });
    })


// Mobile Menu

$('#mobileBtn').click(function(){
  $('#mobileMenu').toggleClass('hide-menu');
  $('#navTop').toggleClass('mobile-menu-clicked-background');
  $('#mobileBtn').toggleClass('mobile-menu-clicked-hamburger');
})
