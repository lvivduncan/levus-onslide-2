
// приймає айдішку
function levusOnslideJquery(id){

    const articles = $(id).children('article');
    const length = $(id).children('article').length-1;
    let cnt = 0;
    
    articles.first().addClass('show');

    $(id).children('#levus-left').on('click', function(){
        setTimeout(function() {
            if(cnt>=length){
                cnt = 0; 
            }else{
                cnt++;
            }
            $(articles[cnt]).addClass('show').siblings().removeClass('show');

        }, 500);
    });

    $(id).children('#levus-right').on('click', function(){
        setTimeout(function() {
            if(cnt>0){
                cnt--; 
            }else{
                cnt = length;
            }
            $(articles[cnt]).addClass('show').siblings().removeClass('show');
        }, 500);
    });   

}

levusOnslideJquery('#levus-slider');