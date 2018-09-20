$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
    $('.navbar').addClass('nav-light');
    $('.mynav-link').css('color', '#000000');
    } else {
    $('.navbar').removeClass('nav-light');
    $('.mynav-link').css('color', '#FFFFFF');
    }
});