(function() {
  'use strict';

  angular
    .module('employeeApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('employees', {
          url: "/",
          templateUrl: "views/employeeList.html",
          controller: "employeesController"
        })
        .state('employee', {
          url: "/employees/{id:int}",
          templateUrl: "views/employee.html",
          controller: "employeeController"
        });

        $urlRouterProvider.otherwise('/');
    });
})();
