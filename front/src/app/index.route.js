(function() {
  'use strict';

  angular
    .module('lahiruoka')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('root', {
        resolve:{
          mapData:function ($http){
            return $http.get('app/data.json').then(function(response){
              return response.data;
            });
          }
        },
        url: '/map',
        templateUrl: 'app/root/index.html',
        controller: 'RootController',
        controllerAs: 'root'
      })

      .state('root.location', {
        url: '/:id',
        resolve:{
          location:function (mapData, $q, $stateParams) {
            var d = $q.defer();
            var marker = _.find(mapData, {id:$stateParams.id});
            if (marker) {
              d.resolve(marker);
            } else {
              d.reject();
            }

            return d.promise;
          }
        },
        templateUrl: 'app/location/index.html',
        controller: 'LocationController',
        controllerAs: 'location'
      });

    $urlRouterProvider.otherwise('/map');
  }

})();
