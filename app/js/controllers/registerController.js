'use strict'

app.controller('RegisterController', function ($scope,$location,$q,authServices,notifyServices) {
   $scope.registerData={};
    $scope.registerUser=function (registerData) {
        authServices.register(registerData).then(function (sucess) {
            console.log(sucess)
            console.log("Register");
            authServices.getCurrentUser();
            authServices.getAuthHeaders();
            $location.path('/home');
        },function (err) {
            console.log(err)

        })
    }

    $scope.loginData={};
    $scope.loginUser=function (loginData) {
        authServices.login(loginData).then(function (success) {
            console.log(success);
            authServices.getCurrentUser();
            authServices.getAuthHeaders();
            $location.path('/home');
        },function (err) {
            console.log(err)
        })
    }
});
