(function() {
  'use strict';

 var module = angular
    .module('qcn', ['ngTouch', 'ngResource', 'ngComponentRouter', 'toastr']);

    module.value("$routerRootComponent","movieApp");
})();
