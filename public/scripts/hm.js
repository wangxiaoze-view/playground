;
(function () {
    var _a;
    var hostname = window.location.hostname;
    var head = document.getElementsByTagName('head')[0];
    var hm = document.createElement('script');
    hm.defer = true;
    hm.src = 'https://cloud.umami.is/script.js';
    var websiteId = (_a = {},
        _a['www.wangxiaoze.cn,wangxiaoze.cn'] = '63e283e0-9946-4f12-a732-c0e74a121289',
        _a['wangxiaoze-view.github.io,localhost,127.0.0.1'] = '81502827-f215-4db2-9026-fa822e3c583e',
        _a);
    for (var _i = 0, _b = Object.entries(websiteId); _i < _b.length; _i++) {
        var _c = _b[_i], k = _c[0], id = _c[1];
        if (k.split(',').includes(hostname)) {
            hm.setAttribute('data-website-id', id);
            break;
        }
    }
    head.appendChild(hm);
})();
