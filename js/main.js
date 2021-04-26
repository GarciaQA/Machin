$(".swiper-slide").mouseenter(function(e){
    $(".swiper-slide").addClass('hover');
    $('.btn-buy').addClass('see');
 });

 $('.btn-buy').mouseenter(function(e){
    $('.btn-buy').addClass('see');
    $(".swiper-slide").addClass('hover');
 });

 $(".swiper-slide").mouseleave(function(e){
    $(".swiper-slide").removeClass('hover');
    $('.btn-buy').removeClass('see');
 });

 $('.btn-buy').on('click', function(e){
    $(".swiper-slide").removeClass('hover');
    $('.btn-buy').removeClass('see');
 });
