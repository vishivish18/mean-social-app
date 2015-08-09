angular.module('app')
.controller('LoginCtrl',function($scope,UserSvc){
	$scope.login = function(username,password){
		UserSvc.login(username,password)
		.then(function(response){
			console.log("printing response")
			console.log(response.data)
			$scope.$emit('login',response.data)
			
		})
	}
})