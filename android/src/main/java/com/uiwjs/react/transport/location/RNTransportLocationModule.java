package com.uiwjs.react.transport.location;

import android.content.Context;
import android.content.Intent;
import android.text.TextUtils;
import android.util.Log;

import com.alibaba.fastjson.JSON;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.hdgq.locationlib.LocationOpenApi;
import com.hdgq.locationlib.bcprov.AESOperator;
import com.hdgq.locationlib.bcprov.SM2Utils;
import com.hdgq.locationlib.bcprov.Util;
import com.hdgq.locationlib.constant.Constants;
import com.hdgq.locationlib.constant.ErrorCode;
import com.hdgq.locationlib.constant.ErrorMessage;
import com.hdgq.locationlib.entity.EncryptionResponse;
import com.hdgq.locationlib.entity.SendLocationInfo;
import com.hdgq.locationlib.entity.ShippingNoteInfo;
import com.hdgq.locationlib.http.ApiPathManager;
import com.hdgq.locationlib.http.HttpManager;
import com.hdgq.locationlib.http.callback.JsonCallBack;
import com.hdgq.locationlib.http.model.ServerResponse;
import com.hdgq.locationlib.listener.LocationListener;
import com.hdgq.locationlib.listener.OnResultListener;
import com.hdgq.locationlib.util.AlarmManagerUtils;
import com.hdgq.locationlib.util.LocationUtils;
import com.lzy.okgo.model.Response;

import java.util.ArrayList;
import java.util.List;

public class RNTransportLocationModule extends ReactContextBaseJavaModule {

     private final ReactApplicationContext reactContext;

    public RNTransportLocationModule(ReactApplicationContext reactContext) {
        super(reactContext);
         this.reactContext = reactContext;
    }
    private Context context;

    @Override
    public String getName() {
        return "RNTransportLocation";
    }
    /**
     * 在启动页或 app 首页中，初始化 sdk 服务。context 必须为 activity。
     */
    @ReactMethod
    public void init(String appId, String appSecurity,
                     String enterpriseSenderCode, String environment, final Promise promise) {
        this.context = TransportLocationUtil.mcontext;
        Constants.APPID = appId;
        Constants.APPSECURITY = appSecurity;
        Constants.ENTERPRISE_SENDER_CODE = enterpriseSenderCode;
        Constants.ENVIRONMENT = environment;
        LocationUtils.init(this.context, LocationListener.getInstance());
        initSendInfo(this.context, promise);
    }

    private static void initSendInfo(final Context context, final Promise promise) {
        HttpManager.initSendInfo(new JsonCallBack() {
            public void onSuccess(Response<ServerResponse> response) {
                if (response.body() == null) {
                    Log.e("init error", "请求失败");
                    promise.reject("999999", ErrorMessage.getErrorMessage(context, ErrorCode.NETWORK_ERROR));
                } else {
                    ServerResponse serverResponse = (ServerResponse) response.body();
                    if (serverResponse.code != 0 && (serverResponse.data == null || !TextUtils.isEmpty(serverResponse.data.toJSONString()))) {
                        Log.e("init error", serverResponse.msg);
                        promise.reject(String.valueOf(serverResponse.code), serverResponse.msg);
                    } else {
                        EncryptionResponse encryptionResponse = (EncryptionResponse) JSON.parseObject(serverResponse.data.toJSONString(), EncryptionResponse.class);

                        try {
                            String info = new String(SM2Utils.decrypt132(Util.hexToByte((String) Constants.KEYMAP.get("private_key_name")), Util.hexToByte(encryptionResponse.getEncryptedCode())));
                            String plainText = AESOperator.getInstance().decryptECB(encryptionResponse.getEncryptedContent(), info);
                            SendLocationInfo sendLocationInfo = (SendLocationInfo) JSON.parseObject(plainText, SendLocationInfo.class);
                            ApiPathManager.URL_INFO_BEANS = (ArrayList) sendLocationInfo.getUrlInfoList();
                            Constants.SEND_LOCATION_TIME = sendLocationInfo.getTime();
                            AlarmManagerUtils.startAlarm(context);
                            promise.resolve("success");
                        } catch (Exception var7) {
                            var7.printStackTrace();
                            promise.reject("error:", var7.getMessage());
                        }
                    }
                }

            }

            public void onError(Response<ServerResponse> response) {
                super.onError(response);
                Log.e("init error", "999999");
                promise.reject("init error", "999999");
            }
        });
    }
    /**
     * 启用服务。context 必须为 activity。
     */
    @ReactMethod
    public void start(ReadableArray readableArray, final Promise promise) {

        LocationOpenApi.start(this.context, convert(readableArray), new OnResultListener() {
            @Override
            public void onSuccess() {
                promise.resolve("success");
            }

            @Override
            public void onFailure(String s, String s1) {
                promise.reject(new Throwable("s:" + s + ";s1:" + s1));
            }
        });
    }
    /**
     * 停止服务。context 必须为 activity。
     */
    @ReactMethod
    public void stop(ReadableArray readableArray, final Promise promise) {
        LocationOpenApi.stop(this.context, convert(readableArray), new OnResultListener() {
            @Override
            public void onSuccess() {
                promise.resolve("success");
            }

            @Override
            public void onFailure(String s, String s1) {
                promise.reject(new Throwable("s:" + s + ";s1:" + s1));
            }
        });
    }

    private ShippingNoteInfo[] convert(ReadableArray array) {
        if (array != null && array.size() != 0) {
            List<ShippingNoteInfo> list = new ArrayList<>();
            for (int i = 0; i < array.size(); i++) {
                ReadableMap map = array.getMap(i);
                ShippingNoteInfo shippingNoteInfo = new ShippingNoteInfo();
                shippingNoteInfo.setEndCountrySubdivisionCode(map.getString("endCountrySubdivisionCode"));
                shippingNoteInfo.setStartCountrySubdivisionCode(map.getString("startCountrySubdivisionCode"));
                shippingNoteInfo.setShippingNoteNumber(map.getString("shippingNoteNumber"));
                shippingNoteInfo.setSerialNumber(map.getString("serialNumber"));
                list.add(shippingNoteInfo);
            }
            return list.toArray(new ShippingNoteInfo[list.size()]);
        }
        return null;
    }
}
