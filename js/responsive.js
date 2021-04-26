//responsive when charge event
$(function () {
    //get height bakground
    var background_banner= $('.background').height();
    background_banner = background_banner +1;
    $('.backdrop').css('height', background_banner+'px');
    let win = window.matchMedia("only screen and (max-width: 978px)").matches;
    if (win) {
        $('.category-item').addClass('mobile');
        $('.category-item .row .col-md-8').hide();

    } else {
        $('.category-item').removeClass('mobile');
        $('.category-item .row .col-md-8').show();
    }
});

//responsive when resize event
$(window).resize(function () {
    //get height bakground
    var background_banner= $('.background').height();
    background_banner = background_banner + 1;
    $('.backdrop').css('height', background_banner+'px')
    let win = window.matchMedia("only screen and (max-width: 978px)").matches;
    if (win) {
        $('.category-item').addClass('mobile');
        $('.category-item .row .col-md-8').hide();
    } else {
        $('.category-item').removeClass('mobile');
        $('.category-item .row .col-md-8').show();
    }
});