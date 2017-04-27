/**
 * Created by edwin on 27/04/2017.
 */
var app = require('../../indexModule.js');
var echarts = require('echarts');
var china = require('../../../lib/china.js');



var convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      });
    }
  }
  return res;
};

app.controller('mapCtrl2', function ($scope, $http) {
  var data = {};
  $http.get('/app/mock/map/addressValueData.json')
    .then(function (response) {
      data = response.data;
    });

  var geoCoordMap = {};
  $http.get('/app/mock/map/geoCoordMap.json')
    .then(function (response) {
      geoCoordMap = response.data;
    });
  var option = {
    backgroundColor: '#404a59',
    title: {
      text: '全国主要城市空气质量2 -- 数据来自请求',
      subtext: 'data from PM25.in',
      sublink: 'http://www.pm25.in',
      left: 'center',
      textStyle: {
        color: '#fff'
      }
    },
    tooltip : {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      y: 'bottom',
      x:'right',
      data:['pm2.5'],
      textStyle: {
        color: '#fff'
      }
    },
    geo: {
      map: 'china',
      label: {
        emphasis: {
          show: false
        }
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: '#323c48',
          borderColor: '#111'
        },
        emphasis: {
          areaColor: '#2a333d'
        }
      }
    },
    series : [
      {
        name: 'pm2.5',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(data),
        symbolSize: function (val) {
          return val[2] / 10;
        },
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: false
          },
          emphasis: {
            show: true
          }
        },
        itemStyle: {
          normal: {
            color: '#ddb926'
          }
        }
      },
      {
        name: 'Top 5',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: convertData(data.sort(function (a, b) {
          return b.value - a.value;
        }).slice(0, 6)),
        symbolSize: function (val) {
          return val[2] / 10;
        },
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: true
          }
        },
        itemStyle: {
          normal: {
            color: '#f4e925',
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        zlevel: 1
      }
    ]
  };
  $scope.option = option;

});

app.directive('map2', function() {
  return {
    scope: {
      id: "@",
      option: "="
    },
    restrict: 'E',
    template: '<div style="height:600px;width:800px;"></div>',
    replace: true,
    link: function($scope, element, attrs, controller) {
      var option = option;
      var myChart = echarts.init(document.getElementById($scope.id),'macarons');
      myChart.setOption($scope.option);
    }
  };
});