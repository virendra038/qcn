(function() {
  'use strict';

  angular
    .module('qcn')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
