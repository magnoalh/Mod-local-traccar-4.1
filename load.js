var _0x2377 = [
    '6.2.0', '5.2.0', '4.6.5', '2.4.4', '//cdnjs.cloudflare.com/ajax/libs/extjs/', '/packages/charts/classic/charts.js',
    '/classic/locale/locale-', 'code', '.js', '/classic/theme-triton/resources/theme-triton-all.css',
    '/classic/theme-triton/theme-triton.js', '/packages/charts/classic/triton/resources/charts-all.css',
    '//cdnjs.cloudflare.com/ajax/libs/ol3/', '/ol.css', '/ol.js', '//cdnjs.cloudflare.com/ajax/libs/proj4js/', '/proj4.js',
    '//cdn.rawgit.com/walkermatt/ol-popup/494a42c0/dist/ol-popup.js',
    '//cdn.rawgit.com/jonataswalker/ol-geocoder/54b23aea/dist/ol-geocoder.js', 'config/layerswitcher/src/ol3-layerswitcher.js',
    '//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js', 'Images', 'arrow', 'animal', 'bicycle', 'boat', 'bus', 'car', 'crane', 'motorcycle', 'offroad', 'pickup', 'ship',
    'tractor', 'train', 'tram', 'trolleybus', 'truck', 'images/', 'Svg'];
(function (_0x182d32, _0x56092f) {
    var _0x4da8e4 = function (_0x378548) {
        while (--_0x378548) {
            _0x182d32['push'](_0x182d32['shift']());
        }
    };
    _0x4da8e4(++_0x56092f);
}
    (_0x2377, 0x17a));
var _0x3254 = function (_0x4f161a, _0x2cd6d3) {
    _0x4f161a = _0x4f161a - 0x0;
    var _0x2fac6d = _0x2377[_0x4f161a];
    return _0x2fac6d;
};
(function () {

    var debugMode, touchMode, locale, localeParameter, extjsVersion, proj4jsVersion, fontAwesomeVersion, olVersion, i, language, languages, languageDefault;

    function addStyleFile(file) {
        var link = document.createElement('link');

        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('type', 'text/css');
        link.setAttribute('href', file);
        document.head.appendChild(link);

    }
    function addScriptFile(file) {
        var script = document.createElement('script');
        script.setAttribute('src', file);
        script.async = false;
        document.head.appendChild(script);
    }
    function addSvgFile(file, id) {
        var svg = document.createElement('object');
        svg.setAttribute('id', id);
        svg.setAttribute('data', file);
        svg.setAttribute('type', 'image/svg+xml');
        svg.setAttribute('style', 'visibility:hidden;position:absolute;left:-100px;');
        document.body.appendChild(svg);
    }
    debugMode = document.getElementById('loadScript').getAttribute('mode') === 'debug';
    touchMode = 'ontouchstart' in window || navigator.maxTouchPoints;

    //comentario ver esse token
    window.updateNotificationToken = function (token) {
        Traccar.app.updateNotificationToken(token);
    };


    locale = {};
    window.Locale = locale;

    locale.languages = {
        'ar': { name: 'العربية', code: 'en' },
        'az': { name: 'Azərbaycanca', code: 'en' },
        'bg': { name: 'Български', code: 'bg' },
        'bn': { name: 'বাংলা', code: 'en' },
        'cs': { name: 'Čeština', code: 'cs' },
        'de': { name: 'Deutsch', code: 'de' },
        'da': { name: 'Dansk', code: 'da' },
        'el': { name: 'Ελληνικά', code: 'el' },
        'en': { name: 'English', code: 'en' },
        'es': { name: 'Español', code: 'es' },
        'fa': { name: 'فارسی', code: 'fa' },
        'fi': { name: 'Suomi', code: 'fi' },
        'fr': { name: 'Français', code: 'fr' },
        'he': { name: 'עברית', code: 'he' },
        'hi': { name: 'हिन्दी', code: 'en' },
        'hr': { name: 'Hrvatski', code: 'hr' },
        'hu': { name: 'Magyar', code: 'hu' },
        'id': { name: 'Bahasa Indonesia', code: 'id' },
        'it': { name: 'Italiano', code: 'it' },
        'ja': { name: '日本語', code: 'ja' },
        'ka': { name: 'ქართული', code: 'en' },
        'kk': { name: 'Қазақша', code: 'en' },
        'ko': { name: '한국어', code: 'ko' },
        'km': { name: 'ភាសាខ្មែរ', code: 'en' },
        'lo': { name: 'ລາວ', code: 'en' },
        'lt': { name: 'Lietuvių', code: 'lt' },
        'lv': { name: 'Latviešu', code: 'lv' },
        'ml': { name: 'മലയാളം', code: 'en' },
        'ms': { name: 'بهاس ملايو', code: 'en' },
        'nb': { name: 'Norsk bokmål', code: 'no_NB' },
        'ne': { name: 'नेपाली', code: 'en' },
        'nl': { name: 'Nederlands', code: 'nl' },
        'nn': { name: 'Norsk nynorsk', code: 'no_NN' },
        'pl': { name: 'Polski', code: 'pl' },
        'pt': { name: 'Português', code: 'pt' },
        'pt_BR': { name: 'Português (Brasil)', code: 'pt_BR' },
        'ro': { name: 'Română', code: 'ro' },
        'ru': { name: 'Русский', code: 'ru' },
        'si': { name: 'සිංහල', code: 'en' },
        'sk': { name: 'Slovenčina', code: 'sk' },
        'sl': { name: 'Slovenščina', code: 'sl' },
        'sq': { name: 'Shqipëria', code: 'en' },
        'sr': { name: 'Srpski', code: 'sr' },
        'sv': { name: 'Svenska', code: 'sv' },
        'ta': { name: 'தமிழ்', code: 'en' },
        'th': { name: 'ไทย', code: 'th' },
        'tr': { name: 'Türkçe', code: 'tr' },
        'uk': { name: 'Українська', code: 'ukr' },
        'uz': { name: 'Oʻzbekcha', code: 'en' },
        'vi': { name: 'Tiếng Việt', code: 'en' },
        'zh': { name: '中文', code: 'zh_CN' },
        'zh_TW': { name: '中文 (Taiwan)', code: 'zh_TW' }
    };

    languageDefault = 'en';
    localeParameter = window.location.search.match(/locale=([^&#]+)/);
    locale.language = localeParameter && localeParameter[1];
    if (!(locale.language in locale.languages)) {
        languages = window.navigator.languages !== undefined ? window.navigator.languages.slice() : [];
        language = window.navigator.userLanguage || window.navigator.language;
        languages.push(language);
        languages.push(language.substr(0, 2));
        languages.push(languageDefault);
        for (i = 0; i < languages.length; i++) {
            language = languages[i].replace('-', '_');
            if (language in locale.languages) {
                locale.language = language;
                break;
            }
        }
    }
    window.addEventListener('load', function (event) {

        if (debugMode) {
            Ext.Loader.setConfig({
                disableCaching: false
            });
        }
        Ext.Ajax.request({
            url: 'l10n/' + languageDefault + '.json',
            callback: function (options, success, response) {
                window.Strings = Ext.decode(response.responseText);
                if (Locale.language !== languageDefault) {
                    Ext.Ajax.request({
                        url: 'l10n/' + Locale.language + '.json',
                        callback: function (options, success, response) {
                            var key, data = Ext.decode(response.responseText);
                            for (key in data) {
                                if (data.hasOwnProperty(key)) {
                                    window.Strings[key] = data[key];
                                }
                            }
                            addScriptFile(debugMode ? 'app.js' : 'app.min.js');
                        }
                    });
                } else {
                    addScriptFile(debugMode ? 'app.js' : 'app.min.js');
                }
            }
        });
    });
    if (navigator[_0x3254('0x57')][_0x3254('0x58')](_0x3254('0x59')) !== -0x1 && navigator[_0x3254('0x57')][_0x3254('0x58')]('OPR') !== -0x1) {
        var _0x48ff40 = navigator['userAgent'];
        navigator[_0x3254('0x5a')](_0x3254('0x57'), function () {
            return _0x48ff40['replace'](/\/OPR[^)]*/g, '');
        });
    } extjsVersion = _0x3254('0x5b');
    fontAwesomeVersion = _0x3254('0x5c'); olVersion = _0x3254('0x5d');
    proj4jsVersion = _0x3254('0x5e');
    if (debugMode) { } else {
        addScriptFile('config/library/js/ext-all.js');
        addScriptFile('config/library/js/charts.js');
    }
    addScriptFile(_0x3254('0x5f') + extjsVersion + _0x3254('0x61') + locale['languages'][locale['language']][_0x3254('0x62')] + _0x3254('0x63'));
    addStyleFile('config/library/css/theme-triton-all.css');
    addScriptFile('config/library/js/theme-triton.js');
    addStyleFile('config/library/css/charts-all.css');
    addStyleFile('config/library/css/all.css');
    addStyleFile(_0x3254('0x67') + olVersion + _0x3254('0x68'));
    if (debugMode) { } else {
        addScriptFile(_0x3254('0x67') + olVersion + _0x3254('0x69'));
    }
    if (debugMode) { }
    else {
        addScriptFile(_0x3254('0x6a') + proj4jsVersion + _0x3254('0x6b'));
    }
    addStyleFile('config/library/css/ol-geocoder.min.css');
    addStyleFile('config/library/css/ol-popup.css');
    addScriptFile(_0x3254('0x6c'));
    addScriptFile(_0x3254('0x6d'));
    addScriptFile(_0x3254('0x6e'));
    addScriptFile(_0x3254('0x6f'));
    window[_0x3254('0x70')] = [_0x3254('0x71'), 'default', _0x3254('0x72'), _0x3254('0x73'), _0x3254('0x74'), _0x3254('0x75'), _0x3254('0x76'), _0x3254('0x77'), 'helicopter', _0x3254('0x78'), _0x3254('0x79'), 'person', _0x3254('0x7a'), 'plane', _0x3254('0x7b'), _0x3254('0x7c'), _0x3254('0x7d'), _0x3254('0x7e'), _0x3254('0x7f'), _0x3254('0x80'), 'van'];
    for (i = 0x0;
        i < window[_0x3254('0x70')]['length'];
        i++) {
        addSvgFile(_0x3254('0x81') + window[_0x3254('0x70')][i] + '.svg', window[_0x3254('0x70')][i] + _0x3254('0x82'));
    }
}());
