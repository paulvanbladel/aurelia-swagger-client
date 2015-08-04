System.register(['signalfx/swagger-client-generator', 'aurelia-http-client', 'aurelia-framework'], function (_export) {
    'use strict';

    var SwaggerClientGenerator, HttpClient, Headers, HttpRequestMessage, inject, SwaggerAureliaHttpClientGenerator;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_signalfxSwaggerClientGenerator) {
            SwaggerClientGenerator = _signalfxSwaggerClientGenerator;
        }, function (_aureliaHttpClient) {
            HttpClient = _aureliaHttpClient.HttpClient;
            Headers = _aureliaHttpClient.Headers;
            HttpRequestMessage = _aureliaHttpClient.HttpRequestMessage;
        }, function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }],
        execute: function () {
            SwaggerAureliaHttpClientGenerator = (function () {
                function SwaggerAureliaHttpClientGenerator(http) {
                    _classCallCheck(this, _SwaggerAureliaHttpClientGenerator);

                    this.http = http;
                }

                _createClass(SwaggerAureliaHttpClientGenerator, [{
                    key: 'create',
                    value: function create(schema) {
                        var _this = this;

                        return SwaggerClientGenerator['default'](schema, function (error, request) {
                            var headers = new Headers(request.headers);
                            var requestMessage = new HttpRequestMessage(request.method, request.url, request.body, headers);
                            return _this.http.send(requestMessage).then(function (response) {
                                return response.content;
                            });
                        });
                    }
                }]);

                var _SwaggerAureliaHttpClientGenerator = SwaggerAureliaHttpClientGenerator;
                SwaggerAureliaHttpClientGenerator = inject(HttpClient)(SwaggerAureliaHttpClientGenerator) || SwaggerAureliaHttpClientGenerator;
                return SwaggerAureliaHttpClientGenerator;
            })();

            _export('SwaggerAureliaHttpClientGenerator', SwaggerAureliaHttpClientGenerator);
        }
    };
});