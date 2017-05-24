

// Calendar Plugin

var eventData = [
  {
    "date": "2017-01-19",
    "badge": true,
    "title": "The Neuroscience of Diversity and Inclusion",
    "body":"<p>From Awareness to Change</p>",
    "footer":"701 5TH Avenue, Suite 6100 Columbia Center Seattle, WA"
  }
  ,{
    "date": "2017-03-08",
    "badge": true,
    "title": "Design Thinking",
    "body":"<p>Design Thinking</p>",
    "footer":"701 5TH Avenue, Suite 6100 Columbia Center Seattle, WA"
  }, 
  {
    "date": "2017-06-22",
    "badge": true,
    "title": "Microsoft's Growth Mindset Cultural Transformation",
    "body":"<p>Growth Mindset</p>",
    "footer":"11200 Southeast 6th Bellevue, WA 98004"
  },
  {
    "date": "2017-10-25",
    "badge": true,
    "title": "How Enterprise Leaders Build Game Changing Organizations",
    "body":"<p>Enterprise Leaders</p>",
    "footer":"701 5TH Avenue, Suite 6100 Columbia Center Seattle, WA"
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






