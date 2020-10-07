// 7-10-2020
function levusOnslideJquery(selector){
    "use strict";

    var articles = $(selector).children('article');
    var length = $(selector).children('article').length-1;
    var cnt = 0;
    
    articles.first().addClass('show');

    $(selector).children('#levus-left').on('click', function(){
        setTimeout(function() {
            cnt >= length ? cnt = 0 : cnt++;
            $(articles[cnt]).addClass('show').siblings().removeClass('show');

        }, 500);
    });

    $(selector).children('#levus-right').on('click', function(){
        setTimeout(function() {
            cnt > 0 ? cnt-- : cnt = length;
            $(articles[cnt]).addClass('show').siblings().removeClass('show');
        }, 500);
    });
    
    setInterval(function() {
        cnt >= length ? cnt = 0 : cnt++;
        $(articles[cnt]).addClass('show').siblings().removeClass('show');
    }, 8000);

}

levusOnslideJquery('#levus-slider');