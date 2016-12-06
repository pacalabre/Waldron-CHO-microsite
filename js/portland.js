

// Calendar Plugin

var eventData = [
  {
    "date": "2017-02-15",
    "badge": true,
    "title": "Driving Business Results Through Fearless HR",
    "body":"<p>economy. Examine five historical perceptions that have dogged HR over the years; and hear evidence, research and examples to suggest a bold future in which HR drives business results and enables talent and innovation to flourish.</p>",
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
