import angular from 'angular';
import './root.component.js';

angular
.module('single-spa-app')
.config(($stateProvider, $locationProvider) => {

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
  });

  $locationProvider.hashPrefix('');

  $stateProvider
  .state('root', {
    url: '/app1',
    template: '<root />',
  })
});
