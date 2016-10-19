$(function() {
    $(".rslides").responsiveSlides({
      auto:true,
    });
  });

var eventData = [
  {
    "date": "2016-10-19",
    "badge": false,
    "title": "YEEZY",
    "body":"<p>Ultra Light</p>",
    "footer":"Key Arena"
  },
  {
    "date": "2016-10-23",
    "badge": false,
    "title": "Bulls",
    "body":"<p>Ultra Light</p>",
    "footer":"Definitely not at Key Arena"
  }
];

$(document).ready(function () {
        $("#my-calendar").zabuto_calendar({
          today: true,
          data: eventData,
          modal: true
        });
    })

// $("#my-calendar").zabuto_calendar( { data: [{
//   "date": "2016-10-19",
//   "badge": true,
//   "title": "YEEZY",
//   "body":"<p>Ultra Light</p>",
//   "footer":"Key Arena"
// }] } );


