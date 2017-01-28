'use strict'

app.factory('authServices',function ($http, $q, notifyServices, baseServiceUrl) {

    return{

        register:function (data) {
            var deferred=$q.defer();
            var request={
                method:'post',
                url:baseServiceUrl+'users/Register',
                data:data
            };
            $http(request).then(function (response) {
                deferred.resolve(response);
                notifyServices.showInfo('You are successfully registered');
                console.log(response);
                sessionStorage['currentUser'] = JSON.stringify(response);
                console.log()
            },function (err) {
                notifyServices.showError(err);
                console.log(err)
            });

            return deferred.promise;

        },
        login:function (data) {
            var deferred=$q.defer();
            var request={
                method:'post',
                url:baseServiceUrl+'users/Login',
                data:data
            };
            $http(request).then(function (response) {
                deferred.resolve(response);
                sessionStorage['currentUser']=JSON.stringify(response);
                console.log(response);
                notifyServices.showInfo('You are successfully logged');


            },function (err) {
                notifyServices.showError(err);
                console.log(err)
            });
            return deferred.promise;
        },
        
        getCurrentUser:function () {
            var userObject=sessionStorage['currentUser'];
            if(userObject){
                return JSON.parse(sessionStorage['currentUser']);
            };
        },

        getAuthHeaders:function () {
            var headers = {};
            var currentUser = this.getCurrentUser();
            if(currentUser) {
                headers['Authorization'] = 'Bearer ' + currentUser.data.access_token;
                
                
            }
            return headers;

        },
        getCurrentUserName:function () {
            var currentUser=this.getCurrentUser();
            if(currentUser){
                var currentUserName=currentUser.userName;
            }
            return currentUserName;
        }


    }

})
