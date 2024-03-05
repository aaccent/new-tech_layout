import Swiper from 'swiper/bundle';

export default () => {
    const imagesSlider = document.getElementById('home-images-swiper');
    const infoSlider = document.getElementById('home-info-swiper');

    if(!imagesSlider && !infoSlider) return;

    const infoSwiper = new Swiper('#home-info-swiper', {
        speed: 1000,
        parallax: true,

        navigation: {
            nextEl: '.home__swiper-button-next',
            prevEl: '.home__swiper-button-prev',
        },

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: false,
        },
    })

    const imagesSwiper = new Swiper('#home-images-swiper', {
        speed: 400,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    })

    infoSwiper.controller.control = imagesSwiper;
}
