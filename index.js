import { NativeModules, Platform } from 'react-native';

export default class TransportLocation {
  /**
   * 初始化
   * @param {String} appId 网络货运企业 APP 的唯一标识
   * @param {String} appSecurity 网络货运企业在 省平台申请的接 入密钥
   * @param {String} enterpriseSenderCode 网络货运企业在 省平台申请的唯 一标识代码
   * @param {String} environment 环境:“debug” 接入测试环境， “release”接入 正式环境。
   */
  static init(appId, appSecurity, enterpriseSenderCode, environment) {
    return NativeModules.RNTransportLocation.init(appId, appSecurity, enterpriseSenderCode, environment);
  }
  /**
   * 启用定位
   * @param {String} shippingNoteNumber 当 Android 的时候，运单号
   * @param {Array} shippingNoteNumber 当 iOS 的时候，运单信息数组
   * @param {String} serialNumber 分单号
   * @param {String} startCountrySubdivisionCode 起点行政区划代码
   * @param {String} endCountrySubdivisionCode 终点行政区划代码
   * 
   */
  static start(shippingNoteNumber, serialNumber, startCountrySubdivisionCode, endCountrySubdivisionCode) {
    return NativeModules.RNTransportLocation.start([{shippingNoteNumber:shippingNoteNumber, serialNumber:serialNumber, startCountrySubdivisionCode:startCountrySubdivisionCode, endCountrySubdivisionCode:endCountrySubdivisionCode}]);
  }
  /**
   * 结束定位
   * @param {String} shippingNoteNumber 运单号
   * @param {String} serialNumber 分单号
   * @param {String} startCountrySubdivisionCode 起点行政区划代码
   * @param {String} endCountrySubdivisionCode 终点行政区划代码
   */
  static stop(shippingNoteNumber, serialNumber, startCountrySubdivisionCode, endCountrySubdivisionCode) {
    return NativeModules.RNTransportLocation.stop([{shippingNoteNumber, serialNumber, startCountrySubdivisionCode, endCountrySubdivisionCode}]);
  }
}