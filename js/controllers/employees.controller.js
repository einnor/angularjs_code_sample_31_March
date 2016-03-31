(function() {
  'use strict';

  angular
    .module('employeeApp')
    .controller('employeesController', function($scope, $http, $log, nameService) {

      $http
        .get('employees/employees.json')
        .success(function(data) {
          $log.info(data);
          $scope.employees = data.employees;
          $scope.process = function(obj){
            return nameService.processNames(obj);
          };
        });
    });
})();
