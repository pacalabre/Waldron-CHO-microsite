
// Calendar Plugin

var eventData = [
  {
    "date": "2016-10-19",
    "badge": false,
    "title": "CHO event",
    "body":"<p></p>",
    "footer":"Seattle"
  },
  {
    "date": "2016-10-23",
    "badge": false,
    "title": "CHO Event",
    "body":"<p></p>",
    "footer":"Portland"
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
})



