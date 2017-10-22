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

        var testMenuData = {
            "button":[
            {
                "id": 4,   
                 "type":"click",
                 "name":"今日歌曲",
                 "key":"V1001_TODAY_MUSIC"
             },
             {
                "id": 5,
                  "type":"click",
                  "name":"歌手简介",
                  "key":"V1001_TODAY_SINGER"
             },
             {
                  "name":"菜单",
                  "id": 6,
                  "sub_button":[
                  {
                      "id": 1,
                      "type":"view",
                      "name":"搜索",
                      "url":"http://www.soso.com/"
                   },
                   {
                      "id": 2,
                      "type":"view",
                      "name":"视频",
                      "url":"http://v.qq.com/"
                   },
                   {
                      "id": 3,
                      "type":"click",
                      "name":"赞一下我们",
                      "key":"V1001_GOOD"
                   }]
              }]
        }

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
            var button = menuData['button'];
            if(button != undefined) {
                var mainMenuLeft = 0;
                for(i = 0; i <button.length; i++ ) {
                    var menu = button[i];
                    var subButton = menu['sub_button'];
                    $('.wechart-display-panel').append('<span data-id="' + menu['id'] + '" class="wechart-menu">' + menu['name'] + '</span>');
                    $('.wechart-menu[data-id="' + menu['id'] + '"]').css('left', mainMenuLeft + 'px');
                    $('.wechart-menu[data-id="' + menu['id'] + '"]').css('bottom', '0px');
                    mainMenuLeft += 100;
                    if(subButton != undefined) {
                        var position = $('.wechart-menu[data-id="' + menu['id'] + '"]').position();
                        var left = position.left;
                        var top = position.top;
                        for(j = 0; j < subButton.length; j++) {
                            var subMenu = subButton[j];
                            top = top - 50;
                            $('.wechart-display-panel').append('<span data-id="' + subMenu['id'] + '" class="wechart-menu">' + subMenu['name'] + '</span>');
                            $('.wechart-menu[data-id="' + subMenu['id'] + '"]').css('top', top + 'px');
                            $('.wechart-menu[data-id="' + subMenu['id'] + '"]').css('left', left + 'px');
                        }
                    }
                }
            }
        }
    }
})(jQuery); 

function addMainMenu(object) {
    alert("添加菜单");
}