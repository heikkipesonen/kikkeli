(function() {
  'use strict';

  angular
    .module('lahiruoka')
    .controller('EditProductsController', EditProductsController);

  /** @ngInject */
  function EditProductsController($scope, $state, $meteor, $stateParams, Producers, Products) {
    var vm = this;

    // vm.model = $scope.$meteorObject(Producers, {
    //   _id: $stateParams._id
    // }, false);

    // $scope.$meteorSubscribe('producers',{_id: $stateParams._id});
    // $scope.$meteorSubscribe('products', { producer_id: $stateParams._id });
    // vm.products = $scope.$meteorCollection(Products, false);

    // console.log(vm.model)
    // console.log(vm.products)
  }


})();
