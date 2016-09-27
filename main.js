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

function getNamedTable(name) {
    var table = document.createElement("table");
    var row = table.insertRow(-1);
    var cell = row.insertCell(-1);
    cell.innerHTML = name;
    return table;
}

function createEnumerationTables() {
    Object.keys(schema.enumeration).forEach(function (node) {
        var table = getNamedTable(node);
        var row = table.insertRow(-1);
        Object.keys(schema.enumeration[node]).forEach(function (key) {
            var cell = row.insertCell(-1);
            cell.innerHTML = key;
        })

        document.getElementById("project").appendChild(table);
    })
}

function createStandalonTables() {
    Object.keys(schema.standalone).forEach(function (node) {
        var table = getNamedTable(node);
        Object.keys(schema.standalone[node]).forEach(function (key) {
            var row = table.insertRow(-1);
            var cell = row.insertCell(-1);
            cell.innerHTML = key;
            cell = row.insertCell(-1);
            cell.appendChild(generateInputField(schema.standalone[node][key]));
        })

        document.getElementById("project").appendChild(table);
    })
}

angular.module("app", [])
    .controller("ctrl", ["$scope", function ($scope) {
        createStandalonTables();
        createEnumerationTables();
    }])