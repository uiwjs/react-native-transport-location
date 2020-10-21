@uiw/react-native-transport-location
---

部网络货运信息交互系统位置信息上报

## 注意事项

<details>
<summary>设置允许 HTTP 请求访问</summary>

#### Android

创建配置文件 `android/app/src/main/res/xml/network_security_config.xml` 内容如下：

```xml
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <base-config cleartextTrafficPermitted="true" />
</network-security-config>
```

修改配置 `android/app/src/main/AndroidManifest.xml`

```diff
<application
  android:name=".MainApplication"
  android:label="@string/app_name"
  android:icon="@mipmap/ic_launcher"
  android:roundIcon="@mipmap/ic_launcher_round"
  android:allowBackup="false"
+  android:networkSecurityConfig="@xml/network_security_config"
  android:theme="@style/AppTheme">
</application>
```

#### iOS

修改 `ios/<应用名称>/Info.plist` 配置

```xml
<key>NSAppTransportSecurity</key>
<dict>
  <key>NSAllowsArbitraryLoads</key>
  <true/>
</dict>
```

</details>

<details>
<summary> ⚠️ GMObjC 只支持 ARM64 的架构</summary>

GMObjC 里面用到的 `OpenSSL` 配置 `armv7` 有问题，`GMObjC.framework` 动态包也是只支持 ARM64

![](https://user-images.githubusercontent.com/1680273/96695165-ea8f3d00-13bb-11eb-84bf-a647c69d12c9.jpg)

设置 `Xcode` -> `Targets` -> `项目名称` -> `Build Settings` -> `Architectures` 值为 `arm64`

</details>

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

<details>
<summary> iOS: bitcode bundle could not be generated because，编译报错不支持 bitcode</summary>

### 不支持 bitcode，什么是bitcode

bitcode 简单说就是编程语言与计算机可以直接执行的机器语言之间的中间码。苹果为了减少包的大小，打包时会将项目编译成 bitcode，上传给 App Store，用户下载时，bitcode 可以根据机型版本，生成不同的包去适配。大概就是这么个意思，具体内容[请戳这里](http://io.diveinedu.com/2016/01/16/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3iOS%E5%BC%80%E5%8F%91%E4%B8%AD%E7%9A%84BitCode%E5%8A%9F%E8%83%BD.html)。

### 解决方案

Xcode7 开始，新建项目默认就打开了 `bitcode` 设置。而且大部分开发者都被这个突如其来的 `bitcode` 功能给坑过导致项目编译失败，这些因为 `bitcode` 而编译失败的的项目都有一个共同点，就是链接了第三方库或者框架，而这些框架或者库不支持 `bitcode` ，从而导致项目编译不成功。
解决方案有两种(目前只有第二种解决方案)：

1. 联系第三方框架 [`MapManager.framework`](ios/MapManager.framework) 的提供者，让他们支持 `bitcode`，这个执行起来有难度。
2. 关闭 `bitcode` 功能；在 xcode 里把 `TARGETS` -> `Build Setting` -> `Build Options` -> `Enable Bitcode` 设置为 `NO`;

### 报错信息

```bash
ld: bitcode bundle could not be generated because '******/react-native-transport-location/ios/MapManager.framework/MapManager(MapService.o)' was built without full bitcode. All object files and libraries for bitcode must be generated from Xcode Archive or Install build for architecture arm64
clang: error: linker command failed with exit code 1 (use -v to see invocation)
```

</details>

> - ⚠️ 高德地图定位部分 API 需要真机调试和 `Access WiFi Information` 权限。
> - 适用于 `react-native` `>= 0.60+` 低版本未测试。
> - 支持手机系统：iOS（苹果）、Android（安卓）。
> - 需要设置允许 HTTP 请求访问
> - React Native 带的自带的包 [OpenSSL-Universal](https://cocoapods.org/pods/OpenSSL-Universal) 与 [GMObjC](https://cocoapods.org/pods/GMObjC) 自带的 GMOpenSSL 冲突 [已解决 #1](https://github.com/uiwjs/react-native-transport-location/issues/4)

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
