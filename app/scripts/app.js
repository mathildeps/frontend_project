(function(){
var app = angular.module('store', ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/productpage', {
        templateUrl: 'pages/products.html',
        controller: 'StoreController'
      }).
      when('/basket/:productId', {
        templateUrl: 'pages/basket.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/Home'
      });




var gem = [{
	name: 'Citizen Eco-Drive Mens Watch',
	price: 260.90,
	description: 'Watch for men',
  image: 'http://shop.msf.dk/images/9136-brun-l%C3%A6derrem-dame.png'
},
{
	name: 'Mens Faux-Leather Bomber Jacket',
	price: 120.00,
	description: 'Very Nice jacket',
   image: 'http://shop.msf.dk/images/9136-brun-l%C3%A6derrem-dame.png'
},
{
	name: 'Dell Inspiron 13.3 Touchscreen Laptop',
	price: 478.90,
	description: 'Good tablet for you',
   image: 'http://shop.msf.dk/images/9136-brun-l%C3%A6derrem-dame.png'
}];

app.controller('StoreController', function(){
	this.products = gem;
});



})();


