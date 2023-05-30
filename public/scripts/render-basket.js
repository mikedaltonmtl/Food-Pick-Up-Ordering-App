// Add the cookie items to the basket on page load
const renderBasket = function() {
  $.ajax({
    method: 'GET',
    dataType: 'json',
    url: '/checkout',
  })
  .done(response => {
    console.log('page load cookie response:', response);
    let checkoutItem = '';
    const $checkoutItems = $('#checkout_Items');
    let totalCost = 0;
    for (const itemKey in response) {
      let item = response[itemKey];
      checkoutItem = `
      <li>
        <div class="checkout-item-row">
          <div class="checkout-item-quantity">
            <p>${item.quantity}</p>
          </div>
          <p id="checkout_item_title" class="checkout-item-title">${item.itemName}</p>
          <p id="checkout_item_price" class="checkout-item-price">${item.itemPrice}</p>
        </div>
        <p id="checkout_item_desc" class="checkout-item-description">${item.itemDescription}</p>
        <button id="remove_item" class="checkout-item-remove">Remove</button>
      </li>
    `;
    $checkoutItems.append(checkoutItem);
    totalCost += Number(item.itemPrice.slice(3));
    }
    $('#order-total').text(`CA$${totalCost.toFixed(2)}`);
  });
};
