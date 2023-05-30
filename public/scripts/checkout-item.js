// Combine the GET response values with the cookie session cart data, to get these values.
let itemName = "";
let itemDescription = "";
let itemPrice = 0;
let quantity = 0;
let pricesArr = [];

$('#popup-item').on('click', '#checkoutButton', function(event) {
  event.preventDefault();
  itemName = $(this).parent().children('p.popupName').text();
  itemDescription = $(this).parent().children('p.popupDesc').text();
  itemPrice = $(this).parent().children('button#checkoutButton').children('p#donutTotal').text();
  quantity = $(this).parent().children('div.quantityButtons').children('p#donutQuantity').text();
  itemId = Number($(this).closest('form').attr('id').slice(6));

  $.ajax({
    method: 'POST',
    dataType: 'json',
    url: '/checkout',
    data: { itemId, itemName, itemPrice, itemDescription, quantity }
  })
    .done(() => {
      renderBasket();
      // Remove the pop-up and background opacity
      $('#popup-background').css('display', 'none');
      $('#popup-item').empty();
    });
});
