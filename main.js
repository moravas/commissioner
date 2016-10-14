var app = angular.module("app", ["ngRoute"]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/new', {
            templateUrl: 'view/config.html',
            controller: 'configController'
        }).
        when('/debug', {
            templateUrl: 'view/debug.html',
            controller: 'debugController'
        }).
        otherwise({
            template: "<h1>404 Not found</h1>"
        });
}]);

app.controller("configController", ["$scope", function ($scope) {
    $scope.schema = schema;
    $scope.enumerate = function (n) {
        return new Array(n);
    };
}]);

app.controller("debugController", ["$scope", function ($scope) {
}]);

app.filter("metaFilter", function () {
    return function (partition) {
        var res = Object.assign({}, partition);
        if (res.hasOwnProperty("meta")) {
            delete res.meta;
        }

        return res;
    };
});
