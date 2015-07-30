angular.module('app')
.controlle('ApplicationCtrl',function($scope){
	$scope.$on('login',function(_,user){
		$scope.currentUser = user
	})
})