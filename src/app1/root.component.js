import angular from 'angular';
import template from './root.template.html';

angular
.module('single-spa-app')
.component('root', {
  template,
  controllerAs: 'vm',
  controller($timeout) {
    const vm = this;

    vm.frameworkInspector = false;
    vm.styles = {};

    vm.$onInit = () => {
      
    };

    vm.$onDestroy = () => {
      
    }
  }
})
