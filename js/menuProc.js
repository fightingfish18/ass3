//William Smyth May
//2013-11-07
//This is the JavaScript file for rendering the Dawg Pizza Menu.

//Window onload function.  Calls the render functions.
//all functions require the com.dawgpizza.menu variable to be present.
$(function() {
	renderPizza();
	renderDrink();
	renderDessert();
});

//Renders the pizzas into two columns based on vegetarian or meat.
function renderPizza() {
	var temp = $('.pizza');
	var col1 = $('.one');
	var col2 = $('.two');
	for (var i = 0; i < com.dawgpizza.menu.pizzas.length; i++) {
		var pizza = com.dawgpizza.menu.pizzas[i];
		var item = temp.clone();
		item.find('h2.name').html(pizza.name);
		item.find('p.description').html(pizza.description);
		item.find('p.prices').html('S: ' + pizza.prices[0] + ' M: ' + pizza.prices[1] + ' L: ' + pizza.prices[2]);
		item.removeClass('template');
		if (pizza.vegetarian) { //where column is decided
			col2.append(item);
		} else {
			col1.append(item);
		}
	}
}

//renders the drinks into the menu.
function renderDrink() {
	var temp = $('.drink');
	var cont = $('.three');
	for (var i = 0; i < com.dawgpizza.menu.drinks.length; i++) {
		var drink = com.dawgpizza.menu.drinks[i];
		var item = temp.clone();
		item.find('h2.name').html(drink.name);
		item.removeClass('template');
		cont.append(item);
	}
}

//Renders desserts with unique prices into the menu
function renderDessert() {
	var temp1 = $('.dessert');
	var cont1 = $('.four');
	for (var i = 0; i < com.dawgpizza.menu.desserts.length; i++) {
		var dessert = com.dawgpizza.menu.desserts[i];
		var item1 = temp1.clone();
		item1.find('h2.name1').html(dessert.name + ' - ' + dessert.price);
		item1.removeClass('template');
		cont1.append(item1);
	}
}