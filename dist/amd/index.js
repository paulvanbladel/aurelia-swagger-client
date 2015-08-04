define(['exports', './swaggerAureliaHttpClientGenerator'], function (exports, _swaggerAureliaHttpClientGenerator) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.configure = configure;
  Object.defineProperty(exports, 'SwaggerAureliaHttpClientGenerator', {
    enumerable: true,
    get: function get() {
      return _swaggerAureliaHttpClientGenerator.SwaggerAureliaHttpClientGenerator;
    }
  });

  function configure(aurelia, configCallback) {
    if (configCallback !== undefined && typeof configCallback === 'function') {
      configCallback();
    }
  }
});