@uiw/react-native-transport-location
---

部网络货运信息交互系统位置信息上报

## 注意事项

- ⚠️ 高德地图定位部分 API 需要真机调试和 `Access WiFi Information` 权限。
- 适用于 `react-native >= 0.60+` 低版本未测试。
- 支持手机系统：iOS（苹果）、Android（安卓）。
- React Native 带的自带的包 [OpenSSL-Universal](https://cocoapods.org/pods/OpenSSL-Universal) 与 [GMObjC](https://cocoapods.org/pods/GMObjC) 自带的 GMOpenSSL 冲突 [已解决 #1](https://github.com/uiwjs/react-native-transport-location/issues/4)

<details>
<summary> iOS 端需要开启始终定位</summary>

`example/ios/<项目名称>/Info.plist`

iOS 11 版本：

`NSLocationAlwaysAndWhenInUseUsageDescription` 申请Always权限，以便应用在前台和后台（suspend 或 terminated）都可以获取到更新的位置数据（`NSLocationWhenInUseUsageDescription` 也必须有）。

⚠️ 注意：如果需要同时支持在iOS8-iOS10和iOS11系统上后台定位，建议在plist文件中同时添加 `NSLocationWhenInUseUsageDescription`、`NSLocationAlwaysUsageDescription`和`NSLocationAlwaysAndWhenInUseUsageDescription`权限申请。

```xml
<key>NSLocationWhenInUseUsageDescription</key>
<string>使用期间定位，以便获取位置信息</string>
<key>NSLocationAlwaysUsageDescription</key>
<string>持续定位，以便获取行驶路线</string>
<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
<string>持续定位，以便获取行驶路线</string>
```

</details>

## 安装依赖

```bash
yarn add @uiw/react-native-transport-location
# react-native version >= 0.60+
$ cd ios && pod install
```

`AndroidManifest.xml`

```xml
<meta-data android:name="com.amap.api.v2.apikey" android:value="{你的高德key}" />
```

## api

- init
- start
- end

## 其它

当前工程基于 [@brodybits/create-react-native-module](https://github.com/brodybits/create-react-native-module) 初始化。

```bash
npx create-react-native-module --package-identifier com.uiwjs.react.transport.location --object-class-name RNTransportLocation --generate-example TransportLocation --example-react-native-version 0.63.3 --module-name @uiw/react-native-transport-location --github-account uiwjs --author-name "Kenny Wong" --author-email "wowohoo@qq.com"
```

## 开发

```bash
cd example   # 进入实例 example 工程，根目录不需要安装，会引发错误
yarn install # 安装依赖

cd ios     # 进入 example/ios 目录安装依赖
pod install # 安装依赖
```
