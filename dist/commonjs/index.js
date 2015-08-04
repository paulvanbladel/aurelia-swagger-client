'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.configure = configure;

var _swaggerAureliaHttpClientGenerator = require('./swaggerAureliaHttpClientGenerator');

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