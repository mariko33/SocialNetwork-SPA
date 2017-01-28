'use strict'

app.factory('usersServices',function ($http,$q, baseServiceUrl, notifyServices,authServices) {
    return{
        userHome:function () {
          var deferred=$q.defer()
            var request={
                method:'get',
                url:baseServiceUrl+'me',
                headers:authServices.getAuthHeaders()

            };
            $http(request).then(function (success) {
                notifyServices.showInfo("Welcome");
                console.log(success);
               // console.log(authServices.getAuthHeaders());
            },function (err) {
                notifyServices.showError(err);
                
                
            });
            
            return deferred.promise;

        }


    }

})
