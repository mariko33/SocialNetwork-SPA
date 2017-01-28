'use strict'

var app=angular.module('myApp', [
    'ngRoute'


]);

app.constant('baseServiceUrl','http://softuni-social-network.azurewebsites.net/api/');

app.config( function ($routeProvider){

    $routeProvider.when('/',{
        templateUrl:'templates/register.html',
        controller:'RegisterController'
    });
    $routeProvider.when('/home',{
        templateUrl:'templates/home.html',
        controller:'HomeController'
    });

  $routeProvider.otherwise({redirectTo:'/'})

});