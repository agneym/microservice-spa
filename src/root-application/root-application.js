import * as singleSpa from 'single-spa';

singleSpa.registerApplication('angular', () =>
  import ('../app1/angular1.app.js'), pathPrefix('/app1'));
singleSpa.registerApplication('vue', () =>
  import ('../app2/vue.app.js'), pathPrefix('/app2'));

singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}