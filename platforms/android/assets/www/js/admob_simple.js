/**
 * Created by TeiKou on 07/08/16.
 */
var admobid = {};

// TODO: replace the following ad units with your own
if( /(android)/i.test(navigator.userAgent) ) {
    admobid = { // for Android
        banner: 'ca-app-pub-1651089656968805/7925171774',
        interstitial: 'ca-app-pub-1651089656968805/7925171774'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-1651089656968805/6993495379',
        interstitial: 'ca-app-pub-1651089656968805/6993495379'
    };
} else {
    admobid = { // for Windows Phone
        banner: 'ca-app-pub-1651089656968805/6993495379',
        interstitial: 'ca-app-pub-1651089656968805/6993495379'
    };
}

function initApp() {
    if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

    // this will create a banner on startup
    AdMob.createBanner( {
        adId: admobid.banner,
        position: AdMob.AD_POSITION.BOTTOM_CENTER,
        //isTesting: true, // TODO: remove this line when release
        overlap: false,
        offsetTopBar: false,
        bgColor: 'black'
    } );

    // this will load a full screen ad on startup
    AdMob.prepareInterstitial({
        adId: admobid.interstitial,
        //isTesting: true, // TODO: remove this line when release
        autoShow: true
    });
    
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}