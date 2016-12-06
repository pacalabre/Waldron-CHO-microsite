

// Calendar Plugin

var eventData = [
  {
    "date": "2017-01-24",
    "badge": true,
    "title": "Why Diversity Programs Fail",
    "body":"<p>And what works better</p>",
    "footer":"2415 E Camelback Rd Suite 800, Phoenix, AZ 85016"
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
