

// Calendar Plugin

var eventData = [
  {
    "date": "2017-01-19",
    "badge": true,
    "title": "The Neuroscience of Diversity and Inclusion",
    "body":"<p>From Awareness to Change</p>",
    "footer":"701 5TH Avenue, Suite 6100 Columbia Center Seattle, WA"
  }
  // ,{
  //   "date": "2016-10-23",
  //   "badge": false,
  //   "title": "CHO Event",
  //   "body":"<p></p>",
  //   "footer":"Portland"
  // }
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



