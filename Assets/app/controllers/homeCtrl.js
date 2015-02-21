angular.module('home', [])
    .controller('homeCtrl',['$scope','$http', function ($scope, $http) {
        
        $scope.goToDetails = function (id) {
            window.location = "#/tx/" + id;
        };
        $scope.items = [
            {
                "from": "Alice",
                "to": "Bob",
                "message": "Hi"
            },
             {
                 "from": "Alice2",
                 "to": "Bob2",
                 "message": "Hiya!"
             }
        ];
    }]);