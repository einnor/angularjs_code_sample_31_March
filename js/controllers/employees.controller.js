var employeeApp = angular
                        .module('employeeApp',[])
                        .controller('employeeController',function($scope,$http,$log){
                          $http.get('employees/employees.json').success(function(data) {
                            $log.info(data);
                            $scope.employees = data.employees;
                            $scope.employeeListView = 'views/employeeList.html';
                          });
                        });
