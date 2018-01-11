$(document).ready(function () {
    console.log('The script is loaded.');
    $('.js--scroll-to-services').click(function () {
        console.log("Click!");
        $('html,body').animate({scrollTop: $('.js--services').offset().top}, 1000);
    });
    $('.js--scroll-to-home').click(function () {
        console.log("Click!");
        $('html,body').animate({scrollTop: $('.js--home').offset().top}, 1000);
    });
    $('.js--scroll-to-projects').click(function () {
        console.log("Click!");
        $('html,body').animate({scrollTop: $('.js--naval-projects').offset().top}, 1000);
    });
    $('.js--scroll-to-partners').click(function () {
        console.log("Click!");
        $('html,body').animate({scrollTop: $('.js--partners').offset().top}, 1000);
    });
    $('.js--scroll-to-location').click(function () {
        console.log("Click!");
        $('html,body').animate({scrollTop: $('.js--location').offset().top}, 1000);
    });
});
