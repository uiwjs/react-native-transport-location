import { NativeModules } from 'react-native';

export default class TransportLocation {
  /**
   * 初始化
   * @param {String} appId 网络货运企业 APP 的唯一标识
   * @param {String} appSecurity 网络货运企业在 省平台申请的接 入密钥
   * @param {String} enterpriseSenderCode 网络货运企业在 省平台申请的唯 一标识代码
   * @param {String} environment 环境:“debug” 接入测试环境， “release”接入 正式环境。
   * @param {String} shippingNoteNumber 运单号
   * @param {String} serialNumber 分单号
   * @param {String} startCountrySubdivisionCode 起点行政区划代码
   * @param {String} endCountrySubdivisionCode 终点行政区划代码
   */
  static init(appId, appSecurity, enterpriseSenderCode, environment) {
    return NativeModules.RNTransportLocation.init(appId, appSecurity, enterpriseSenderCode, environment);
  }
  /**
   * 启用定位
   * @param {*} shippingNoteInfos 运单信息数组
   */
  static start(shippingNoteNumber, serialNumber, startCountrySubdivisionCode, endCountrySubdivisionCode) {

    // JavaOnlyArray a = JavaOnlyArray.of(param);
    return NativeModules.RNTransportLocation.start(shippingNoteNumber, serialNumber, startCountrySubdivisionCode, endCountrySubdivisionCode);
  }
  /**
   * 结束定位
   * @param {Array} shippingNoteInfos 运单信息数组
   */
  static stop(shippingNoteNumber, serialNumber, startCountrySubdivisionCode, endCountrySubdivisionCode) {

    // JavaOnlyArray a = JavaOnlyArray.of(param);
    return NativeModules.RNTransportLocation.stop(shippingNoteNumber, serialNumber, startCountrySubdivisionCode, endCountrySubdivisionCode);
  }
}