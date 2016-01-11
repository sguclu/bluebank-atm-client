/*jshint unused: vars */
define([
  'angular',
  'features/atm/main',
  'services/accountService',
  'services/protoBufService',
  'services/transactionService',
  'services/webSocketService',
  'services/eventService',
  'configs/atm',
  'configs/events',
  'configs/proto',
  'configs/server',
  'directives/atm/printer',
  'directives/atm/transaction',
  'directives/atm/welcome',
  'directives/atm/login',
  'directives/atm/deposit',
  'directives/atm/parts',
  'directives/transaction/graphviz',
  'services/healthcheckService',
  'features/monitoring/monitoring',
  'features/transaction/transactions',
  'features/account/account',
  'features/account/accountinfo'
]/*deps*/, function (angular,
                     MainCtrl,
                     account,
                     protoBuf,
                     transaction,
                     webSocket,
                     ProtoConfig,
                     EventsConfig,
                     event,
                     ServerConfig,
                     AtmConfig,
                     PrinterDirective,
                     TransactionDirective,
                     WelcomeDirective,
                     LoginDirective,
                     DepositDirective,
                     PartsDirective,
                     GraphvizDirective,
                     healthcheck,
                     MonitoringCtrl,
                     TransactionsCtrl,
                     AccountCtrl,
                     AccountInfoCtrl)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name bluebankAtmClientApp
   * @description
   * # bluebankAtmClientApp
   *
   * Main module of the application.
   */
  return angular
    .module('bluebankAtmClientApp', [
      'bluebankAtmClientApp.controllers.MainCtrl',
      'bluebankAtmClientApp.services.account',
      'bluebankAtmClientApp.services.protoBuf',
      'bluebankAtmClientApp.services.transaction',
      'bluebankAtmClientApp.services.webSocket',
      'bluebankAtmClientApp.services.ProtoConfig',
      'bluebankAtmClientApp.services.event',
      'bluebankAtmClientApp.configs.AtmConfig',
      'bluebankAtmClientApp.configs.EventsConfig',
      'bluebankAtmClientApp.configs.ServerConfig',
      'bluebankAtmClientApp.directives.Printer',
      'bluebankAtmClientApp.directives.Transaction',
      'bluebankAtmClientApp.directives.Welcome',
      'bluebankAtmClientApp.directives.Login',
      'bluebankAtmClientApp.directives.Deposit',
      'bluebankAtmClientApp.directives.Parts',
      'bluebankAtmClientApp.directives.Graphviz',
      'bluebankAtmClientApp.services.healthcheck',
      'bluebankAtmClientApp.controllers.MonitoringCtrl',
      'bluebankAtmClientApp.controllers.TransactionsCtrl',
      'bluebankAtmClientApp.controllers.AccountCtrl',
      'bluebankAtmClientApp.controllers.AccountInfoCtrl',
      /*angJSDeps*/
      'ngCookies',
      'ngResource',
      'ngSanitize',
      'ngRoute',
      'ngAnimate',
      'ngTouch',
      'uuid4',
      'gavruk.card',
      'angular-virtual-keyboard',
      'ui.bootstrap'
    ])
    .config(function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .when('/monitoring', {
          templateUrl: 'views/monitoring.html',
          controller: 'MonitoringCtrl',
          controllerAs: 'monitoring'
        })
        .when('/transactions', {
          templateUrl: 'views/transactions.html',
          controller: 'TransactionsCtrl',
          controllerAs: 'transactions'
        })
        .when('/accounts', {
          templateUrl: 'views/accounts.html',
          controller: 'AccountCtrl',
          controllerAs: 'account'
        })
        .when('/accounts/:accountId', {
          templateUrl: 'views/account.html',
          controller: 'AccountInfoCtrl',
          controllerAs: 'accountInfo'
        })
        .otherwise({
          redirectTo: '/'
        });
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    })
    .run(function (protoBuf) {
      protoBuf.loadProtoFile();
    })
    .config(['VKI_CONFIG', function (VKI_CONFIG) {
      VKI_CONFIG.layout.Numeric = {
        'name': "Numeric", 'keys': [
          [['1', '1'], ['2', '2'], ['3', '3']],
          [['4', '4'], ['5', '5'], ['6', '6']],
          [['7', '7'], ['8', '8'], ['9', '9']],
          [['      0     ', '0']]
        ]
      };
    }]);
});
