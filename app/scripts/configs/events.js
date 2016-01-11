define([
  'angular'
], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name bluebankAtmClientApp.eventsConfig
   * @description
   * # eventsConfig
   * Constant in the bluebankAtmClientApp.
   */
  angular.module('bluebankAtmClientApp.configs.EventsConfig', [])
    .constant('eventsConfig', {
      Events: [
        {Id: 'VALIDATE_CARD_REQUEST', Message: 'ValidateCardRequest'},
        {Id: 'VALIDATE_PIN_REQUEST', Message: 'ValidatePinRequest'},
        {Id: 'DEPOSIT_REQUEST', Message: 'DepositRequest'},
        {Id: 'WITHDRAW_REQUEST', Message: 'WithdrawRequest'},
        {Id: 'INQUIRY_REQUEST', Message: 'InquiryRequest'},
        {Id: 'CARD_READ_CONFIRMATION', Message: 'CardReadConfirmation'},
        {Id: 'CARD_VALIDATION_STATUS', Message: 'CardValidationStatus'},
        {Id: 'RECEIPT', Message: 'Receipt'}
      ]
    });
});
