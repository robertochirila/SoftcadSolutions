$(document).ready(function () {
    console.log('The script is loaded.');
    $('.js--scroll-to-services').click(function () {
        console.log("Click!");
        $('html,body').animate({scrollTop: $('.js--services').offset().top}, 1000);
    });
    $('.js--naval').click(function () {
        console.log("Click!");
        $('html,body').animate({scrollTop: $('.js--naval-projects').offset().top}, 1000);
    });
    $('.js--software').click(function () {
        console.log("Click!");
        $('html,body').animate({scrollTop: $('.js--software-projects').offset().top}, 1000);
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
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '100%'
    });
    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated bounceInUp');
    }, {
        offset: '100%'
    });
    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeInLeftBig');
    }, {
        offset: '80%'
    });
    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated bounceIn');
    }, {
        offset: '80%'
    });
    $('.js--wp-5').waypoint(function (direction) {
        $('.js--wp-5').addClass('animated fadeInRight');
    }, {
        offset: '80%'
    });
    $('.js--wp-6').waypoint(function (direction) {
        $('.js--wp-6').addClass('animated bounceInUp');
    }, {
        offset: '80%'
    });
    $('.js--wp-7').waypoint(function (direction) {
        $('.js--wp-7').addClass('animated bounceIn');
    }, {
        offset: '80%'
    });
    $('.js--wp-8').waypoint(function (direction) {
        $('.js--wp-8').addClass('animated fadeInRight');
    }, {
        offset: '80%'
    });
    $('.js--wp-9').waypoint(function (direction) {
        $('.js--wp-9').addClass('animated bounceInUp');
    }, {
        offset: '80%'
    });
    $('.js--wp-10').waypoint(function (direction) {
        $('.js--wp-10').addClass('animated fadeInLeftBig');
    }, {
        offset: '80%'
    });
    $('.js--wp-11').waypoint(function (direction) {
        $('.js--wp-11').addClass('animated fadeInLeft');
    }, {
        offset: '80%'
    });
    $('.js--wp-12').waypoint(function (direction) {
        $('.js--wp-12').addClass('animated bounceInUp');
    }, {
        offset: '80%'
    });
    $('.js--wp-13').waypoint(function (direction) {
        $('.js--wp-13').addClass('animated fadeInRight');
    }, {
        offset: '80%'
    });
    $('.js--wp-14').waypoint(function (direction) {
        $('.js--wp-14').addClass('animated fadeInLeft');
    }, {
        offset: '80%'
    });
    $('.js--wp-15').waypoint(function (direction) {
        $('.js--wp-15').addClass('animated bounceInUp');
    }, {
        offset: '80%'
    });
    $('.js--wp-16').waypoint(function (direction) {
        $('.js--wp-16').addClass('animated fadeInRight');
    }, {
        offset: '80%'
    });
    $('.js--wp-17').waypoint(function (direction) {
        $('.js--wp-17').addClass('animated fadeInLeftBig');
    }, {
        offset: '80%'
    });
    $('.js--wp-18').waypoint(function (direction) {
        $('.js--wp-18').addClass('animated fadeInLeft');
    }, {
        offset: '80%'
    });
    $('.js--wp-19').waypoint(function (direction) {
        $('.js--wp-19').addClass('animated bounceInUp');
    }, {
        offset: '80%'
    });
    $('.js--wp-20').waypoint(function (direction) {
        $('.js--wp-20').addClass('animated fadeInRight');
    }, {
        offset: '80%'
    });
    $('.js--wp-21').waypoint(function (direction) {
        $('.js--wp-21').addClass('animated fadeInLeft');
    }, {
        offset: '80%'
    });
    $('.js--wp-22').waypoint(function (direction) {
        $('.js--wp-22').addClass('animated bounceInUp');
    }, {
        offset: '80%'
    });
    $('.js--wp-23').waypoint(function (direction) {
        $('.js--wp-23').addClass('animated fadeInRight');
    }, {
        offset: '80%'
    });
    $('.js--wp-24').waypoint(function (direction) {
        $('.js--wp-24').addClass('animated fadeInLeft');
    }, {
        offset: '100%'
    });
    /* Navigation icon */
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.removeClass('ion-navicon-round');
            icon.addClass('ion-close-round');
        } else {
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
        }
    });


});
