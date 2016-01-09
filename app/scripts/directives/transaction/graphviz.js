define([
  'angular',
  'text!../../../views/templates/transaction/graph.html',
  'lodash',
  'd3',
  'dagre',
  'graphlib',
  'dagre-d3'
], function (angular, graphvizTemplate, _, d3, dagre, graphlib, dagreD3) {
  'use strict';

  /**
   * @ngdoc directive
   * @name bluebankAtmClientApp.directive:graphviz
   * @description
   * # graphviz
   */
  angular.module('bluebankAtmClientApp.directives.Graphviz', [])
    .directive('graphviz', function () {
      return {
        template: graphvizTemplate,
        restrict: 'E',
        scope: {
          sessions: '='
        },
        link: function (scope) {
          scope.draw = function (index) {
            var states = scope.sessions[index].states;
            var g = new dagreD3.graphlib.Graph().setGraph({});
            states.forEach(function (state) {
              g.setNode(state, {label: state});
            });

            for (var i = 1; i < states.length; i++) {
              g.setEdge(states[i - 1], states[i], {label: ''});
            }

            g.nodes().forEach(function (v) {
              var node = g.node(v);
              node.rx = node.ry = 5;
            });

            if (states.indexOf('CLOSED') > -1) {
              g.node('CLOSED').style = "fill: #A673FF";
            } else {
              var activeState = states[states.length - 1];
              g.node(activeState).style = "fill: #FFFD41";
            }

            var svg = d3.select("#graphContainer" + index),
              inner = svg.select("g");

            // Set up zoom support
            var zoom = d3.behavior.zoom().on("zoom", function () {
              inner.attr("transform", "translate(" + d3.event.translate + ")" +
                "scale(" + d3.event.scale + ")");
            });
            svg.call(zoom);

            // Create the renderer
            var render = new dagreD3.render();

            // Run the renderer. This is what draws the final graph.
            render(inner, g);

            // Center the graph
            var initialScale = 0.75;
            zoom
              .translate([(svg.attr("width") - g.graph().width * initialScale) / 2, 20])
              .scale(initialScale)
              .event(svg);
            svg.attr('height', g.graph().height * initialScale + 40);
          };
        }
      };
    });
});
