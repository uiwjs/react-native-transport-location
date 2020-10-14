@uiw/react-native-transport-location
---

部网络货运信息交互系统位置信息上报

## 注意事项

- 需要集成高德地图，可使用 [`@uiw/react-native-amap-geolocation`](http://npmjs.com/@uiw/react-native-amap-geolocation) 代替，使用方法[参考实例](https://github.com/uiwjs/react-native-transport-location/blob/ffcd28c47838e516513a5a0c1fb5cb263be4b753/example/App.js#L19-L40)
- ⚠️ 高德地图定位部分 API 需要真机调试和 `Access WiFi Information` 权限。
- 适用于 `react-native >= 0.60+` 低版本未测试。
- 支持手机系统：iOS（苹果）、Android（安卓）。
- React Native 带的自带的包 [OpenSSL-Universal](https://cocoapods.org/pods/OpenSSL-Universal) 与 [GMObjC](https://cocoapods.org/pods/GMObjC) 自带的 GMOpenSSL 冲突 [#1](https://github.com/uiwjs/react-native-transport-location/issues/4)

</details>

<details>
<summary>运行实例可能报错 EXC_BAD_ACCESS 错误，通过升级 <a href="https://github.com/uiwjs/react-native-transport-location/blob/c604fbe51014426f01e2623c8717ad16b44dbe15/example/ios/Podfile#L21-L26">Flipper</a> 解决</summary>

![image](https://user-images.githubusercontent.com/1680273/95947724-d4b0d380-0e21-11eb-838b-b1e4eddb5faf.png)

```bash
# ↓↓↓↓↓↓↓↓↓↓↓↓↓↓解决运行报错问题↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
pod 'Flipper', '~> 0.62.0'
# use_flipper!
# post_install do |installer|
#   flipper_post_install(installer)
# end
# ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
```

</details>

## 安装依赖

```bash
yarn add @uiw/react-native-transport-location
# react-native version >= 0.60+
$ cd ios && pod install
```

如果使用 [`@uiw/react-native-amap-geolocation`](http://npmjs.com/@uiw/react-native-amap-geolocation) 可能不需要如下设置，源码中集成。

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
