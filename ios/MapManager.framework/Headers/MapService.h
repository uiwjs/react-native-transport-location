//
//  MapService.h
//  gangxinbao
//
//  Created by 王俊杰的Mac mini on 2019/11/6.
//  Copyright © 2019 wangjunjie. All rights reserved.
//

#import <Foundation/Foundation.h>
#define debug @"debug"
#define release @"release"
NS_ASSUME_NONNULL_BEGIN
typedef void(^MapServiceBlock)(NSObject *object);
@interface MapService : NSObject
@property (nonatomic, copy) MapServiceBlock block;

/// 开启服务，开启持续定位
/// @param appId 企业平台appId
/// @param appSecurity 企业平台appSecurity
/// @param enterpriseSenderCode 企业唯一标识
/// @param environment 环境：“debug”测试，“release”正式
/// @param listener 返回结果回调函数
-(void)openServiceWithAppId:(NSString *)appId appSecurity:(NSString *)appSecurity enterpriseSenderCode:(NSString *)enterpriseSenderCode environment:(NSString *)environment listener:(void(^)(id model, NSError *error))listener;

/// 开始上传定位
/// @param shippingNoteInfos 运单信息数组
/// @param listener 返回结果回调函数
-(void)startLocationWithShippingNoteInfos:(NSArray *)shippingNoteInfos listener:(void(^)(id model, NSError *error))listener;

/// 停止上传定位
/// @param shippingNoteInfos 运单信息数组
/// @param listener 返回结果回调函数
-(void)stopLocationWithShippingNoteInfos:(NSArray *)shippingNoteInfos listener:(void(^)(id model, NSError *error))listener;

/// 清除本地存储
-(void)clearLocalStorage;
@end

NS_ASSUME_NONNULL_END
