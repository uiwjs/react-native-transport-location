import { NativeModules } from 'react-native';

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
   * @param {*} shippingNoteInfos 运单信息数组
   */
  static start(shippingNoteInfos) {
    return NativeModules.RNTransportLocation.start(shippingNoteInfos);
  }
  /**
   * 结束定位
   * @param {Array} shippingNoteInfos 运单信息数组
   */
  static stop(shippingNoteInfos) {
    return NativeModules.RNTransportLocation.stop(shippingNoteInfos);
  }
}