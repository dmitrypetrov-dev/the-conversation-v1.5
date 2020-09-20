var headerMenuLinks = document.querySelectorAll('.header-nav__link');
var burgerMenu = document.querySelector('.header-burger__menu');
var headerMenu = document.querySelector('.site-navigation');
var body = document.querySelector('body');

(function () {
    if (window.innerWidth <= 768) {
        for (var i = 0; i < headerMenuLinks.length; i += 1) {
            headerMenuLinks[i].addEventListener('click', function () {
                burgerMenu.classList.toggle('active');
                headerMenu.classList.toggle('active');
                body.classList.toggle('lock');
            });
        }
    }
})();

// burger menu

$(document).ready(function () {
    $('.header-burger').click(function (event) {
        $('.header-burger__menu, .site-navigation').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


//anchor links

$(document).ready(function () {
    $('a[href^="#technology"]').on('click', function (event) {
        event.preventDefault();
        let sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        $('html, body').animate({scrollTop: dn}, 500);
    });

    $('a[href^="#extension"]').on('click', function (event) {
        event.preventDefault();
        let sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        $('html, body').animate({scrollTop: dn}, 1000);
    });

    $('a[href^="#feedback"]').on('click', function (event) {
        event.preventDefault();
        let sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        $('html, body').animate({scrollTop: dn}, 1000);
    });
});


$(document).ready(function () {
    $(".intro__globe").show();
});

// $(document).ready(function () {
//     $(".intro__title-1").delay(500).fadeIn();
//     $(".intro__title-2").hide().delay(1000).fadeIn();
//     $(".intro__title-3").hide().delay(1500).fadeIn();
//     $(".intro__subtitle").hide().delay(2100).fadeIn();
//     $(".intro-btn").hide().delay(2100).fadeIn();
// });






