function generateInputField(fieldType) {
    if (fieldType.startsWith("array")) { return null; }

    var match = /(.*)<(.*)>/.exec(fieldType);
    var inputType = (match == null ? fieldType : match[1]);
    var valueSet = (match == null ? 0 : match[2]);
    switch (inputType) {
        case "ipv4": {
            var input = document.createElement("input");
            input.type = "text";
            input.placeholder = "XXX.XXX.XXX.XXX";
            return input;
        }
        case "int": {
            var input = document.createElement("input");
            input.type = "number";
            input.min = 0;
            input.max = Math.pow(2, valueSet * 8) - 1;
            return input;
        }
        case "string": {
            var input = document.createElement("input");
            input.type = "text";
            input.maxLength = valueSet;
            return input;
        }
        case "enum": {
            var input = document.createElement("select");
            var options = valueSet.split(",");
            for (index = 0; index < options.length; index++) {
                var option = document.createElement("option");
                option.text = options[index];
                option.value = index;
                input.appendChild(option);
            }

            return input;
        }
    }
}

var app = angular.module("app", []);
app.filter("metaFilter", function () {
    return function (partition) {
        var res = Object.assign({}, partition);
        if (res.hasOwnProperty("meta")) {
            delete res.meta;
        }

        return res;
    };
});

app.controller("ctrl", ["$scope", function ($scope) {
    $scope.schema = schema;
    $scope.generateInputField = generateInputField;
    $scope.enumerate = function (n) {
        return new Array(n);
    };
}]);
