//William Smyth May
//2013-11-25
//This is the script file to display the possible order items on the order page.

$(function() {
	renderPizza();
	renderDrink();
	renderDessert();
});

//Renders the pizzas into the order page
function renderPizza() {
	var temp = $('.pizza');
	var place = $('.pizzas');
	for (var i = 0; i < com.dawgpizza.menu.pizzas.length; i++) {
		var pizza = com.dawgpizza.menu.pizzas[i];
		var item = temp.clone();
		item.find('h3.name').html(pizza.name);
		item.find('p.description').html(pizza.description);
		item.find('p.prices').html('S: ' + pizza.prices[0] + ' M: ' + pizza.prices[1] + ' L: ' + pizza.prices[2]);
		item.find('.add-to-cart').attr('data-name', pizza.name);
		item.find('button.small').attr('data-price', pizza.prices[0]);
		item.find('button.medium').attr('data-price', pizza.prices[1]);
		item.find('button.large').attr('data-price', pizza.prices[2]);
		item.removeClass('template');
		place.append(item);
	}
}

//renders the drinks into the order page.
function renderDrink() {
	var temp = $('.drink');
	var place = $('.drinks');
	for (var i = 0; i < com.dawgpizza.menu.drinks.length; i++) {
		var drink = com.dawgpizza.menu.drinks[i];
		var item = temp.clone();
		item.find('h3.name').html(drink.name + ' - ' + drink.price);
		item.find('.add-to-cart').attr('data-name', drink.name);
		item.find('.add-to-cart').attr('data-price', drink.price);
		item.removeClass('template');
		place.append(item);
	}
}

//Renders desserts with unique prices into the order page
function renderDessert() {
	var temp1 = $('.dessert');
	var place1 = $('.desserts');
	for (var i = 0; i < com.dawgpizza.menu.desserts.length; i++) {
		var dessert = com.dawgpizza.menu.desserts[i];
		var item1 = temp1.clone();
		item1.find('h3.name1').html(dessert.name + ' - ' + dessert.price);
		item1.find('.add-to-cart').attr('data-name', dessert.name);
		item1.find('.add-to-cart').attr('data-price', dessert.price);
		item1.removeClass('template');
		place1.append(item1);
	}
}