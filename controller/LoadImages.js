
// Preload images into the cache
export function loadImages(){
    // Loading splash
    Expo.Asset.fromModule(require('../assets/images/splash.png')).downloadAsync();
}