// 7-10-2020
function levusOnslideJquery(selector){

    const articles = $(selector).children('article');
    const length = $(selector).children('article').length-1;
    let cnt = 0;
    
    articles.first().addClass('show');

    $(selector).children('#levus-left').on('click', function(){
        setTimeout(function() {
            if(cnt>=length){
                cnt = 0; 
            }else{
                cnt++;
            }
            $(articles[cnt]).addClass('show').siblings().removeClass('show');

        }, 500);
    });

    $(selector).children('#levus-right').on('click', function(){
        setTimeout(function() {
            if(cnt>0){
                cnt--; 
            }else{
                cnt = length;
            }
            $(articles[cnt]).addClass('show').siblings().removeClass('show');
        }, 500);
    });
    
    setInterval(function() {
        if(cnt>=length){
            cnt = 0; 
        }else{
            cnt++;
        }
        $(articles[cnt]).addClass('show').siblings().removeClass('show');

    }, 8000);

}

levusOnslideJquery('#levus-slider');