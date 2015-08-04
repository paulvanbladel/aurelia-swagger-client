import * as SwaggerAureliaHttpClientGenerator from 'signalfx/swagger-client-generator';
import {HttpClient, Headers, HttpRequestMessage} from 'aurelia-http-client';
import {inject} from 'aurelia-framework';
@inject(HttpClient)
export class SwaggerAureliaClient {
    constructor(http) {
        this.http = http;
    }
    create(schema) {
        return SwaggerClientGenerator.default(schema, (error, request) => {
            var headers = new Headers(request.headers);
            var requestMessage = new HttpRequestMessage(
              request.method, 
              request.url, 
              request.body, 
              headers);
            return this.http.send(requestMessage).then(response => {
                return response.content;
            });
        });
    };
}
