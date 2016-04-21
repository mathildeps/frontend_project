(function(){
var app = angular.module('store', []);

var gem = [{
	name: 'Citizen Eco-Drive Mens Watch',
	price: 260.90,
	description: 'Watch for men'
},
{
	name: 'Mens Faux-Leather Bomber Jacket',
	price: 120.00,
	description: 'Very Nice jacket'
},
{
	name: 'Dell Inspiron 13.3 Touchscreen Laptop',
	price: 478.90,
	description: 'Good tablet for you'
}];

app.controller('StoreController', function(){
	this.products = gem;
});



})();
