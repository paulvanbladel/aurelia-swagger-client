System.register([], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(aurelia, configCallback) {
    if (configCallback !== undefined && typeof configCallback === 'function') {
      configCallback();
    }
  }

  return {
    setters: [],
    execute: function () {}
  };
});