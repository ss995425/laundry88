// ページロードから1秒後に、サイトタイトルにアニメーションを適用
$(function(){
    setTimeout(function(){
        $('.site-title').addClass('active');
    },1000);
//サイドボタンを200pxスクロールしたら表示
$(window).on('scroll',function(){
    var scrollPosition = $(window).scrollTop();
    if (scrollPosition > 200){
        $('#side-btn').addClass('active');
    } else {
        $('#side-btn').removeClass('active');
    }
});
//serviceのトップ画像を１秒かけて表示
$(window).trigger('scroll');
$('.service-img').hide().fadeIn(1000);
});