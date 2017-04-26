/**
 * theme services
 * posible themes: infographic macarons shine dark blue green red gray default
 *
 * Copied from https://github.com/wangshijun/angular-echarts/blob/master/src/theme.js
 *
 * Created by edwin on 26/04/2017.
 */

angular
  .module('angular-echarts.theme', [])
  .factory('theme', ['infographic', 'macarons', 'shine', 'dark', 'roma', function (infographic, macarons, shine, dark, roma) {
  var themes = {
    infographic: infographic,
    macarons: macarons,
    shine: shine,
    dark: dark,
    roma: roma,
    vintage: vintage,
  };

  return {
    get: function (name) {
      return themes[name] ? themes[name] : {};
    },
  };

}]);