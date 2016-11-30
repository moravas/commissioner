function tabChanged(tableName) {
    var toHide = document.getElementsByClassName('partitionTable show');
    if (toHide[0] != null) {
        toHide[0].className = toHide[0].className.replace('show', 'hidden');
    }
    var toVisible = document.getElementById(tableName);
    if (toVisible != null) {
        toVisible.className = toVisible.className.replace('hidden', 'show');
    }
}

var app = angular.module("app", ["ngRoute"]);

app.config(['$routeProvider', function ($routeProvider) {
    Object.keys(project).forEach(function (operation) {
        $routeProvider.when('/' + operation, {
            templateUrl: 'view/config.html',
            controller: 'configController'
        })
    })

    $routeProvider.otherwise({
        template: "<h1>404 Not found</h1>"
    });
}]);

app.controller("configController", ["$scope", function ($scope) {
    $scope.schema = schema;
    $scope.project = project;
    $scope.tabChanged = tabChanged;
    $scope.enumerate = function (n) {
        return new Array(n);
    };
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
