(function(){

    angular.module('angularSpa', [
    'ngRoute'
    ])
    .config(function($routeProvider){
        $routeProvider
        .when('/home', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
          })
        .otherwise({
            redirectTo: '/home'
          });
    });

})();
