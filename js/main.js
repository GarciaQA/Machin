$(".swiper-slide").mouseenter(function(e){
    $(this).addClass('hover');
    $('.btn-buy').addClass('see');
 });

 $('.btn-buy').mouseenter(function(e){
    $(this).addClass('see');
    $(".swiper-slide").addClass('hover');
 });

 $(".swiper-slide").mouseleave(function(e){
    $(this).removeClass('hover');
    $('.btn-buy').removeClass('see');
 });

 /* $('.btn-buy').mouseleave(function(e){
    $(this).addClass('hover');
    $('.btn-buy').addClass('see');
 }); */