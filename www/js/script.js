function adSetter(){
// alert(navigator.userAgent);
var admobid = {};
// select the right Ad Id according to platform
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: 'ca-app-pub-7532993595031090/8624123929',
        interstitial: 'ca-app-pub-7532993595031090/3180225552'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-7532993595031090/8624123929',
        interstitial: 'ca-app-pub-7532993595031090/3180225552'
    };
} else {
    admobid = { // for Windows Phone
        banner: 'ca-app-pub-7532993595031090/8624123929',
        interstitial: 'ca-app-pub-7532993595031090/3180225552'
    };
}

if(AdMob) AdMob.createBanner( {
    adId:admobid.banner, 
    position:AdMob.AD_POSITION.BOTTOM_CENTER, 
    autoShow:true} );
      if(window.AdMob) AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:false} );


}
  function onDeviceReady(){
  // alert("device ready");
      adSetter();
  }


window.onload=function(){
 document.addEventListener("deviceready", onDeviceReady, false);
}
