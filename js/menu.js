/* ---------------------------------------------------------------------

   JAVASCRIPT FOR PROGRESS BAR MENU
  
---------------------------------------------------------------------- */

$(document).ready(function () {
  //Initialize tooltips
  $('.nav-tabs > li a[title]').tooltip();

  // METHOD FOR THE PROGRESS BAR 
  $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

    var $target = $(e.target);

    if ($target.parent().hasClass('disabled')) {
      return false;
    }
  });

  // NEXT STEP METHOD - WHEN BUTTON CLICKED TAKES TO THE NEXT SECTION
  $(".next-step").click(function (e) {

    var $active = $('.progressbar .nav-tabs li.active');
    $active.next().removeClass('disabled');
    nextTab($active);
    window.scrollTo(0, 0);
  });


  // PREVIOUS STEP METHOD - WHEN BUTTON CLICKED TAKES TO THE PREVIOUS SECTION
  $(".prev-step").click(function (e) {

    var $active = $('.progressbar .nav-tabs li.active');
    prevTab($active);
    window.scrollTo(0, 0);

  });
});

// NEXT TAB METHOD - WHEN BUTTON CLICKED TAKES TO THE CLICKED STEP
function nextTab(elem) {
  $(elem).next().find('a[data-toggle="tab"]').click();
}

// PREV TAB METHOD - WHEN BUTTON CLICKED TAKES TO THE PREVIOUS STEP
function prevTab(elem) {
  $(elem).prev().find('a[data-toggle="tab"]').click();
}

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