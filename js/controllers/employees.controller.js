var employeeApp = angular
                        .module('employeeApp',[])
                        .controller('employeeController',function($scope,$http,$log,nameService){
                          $http.get('employees/employees.json').success(function(data) {
                            $log.info(data);
                            $scope.employees = data.employees;

                            $scope.process = nameService.processNames;
                            // $scope.transformNames = function(employee){
                            //   $scope.names =  nameService.processNames(employee);
                            //   $log.info($cope.names);
                            // }
                            $scope.employeeListView = 'views/employeeList.html';
                          });
                        });
