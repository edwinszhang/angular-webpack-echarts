var controllers = require('../indexModule');

var TEMPLATE_PATH = 'app/template/echarts/type';
// echarts sample page
controllers.controller('echartController', ['$scope', function ($scope) {
  $scope.templates = [
    {
      name: 'line',
      url: TEMPLATE_PATH + '/line.html'
    },
    {
      name: 'bar',
      url: TEMPLATE_PATH + '/bar.html'
    },
    {
      name: 'area',
      url: TEMPLATE_PATH + '/area.html'
    },
    {
      name: 'pie',
      url: TEMPLATE_PATH + '/pie.html'
    },
    {
      name: 'map',
      url: TEMPLATE_PATH + '/map.html'
    },
    {
      name: 'map2',
      url: TEMPLATE_PATH + '/map2.html'
    },
    {
      name: 'map3',
      url: TEMPLATE_PATH + '/map3.html'
    },
    {
      name: 'donut',
      url: TEMPLATE_PATH + '/donut.html'
    },
    {
      name: 'gauge',
      url: TEMPLATE_PATH + '/gauge.html'
    },
    {
      name: 'radar',
      url: TEMPLATE_PATH + '/radar.html'
    },
    {
      name: 'heatmap',
      url: TEMPLATE_PATH + '/heatmap.html'
    }
  ];
  $scope.template = $scope.templates[0];
}])
