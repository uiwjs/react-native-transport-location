@uiw/react-native-transport-location
---

## 安装依赖

```bash
yarn add @uiw/react-native-transport-location
# react-native version >= 0.60+
$ cd ios && pod install
```

`AndroidManifest.xml`

```xml
<meta-data
  android:name="com.amap.api.v2.apikey"
  android:value="{你的高德key}" />
```

## api

- init
- start
- end

## 其它

当前工程基于 [@brodybits/create-react-native-module](https://github.com/brodybits/create-react-native-module) 初始化。

```bash
npx create-react-native-module --package-identifier com.uiwjs.react.transport.location --object-class-name RNTransportLocation --generate-example TransportLocation --example-react-native-version 0.63.2 --module-name @uiw/react-native-transport-location --github-account uiwjs --author-name "Kenny Wong" --author-email "wowohoo@qq.com"
```

## 开发

```bash
cd example   # 进入实例 example 工程，根目录不需要安装，会引发错误
yarn install # 安装依赖

cd ios     # 进入 example/ios 目录安装依赖
pod instll # 安装依赖
```
