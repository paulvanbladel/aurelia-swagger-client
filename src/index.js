export {SwaggerAureliaHttpClientGenerator} from './swaggerAureliaHttpClientGenerator'
export function configure(aurelia, configCallback){
  if(configCallback !== undefined && typeof(configCallback) === 'function')
  {
    configCallback();
  }
}
