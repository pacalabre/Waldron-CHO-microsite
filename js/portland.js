

// Calendar Plugin

var eventData = [
  {
    "date": "2017-02-15",
    "badge": true,
    "title": "Driving Business Results Through Fearless HR",
    "body":"<p>economy. Examine five historical perceptions that have dogged HR over the years; and hear evidence, research and examples to suggest a bold future in which HR drives business results and enables talent and innovation to flourish.</p>",
    "footer":"Barran Liebman LLP 601 SW 2nd Avenue Suite 2300 Portland, OR"
  },

  {
    "date": "2017-06-01",
    "badge": true,
    "title": "Why Diversity Programs Fail And What Works Better",
    "body":"<p>Businesses started taking diversity very seriously in the late 1990's and early 2000's after several high profile lawsuits resulting in over $500-million in settlements rocked corporate America. Since then, despite huge capital investment and the appointment of Chief Diversity Officers everywhere, most diversity programs have not increased diversity and some have even made matters worse.</p>",
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

// Contact Form

var txtArea = document.getElementById("txtArea");
var choMessage= document.getElementById("choMessage");
var eventsMessage = document.getElementById("eventsMessage");

$('input[type=checkbox]').change(
    function(){
        if (choMessage.checked && eventsMessage.checked) {
            txtArea.value =  choMessage.value +" and "+  eventsMessage.value;
        }
        else if (choMessage.checked) {
            txtArea.value = choMessage.value;
        } else if (eventsMessage.checked) {
            txtArea.value = eventsMessage.value;
        }
    });
