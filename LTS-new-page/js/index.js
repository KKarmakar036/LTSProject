document.getElementById('manu-bar').addEventListener('click', () => {
    document.querySelector('.hed-right').classList.toggle('show')
});

document.querySelector('.vdo-icon').addEventListener('click', () => {
    document.querySelector('.car-video').classList.toggle('video-show')
});


document.querySelector('#vdo-end').addEventListener('click', () => {
    document.querySelector('.car-video').classList.toggle('video-hide')
});


$(document).ready(function () {
    $('.car-story-slider').slick({
        autoplay: true, 
        autoplaySpeed: 1000,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    $('.client-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<span class="pre-arow-btn"><i class="fa-solid fa-arrow-left"></i></span>',
        nextArrow: '<span class="next-arow-btn"><i class="fa-solid fa-arrow-right"></i></span>',
    });

    $('.Partners-slider').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});