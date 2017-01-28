'use strict'

app.controller('HomeController',function ($scope, $q, $location,usersServices) {
    usersServices.userHome().then(function (success) {
        console.log(success);
        
    },function(err){
        console.log(err);
      
    });
})
