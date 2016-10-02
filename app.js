
var app = angular.module('bankBranch', ['ui.bootstrap'])
	

  	.controller('ServicesCtrl', ['$scope', '$http', function($scope, $http){
		$scope.bankUrl = "https://app.fyle.in/api/bank_branches?offset=0&limit=50&city=";
		$scope.city = 'BANGALORE';
		var bankName = '$scope.bank_name';	
		var cities = '$scope.city';
		$scope.getdata = function(){
			//return http promise from here
			//like wise I already have this in answer
			//one more thing
			//let me check it
		    return $http.get($scope.bankUrl+$scope.city).then(function(response){
		        $scope.services = response.data;
		        return $scope.services;
		    });
		}

		$scope.onChange = function(e){
		    return $scope.getdata();
		}

		
	}]);
