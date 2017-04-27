/**
 * Created by edwin on 27/04/2017.
 */
var app = require('../../indexModule.js');
var echarts = require('echarts');

app.controller('barCtrl', function ($scope, $http) {
  var option = {
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
      data:['销量']
    },
    xAxis: {
      data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  };
  $scope.option = option;
  // $http.get('/app/mock/bar.json').then(function (result) {
  //   $scope.option = result.data;
  // });

});

app.directive('bar', function() {
  return {
    scope: {
      id: "@",
      option: "="
    },
    restrict: 'E',
    template: '<div style="height:400px;"></div>',
    replace: true,
    link: function($scope, element, attrs, controller) {
      var option = option;
      var myChart = echarts.init(document.getElementById($scope.id),'macarons');
      myChart.setOption($scope.option);
    }
  };
});