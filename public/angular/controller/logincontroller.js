app.controller('logincontroller',function($scope,$rootScope,$state){

		$scope.user ="admin@xyz.com";
		$scope.pass = "pass";

$scope.loginverified=function(carrymodel){

	// alert(JSON.stringify(carrymodel));

	if($scope.user===carrymodel.email&&$scope.pass===carrymodel.password){
		$state.go('dashboard');

	}else{
		alert("please enter correct username and password");
	}
}

})