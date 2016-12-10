$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    });
    
    $('#menu-btn').click(function(){
        $('.header__menu').slideToggle(700);
        if ($(this).hasClass('not-active')) {
            $(this).addClass('is-active').removeClass('not-active');
        }else{
            setTimeout(function(){
                $('.is-active').addClass('not-active').removeClass('is-active')
            },600)
        }
    });
});
