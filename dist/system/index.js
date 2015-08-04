System.register(['./swaggerAureliaHttpClientGenerator'], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(aurelia, configCallback) {
    if (configCallback !== undefined && typeof configCallback === 'function') {
      configCallback();
    }
  }

  return {
    setters: [function (_swaggerAureliaHttpClientGenerator) {
      _export('SwaggerAureliaHttpClientGenerator', _swaggerAureliaHttpClientGenerator.SwaggerAureliaHttpClientGenerator);
    }],
    execute: function () {}
  };
});