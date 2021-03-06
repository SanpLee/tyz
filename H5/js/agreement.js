// 判断当前访问端是移动端还是pc端
var browser={
    versions:function(){
        var u = navigator.userAgent, app = navigator.appVersion;
        return {  // 移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1,  // IE内核
            presto: u.indexOf('Presto') > -1,    // Opera内核
            webKit: u.indexOf('AppleWebKit') > -1,  // 苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,  // 火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/)&&u.indexOf('QIHU')&&u.indexOf('Chrome')<0,  // 是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),  // iOS终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,  // Android 终端或者 UC 浏览器
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,  // 是否为 iPhone 或者 QQHD 浏览器
            iPad: u.indexOf('iPad') > -1,   // 是否 iPad
            webApp: u.indexOf('Safari') == -1,   // 是否WEB应该程序，没有头部与底部。
            ua:u
        };
    }(),
    language:(navigator.browserLanguage || navigator.language).toLowerCase()
};