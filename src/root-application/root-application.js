import * as singleSpa from 'single-spa';

singleSpa.registerApplication('app-1', () =>
  import ('../app1/angular1.app.js'), pathPrefix('/app1'));
singleSpa.registerApplication('app-2', () =>
  import ('../app2/vue.app.js'), pathPrefix('/app2'));

singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}