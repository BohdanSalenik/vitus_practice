$(document).ready(function() {
    $('.header__burger').click(function(event){
        $('.header__burger,.header__mobile-nav').toggleClass('active');
        $('body').toggleClass('lock');
        $('.basket__mobile').toggleClass('dn');
    })
})