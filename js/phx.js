

// Calendar Plugin

var eventData = [
  {
    "date": "2017-01-24",
    "badge": true,
    "title": "Why Diversity Programs Fail",
    "body":"<p>And what works better</p>",
    "footer":"2415 E Camelback Rd Suite 800, Phoenix, AZ 85016"
  },
  {
    "date": "2017-06-04",
    "badge": true,
    "title": "The Purpose Effect",
    "body":"<p>The Impact of Aligning Personal, Role, & Organization Purpose</p>",
    "footer":"2415 E Camelback Rd Suite 800, Phoenix, AZ 85016"
  },
    {
    "date": "2017-10-12",
    "badge": true,
    "title": "Driving Change Leadership",
    "body":"<p>Leveraging HR's Role as Strategic Change Agent</p>",
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
