var appServices = angular.module('appServices', ['ngResource']);

appServices.factory('Product', ['$resource',
  function($resource){
    return $resource('products/:productId.json', {}, {
      query: { 
      	method:'GET', params: { 
      	  productId:'product' }, 
      	  isArray:true }
    });
  }]);
