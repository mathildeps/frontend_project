(function(){
var app = angular.module('store', ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'pages/productpage.html',
        controller: 'StoreController'
      }).
      when('/basket/:productId', {
        templateUrl: 'pages/basket.html',
        controller: 'PhoneDetailCtrl'
      }).
        when('/contact', {
        templateUrl: 'pages/contact.html',
        controller: 'FormController'
      }).
      otherwise({
        redirectTo: '/Home'
      });
}]);


var daily = [{
	name: 'Citizen Eco-Drive Mens Watch',
	price: 260.90,
  image: 'images/ur.png'
},
{
	name: 'Mens Faux-Leather Bomber Jacket',
	price: 120.00,
   image: 'images/bumper.png'
},
{
	name: 'Dell Inspiron 13.3 Touchscreen Laptop',
	price: 478.90,
   image: 'images/tablet.png'
},
{
  name: 'Panasonic Lumix DMC-GH4',
  price: 250.00,
   image: 'images/kamera.png'
}];

var popular = [{
  name: 'Nike Mercurial Superfly IV FG',
  price: 299.99,
  image: 'images/sko.png'
},
{
  name: 'JZ CHIEF brand Designer Women Bag',
  price: 49.90,
   image: 'images/taske.png'
},
{
  name: 'Samsung Gear VR Virtual Reality',
  price: 120.00,
   image: 'images/virtuel.png'
},
{
  name: 'Rayban Italy Sunglasses',
  price: 250.00,
   image: 'images/sol.png'
}];

app.controller('StoreController', function($scope){

  $scope.basket = [];

	this.products = daily;
  this.popularproducts = popular;

  $scope.putIntoBasket = function(prod) {
    $scope.basket.push(prod);

    console.log($scope.basket);
  }

});



app.controller('FormController', function($scope) {
  $scope.contactform = {};

  $scope.sendform = function() {
    $scope.contactform = {};
    console.log("Sådan");
  }
});

})();


