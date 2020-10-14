#import <React/RCTBridgeModule.h>
#import <MapManager/MapManager.h>

@interface RNTransportLocation : NSObject <RCTBridgeModule>

@property (nonatomic, strong) MapService *mapService;

@end
