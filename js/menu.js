var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches
var promoCode;
var promoPrice;
var fadeTime = 200;
var taxRate = 0.20;

/* Assign actions */
$('.quantity input').change(function () {
   updateQuantity(this);
});

$('.remove button').click(function () {
   removeItem(this);
});

$('.basket-empty button').click(function () {
   emptyBasket(this);
})

$(document).ready(function () {
   updateSumItems();
});

$(".next").click(function () {
   if (animating) return false;
   animating = true;

   current_fs = $(this).parent();
   next_fs = $(this).parent().next();

   //activate next step on progressbar using the index of next_fs
   $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

   //show the next fieldset
   next_fs.show();
   //hide the current fieldset with style
   current_fs.animate({
      opacity: 0
   }, {
      step: function (now, mx) {
         //as the opacity of current_fs reduces to 0 - stored in "now"
         //1. scale current_fs down to 80%
         scale = 1 - (1 - now) * 0.2;
         //2. bring next_fs from the right(50%)
         left = (now * 60) + "%";
         //3. increase opacity of next_fs to 1 as it moves in
         opacity = 1 - now;
         current_fs.css({
            'transform': 'scale(' + scale + ')',
            'position': 'absolute'
         });
         next_fs.css({
            'left': left,
            'opacity': opacity
         });
      },
      duration: 800,
      complete: function () {
         current_fs.hide();
         animating = false;
      },
      //this comes from the custom easing plugin
      easing: 'easeInOutBack'
   });
});

$(".previous").click(function () {
   if (animating) return false;
   animating = true;

   current_fs = $(this).parent();
   previous_fs = $(this).parent().prev();

   //de-activate current step on progressbar
   $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

   //show the previous fieldset
   previous_fs.show();
   //hide the current fieldset with style
   current_fs.animate({
      opacity: 0
   }, {
      step: function (now, mx) {
         //as the opacity of current_fs reduces to 0 - stored in "now"
         //1. scale previous_fs from 80% to 100%
         scale = 0.8 + (1 - now) * 0.2;
         //2. take current_fs to the right(50%) - from 0%
         left = ((1 - now) * 50) + "%";
         //3. increase opacity of previous_fs to 1 as it moves in
         opacity = 1 - now;
         current_fs.css({
            'left': left
         });
         previous_fs.css({
            'transform': 'scale(' + scale + ')',
            'opacity': opacity
         });
      },
      duration: 800,
      complete: function () {
         current_fs.hide();
         animating = false;
      },
      //this comes from the custom easing plugin
      easing: 'easeInOutBack'
   });
});

$(".submit").click(function () {
   return false;
});


// ------------ THIS IS FOR THE DELIVERY SECTION WHEN YOU COOSE A COUNTRY --------------

function changeCountry(element) {
   var text = element.options[element.selectedIndex].text;
   document.getElementById("displayCountry").innerHTML = text;
}


// ------------ THIS IS FOR THE DELIVERY SECTION WHEN YOU CHANGE THE DELIVERY OPTION --------------


$('#delivery-option1').on('change', function () {
   if ($(this).parent().data('doc') == '1') {
      $('.shipping_price').html('£9.99');
   }
});

$('#delivery-option2').on('change', function () {
   if ($(this).parent().data('doc') == '2') {
      $('.shipping_price').html('£6.99');
   }
});

$('#delivery-option3').on('change', function () {
   if ($(this).parent().data('doc') == '3') {
      $('.shipping_price').html('£3.99');
   }
});

$('#delivery-option4').on('change', function () {
   if ($(this).parent().data('doc') == '4') {
      $('.shipping_price').html('£0.00');
   }
});

$('#delivery-option5').on('change', function () {
   if ($(this).parent().data('doc') == '5') {
      $('.shipping_price').html('£24.99');
   }
});