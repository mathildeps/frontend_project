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
  name: 'Citizen Eco-Drive Mens Watch',
	price: 260.90,
  image: 'images/ur.png'
},
{
	id: 2,
  name: 'Mens Faux-Leather Bomber Jacket',
	price: 120.00,
   image: 'images/bumper.png'
},
{
  id: 3,
	name: 'Dell Inspiron 13.3 Touchscreen Laptop',
	price: 478.90,
   image: 'images/tablet.png'
},
{
  id: 4,
  name: 'Panasonic Lumix DMC-GH4',
  price: 250.00,
   image: 'images/kamera.png'
}];

var popular = [{
  id: 4,
  name: 'Nike Mercurial Superfly IV FG',
  price: 299.99,
  image: 'images/sko.png'
},
{
  id: 5,
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

app.controller('StoreController', function(){
	this.products = daily;
  this.popularproducts = popular;


});



app.controller('FormController', function(){
  this.contactform = {};

  this.sendform = function() {
    this.contactform = {};
    console.log("Sådan");
    alert('Your message was sent');

  }
});

app.controller('DetailCtrl', ['$scope', '$http','$routeParams',
  function($scope, $routeParams) {
    $scope.productId = $routeParams.productId;
}]);

})();


