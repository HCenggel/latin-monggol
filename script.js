var app = angular.module("myApp", []);
app.controller("myCtrl", ["$scope", "$interval", "$timeout", "$http", function ($scope, $interval, $timeout, $http) {
    $scope.egesig = [
        ['ᠠ','A'],
        ['ᠡ','E'],
        ['ᠢ','I'],
        ['ᠤ','O'],
        ['ᠣ','U'],
        ['ᠥ','V'],
        ['ᠦ','W'],
    ];
    $scope.list = [
        ['ᠠ', 'A'],
        ['ᠨ', 'N'],
        ['ᠪ', 'B'],
        ['ᠫ', 'P'],
        ['ᠬ', 'H'],
        ['ᠭ', 'G'],
        ['ᠮ', 'M'],
        ['ᠯ', 'L'],
        ['ᠰ', 'S'],
        ['ᠱ', 'X'],
        ['ᠲ', 'T'],
        ['ᠳ', 'D'],
        ['ᠴ', 'C'],
        ['ᠵ', 'J'],
        ['ᠶ', 'Y'],
        ['ᠷ', 'R'],
        ['ᠼ', 'CH'],
        ['ᠽ', 'ZH'],
        ['ᠿ', 'RH'],
        ['ᠸ', 'WH'],
        ['ᠹ', 'F'],
        ['ᠾ', 'H'],
        ['ᠺ', 'K'],
        ['ᡀ', 'LH'],
    ]
    $scope.bosud = [
        ['ᡁᠢ','zhi'],
        ['ᡂᠢ','chi'],
        ['ᠱᠢ','shi'],
        ['ᠡᠯ','er'],
        ['ᠰᠧ','si'],
    ]
}]);















