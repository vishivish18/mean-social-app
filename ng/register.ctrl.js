angular.module('app')
.controller('RegisterCtrl',function($scope,UserSvc){
	$scope.register = function(username,password){
		UserSvc.register(username,password)
		.then(function(response){
			
		})
		.catch(function (err){
			console.log(err)
		})
	}

})
