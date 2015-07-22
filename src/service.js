angular.module('Test', [])
.service('TestService', function () {
    this.test = function () { return true;};
});