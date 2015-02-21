angular.module('tx', [])
    .controller('txCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

        $scope.detailsId = $routeParams["id"];
 
    }]);