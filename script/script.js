$(function(){
    start();
    var imgs = 3;
    var now = 0;
    function start(){
        $(".box2-2 img").eq(0).siblings().css({"top":"0"});
        setInterval(funtion(){slide();},2000);
    }
});