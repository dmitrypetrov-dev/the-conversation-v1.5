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
    setTimeout(showAll, 1500);
});

function showAll() {
    $(".wrapper").css("visibility", "visible").hide().delay(1).fadeIn(1400, "linear");
    $(".intro__globe").show();
}


// $(document).ready(function () {
//     $(".intro__title-1").delay(500).fadeIn();
//     $(".intro__title-2").hide().delay(1000).fadeIn();
//     $(".intro__title-3").hide().delay(1500).fadeIn();
//     $(".intro__subtitle").hide().delay(2100).fadeIn();
//     $(".intro-btn").hide().delay(2100).fadeIn();
// });


// lottie delay

var technologyLottie = document.querySelector(".technology__lottie");
var onthegoLottie = document.querySelector(".on-the-go__lottie");
var productionLottie = document.querySelector(".production__lottie");

$(document).ready(function () {
    var wow = new WOW(
        {
            callback: lottiePlay
        }
    );
    wow.init();

    function lottiePlay(e) {
        if (e.classList.contains("technology__right")) {
            setTimeout(function () { technologyLottie.play();}, 3100);
        } else if (e.classList.contains("on-the-go__right")) {
            setTimeout(function () { onthegoLottie.play();}, 2350);
        } else if (e.classList.contains("production__right")) {
            setTimeout(function () { productionLottie.play();}, 2200);
        }
    }
});









