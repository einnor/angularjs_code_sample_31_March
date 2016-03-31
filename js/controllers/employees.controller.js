var employeeApp = angular
                        .module('employeeApp',[])
                        .controller('employeeController',function($scope,$http){
                          $http.get('employees/employees.json').success(function(data) {
                            $scope.employees = data.employees;
                          });
                        });
