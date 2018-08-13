var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
$scope.myFunction = function () {
	$http.post('https://reqres.in/api/login', 
    {username: $scope.email, password: $scope.password})
    .then(function success(response){
        console.log(response.data);
        console.log(response.status);
        var status = response.status;
        alert("status: "+response.status);
    },
    function error(response) {
        console.log('failed', response);
        alert("status: "+response.status);
    });
  //alert($scope.email);
  //alert($scope.password);
}
});

function showAction() {
	$("#password-section").hide();
	$("#submit-button").hide();
	$("#show-action").hide();
	$("#restore-action").show();
	$("#action-button").show();
}

function restoreAction() {
	$("#password-section").show();
	$("#submit-button").show();
	$("#show-action").show();
	$("#restore-action").hide();
	$("#action-button").hide();
}