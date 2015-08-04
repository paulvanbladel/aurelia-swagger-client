'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _signalfxSwaggerClientGenerator = require('signalfx/swagger-client-generator');

var SwaggerAureliaHttpClientGenerator = _interopRequireWildcard(_signalfxSwaggerClientGenerator);

var _aureliaHttpClient = require('aurelia-http-client');

var _aureliaFramework = require('aurelia-framework');

var SwaggerAureliaClient = (function () {
    function SwaggerAureliaClient(http) {
        _classCallCheck(this, _SwaggerAureliaClient);

        this.http = http;
    }

    _createClass(SwaggerAureliaClient, [{
        key: 'create',
        value: function create(schema) {
            var _this = this;

            return SwaggerClientGenerator['default'](schema, function (error, request) {
                var headers = new _aureliaHttpClient.Headers(request.headers);
                var requestMessage = new _aureliaHttpClient.HttpRequestMessage(request.method, request.url, request.body, headers);
                return _this.http.send(requestMessage).then(function (response) {
                    return response.content;
                });
            });
        }
    }]);

    var _SwaggerAureliaClient = SwaggerAureliaClient;
    SwaggerAureliaClient = (0, _aureliaFramework.inject)(_aureliaHttpClient.HttpClient)(SwaggerAureliaClient) || SwaggerAureliaClient;
    return SwaggerAureliaClient;
})();

exports.SwaggerAureliaClient = SwaggerAureliaClient;