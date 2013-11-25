//William Smyth May
//2013-11-25
//This is the script to place an order with Dawg Pizza

//document ready function
$(function(){
    //create a cart model as a simple object with
    //the properties we eventually need to post to
    //the server
    var cart = {
        name: null,
        address1: null,
        zip: null,
        phone: null,
        items: [] //empty array
    }; //cart data

    //click event handler for all buttons with the
    //style class 'add-to-cart'
    $('.add-to-cart').click(function(){
        //use the attributes on the button to construct
        //a new cart item object that we can add to the
        //cart's items array
        var newCartItem = {
            type: this.getAttribute('data-type'),
            name: this.getAttribute('data-name'),
            size: this.getAttribute('data-size'),
            price: this.getAttribute('data-price')
        };
		
        //push the new item on to the items array
        cart.items.push(newCartItem);

        //render the cart's contents to the element
        //we're using to contain the cart information
        //note that you would need a <div> or some
        //other grouping element on the page that has a
        //style class of 'cart-container'
        renderCart(cart, $('.cart-container'));
    });
	
	//This function clears out the entire cart.
	$('.clear-all').click(function() {
		cart.items = [];
		renderCart(cart, $('.cart-container'));
	});

	//This function confirms that the user has placed a valid order
	//Submits the order to the dawgpizza orders page.
    $('.place-order').click(function(){
		var signupForm = $('.customer-information');
        var name = signupForm.find('input[name="name"]');
        var nameInfo = name.val();
        var address = signupForm.find('input[name="address"]');
        var addressInfo = address.val();
        var zip = signupForm.find('input[name="zip"]');
        var zipCode = zip.val();
        var phone = signupForm.find('input[name="tele"]');
        var phoneNum = phone.val();
		
		//verification that information has been entered and that the price is right.
		if (nameInfo && addressInfo && zipCode && phoneNum) {
			var price = Number(0);
			for (var i = 0; i < cart.items.length; i++) {
				var item = cart.items[i];
				price += item.price;
			}
			if (price > 20) {
				cart.name = nameInfo;
				cart.address1 = addressInfo;
				cart.zip = zipCode;
				cart.phone = phoneNum;
				$('.final-order').val(JSON.stringify(cart));
				$('.order').submit();
			} else {
				alert('Please verify that your order total is greater than $20');
			}
		} else {
			alert('Please verify that you have filled out all of the fields.');
		}
    });

}); //doc ready

// renderCart()
// renders the current cart information to the screen
// parameters are:
//  - cart (object) reference to the cart model
//  - container (jQuery object) reference to the container <div>
//

function renderCart(cart, container) {
    var idx, item;
    
    //empty the container of whatever is there currently
    container.empty();
    var temp = $('.cart-item');
    var orderItem;
	var total = Number(0);

    //for each item in the cart, adds it to the screen
    for (idx = 0; idx < cart.items.length; ++idx) {
        item = cart.items[idx];
        orderItem = temp.clone();
        if (item.type == 'pizza') {
			orderItem.find('p.name').html(item.name + ' - ' + item.size + ' - ' + item.price);
		} else {
			orderItem.find('p.name').html(item.name + ' - ' + item.price);
		}
        orderItem.removeClass('template');
		orderItem.find('.remove-from-cart').attr('data-index', idx);
		total += parseInt(item.price);
		container.append(orderItem);
    }
	
	//Displaying the current order totals
	var price = $('.price');
	price.find('p.sub').html('Sub Total: ' + total);
	price.find('p.tax').html('Order Tax: ' + (total * .095).toFixed(2));
	price.find('p.grand').html('Grand Total: ' + (total * 1.095).toFixed(2));
	
	//removes an item from the cart
    $('.remove-from-cart').click(function() {
        var idxToRemove = this.getAttribute('data-index');
        cart.items.splice(idxToRemove, 1);
        renderCart(cart, $('.cart-container'));
    });
} //renderCart()

