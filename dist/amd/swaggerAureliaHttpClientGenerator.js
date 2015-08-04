define(['exports', 'signalfx/swagger-client-generator', 'aurelia-http-client', 'aurelia-framework'], function (exports, _signalfxSwaggerClientGenerator, _aureliaHttpClient, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var SwaggerAureliaHttpClientGenerator = (function () {
        function SwaggerAureliaHttpClientGenerator(http) {
            _classCallCheck(this, _SwaggerAureliaHttpClientGenerator);

            this.http = http;
        }

        _createClass(SwaggerAureliaHttpClientGenerator, [{
            key: 'create',
            value: function create(schema) {
                var _this = this;

                return _signalfxSwaggerClientGenerator['default'](schema, function (error, request) {
                    var headers = new _aureliaHttpClient.Headers(request.headers);
                    var requestMessage = new _aureliaHttpClient.HttpRequestMessage(request.method, request.url, request.body, headers);
                    return _this.http.send(requestMessage).then(function (response) {
                        return response.content;
                    });
                });
            }
        }]);

        var _SwaggerAureliaHttpClientGenerator = SwaggerAureliaHttpClientGenerator;
        SwaggerAureliaHttpClientGenerator = (0, _aureliaFramework.inject)(_aureliaHttpClient.HttpClient)(SwaggerAureliaHttpClientGenerator) || SwaggerAureliaHttpClientGenerator;
        return SwaggerAureliaHttpClientGenerator;
    })();

    exports.SwaggerAureliaHttpClientGenerator = SwaggerAureliaHttpClientGenerator;
});