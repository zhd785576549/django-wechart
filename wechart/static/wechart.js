(function ($) {
    $.fn.wechart = function (options) {

        String.prototype.endWith=function(endStr){
            var d=this.length-endStr.length;
            return (d>=0&&this.lastIndexOf(endStr)==d)
        }

        var defaults = {
            width: '1000px',
            height: '500px',
            url: '/wechart/',
            order: true,
        };
        
        var settings = $.extend(defaults, options);
        if (typeof(settings.url) != 'string') {
            console.log('Param url must be string');
            return;
        }

        if (settings.url.endWith('/') == false) {
            settings.url = settings.url + '/';
        }
        var listImageUrl = settings.url + 'image/list/';

        init(this);

        var testMenuData = [
            {
                "identity": "main",
                "order": 1,
                "name": "test1"
            },
            {
                "identity": "main",
                "order": 2,
                "name": "test2"
            },
            {
                "identity": "main",
                "order": 3,
                "name": "test3"
            }
        ]

        if(settings.order == true) {
            createMenuOrder(testMenuData);
        }

        function init(object) {
            object.css('width', settings.width);
            object.css('height', settings.height);
    
            object.css('margin-left', 'auto');
            object.css('margin-right', 'auto');
    
            $(object).append('<div class="wechart-display-panel"></div>');
        }

        
        function createMenuOrder(menuData) {
            bottom = 0;
            left = 0;
            for(var i = 0, length = testMenuData.length; i < length; i++) {
                menu = testMenuData[i];

                if(menu['identity'] == 'main') {
                    $('.wechart-display-panel').append('<span data-order="'+ (i + 1) +'" data-identify="main" class="wechart-menu">' + menu['name'] + '</span>');
                    $('.wechart-menu[data-order="'+ (i + 1) +'"]').css('left', left + 'px');
                    $('.wechart-menu[data-order="'+ (i + 1) +'"]').css('bottom', '0px');
                }
                left = left + 100;
            }
            $('.wechart-display-panel').append('<span class="wechart-menu-add">+</span>');
            $('.wechart-menu-add').css('left', left + 'px');
        }
    }
})(jQuery); 