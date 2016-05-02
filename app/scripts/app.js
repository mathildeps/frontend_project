(function(){
var app = angular.module('store', ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'pages/productpage.html',
        controller: 'StoreController'
      }).
      when('/productdetail/:productId', {
        templateUrl: 'pages/productdetail.html',
        controller: 'DetailCtrl'
      }).
        when('/contact', {
        templateUrl: 'pages/contact.html',
        controller: 'FormController'
      }).
      otherwise({
        redirectTo: '/home'
      });
}]);


var daily = [{
	id: 1,
  name: 'Citizen Eco-Drive',
  description: 'Mens Watch',
	price: 260.90,
  beforeprice: 228.90,
  image: 'images/ur.png'
},
{
	id: 2,
  name: 'Mens Faux-Leather',
  description: 'Bomber Jacket',
	price: 120.00,
  beforeprice: 240.50,
  image: 'images/bumper.png'
},
{
  id: 3,
	name: 'Dell Inspiron 13.3',
  description: 'Touchscreen Laptop',
	price: 478.90,
  beforeprice: 799.90,
  image: 'images/tablet.png'
},
{
  id: 4,
  name: 'Panasonic',
  description: 'Lumix DMC-GH4',
  price: 250.00,
  beforeprice: 1000.00,
  image: 'images/kamera.png'
}];

var popular = [{
  id: 4,
  name: 'Nike Mercurial Superfly IV FG',
  price: 299.99,
  beforeprice: 320.00,
  image: 'images/sko.png'
},
{
  id: 5,
  name: 'JZ CHIEF brand Designer Women Bag',
  price: 49.90,
  image: 'images/taske.png'
},
{
  id: 6,
  name: 'Samsung Gear VR Virtual Reality',
  price: 120.00,
  image: 'images/virtuel.png'
},
{
  id: 7,
  name: 'Rayban Italy Sunglasses',
  price: 250.00,
  beforeprice: 1000.00,
  image: 'images/sol.png'
}];

var electronics = [{
  id: 8,
  name: 'Sony Playstation 4 PS4 Console 500GB',
  price: 449.95,
  image: 'images/play.png'
},
{
  id: 9,
  name: 'Samsung Galaxy S6 32GB 4G LTE',
  price: 500.00,
  image: 'images/phone.png'
},
{
  id: 10,
  name: 'Sharp Aquos LC-46LE700 46" HDTV LED TV',
  price: 365.90,
  image: 'images/tv.png'
},
{
  id: 11,
  name: 'Apple Watch Edition 38mm',
  price: 26.100,
  image: 'images/applew.png'
}];

app.controller('StoreController', function(){
	this.products = daily;
  this.popularproducts = popular;
  this.electronproducts = electronics;


});

app.controller('FormController', function(){
  this.contactform = {};

  this.sendform = function() {
    this.contactform = {};
    alert('Your message was sent');

  };
});

app.controller('DetailCtrl', ['$scope', '$routeParams', 'Product',
  function($scope, $routeParams, Product) {
    $scope.product = Product.get({productId: $routeParams.productId}, function(product) {
      $scope.mainImageUrl = product.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
}]);


})();


