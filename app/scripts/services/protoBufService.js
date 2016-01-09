define([
  'angular',
  'path',
  'protobuf',
  'underscore',
  'lodash'
], function (angular, path, protobuf, underscore, _) {
  'use strict';

  /**
   * @ngdoc service
   * @name bluebankAtmClientApp.protoBuf
   * @description
   * # protoBuf
   * Factory in the bluebankAtmClientApp.
   */
  angular.module('bluebankAtmClientApp.services.protoBuf', [])
    .service('protoBuf', function (protoConfig, eventsConfig) {

      var __dirname = path.resolve(path.dirname());
      var builder;
      var packageName = protoConfig.atm.packageName + '.';

      function loadProtoFile() {
        protobuf.loadProtoFile(path.join(__dirname, 'proto', protoConfig.atm.fileName), function (error, proto) {
          if (error) {
            throw(new Error(error));
          }
          if (proto) {
            builder = proto;
          }
        });
      }

      function encode(protoConfig, data) {
        var Proto = builder.build(packageName + messageName(protoConfig));
        return new Proto(data).toBase64();
      }

      function decode(protoConfig, buffer) {
        var Proto = builder.build(packageName + messageName(protoConfig));
        var message = Proto.decode(buffer);
        return stringifyEnumsRecursive(message);
      }

      function stringifyEnums(message) {
        _.forEach(message.$type.children, function (child) {
          var type = _.get(child, 'element.resolvedType', null);
          if (type && type.className === 'Enum' && type.children) {
            var metaValue = _.find(type.children, {
              id: message[child.name]
            });
            if (metaValue && metaValue.name) {
              message[child.name] = metaValue.name;
            }
          }
        });
        return message;
      }

      function stringifyEnumsRecursive(message) {
        message = stringifyEnums(message);
        _.forEach(message, function (subMessage, key) {
          if (_.isObject(subMessage) && subMessage.$type) {
            message[key] = stringifyEnumsRecursive(message[key]);
          }
        });
        return message;
      }

      function createEnum(protoConfig) {
        var Proto = builder.build(packageName + protoConfig);
        var data = [];
        underscore(Proto).each(function (elem, key) {
          data[elem] = key;
        });
        return data;
      }

      function messageName(key) {
        return eventsConfig.Events.filter(function (event) {
          return event.Id === key;
        })[0].Message;
      }

      return {
        encode: encode,
        decode: decode,
        loadProtoFile: loadProtoFile,
        createEnum: createEnum
      };
    });
});
