angular.module('Api', [])
    .factory('Api', ['$http','$location', function($http,$location){
        var baseUrl = SiteGlobals.apiUrl;
        var defaultData = {
            authToken: SiteGlobals.authToken()
        };

        var post = function ( url, data, config ) {
            if(!data) data = defaultData;
            else angular.extend(data,defaultData);
            return $http.post( baseUrl+url, data, config );
        };

        var checkAndHandleError = function (response) {
            if (response.data.error) {
                $.showMessage(response.data.data, 'danger');
                if(response.data.errorType == 'login')
                    $location.path("/login");
            }
        };

        // build the api and return it
        return {
            post: post,
            checkAndHandleError: checkAndHandleError
        }

    }]);