/**
 * Created by Hira on 9/22/2015.
 */

app.controller('contactCtrl', function ($scope, $http, $location, sharedMethods, Category){

  $scope.user = JSON.parse(localStorage.getItem('user'))
  console.log($scope.user)
  if(!$scope.user)
  {
    $location.path('/');
  }

  $scope.logout = sharedMethods.logout;
  $scope.categories = Category.query();

  $scope.fetchCategoryWiseCards = function(category){
    $location.path('/gallery/'+category);
  }

  $scope.fetchOrders = function(user_id){
    $location.path('/orders/'+user_id);
  }



});

