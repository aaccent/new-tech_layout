import Swiper from 'swiper/bundle';

export default () => {
    const galleries = document.querySelectorAll('.js-gallery-swiper-wrapper');

    if(galleries.length < 1) return;

    Array.from(galleries).forEach((gallery) => {
        const topGallery = gallery.querySelector('.js-gallery-top-swiper');

        if(topGallery) {
            const topSwiper = new Swiper('.js-gallery-top-swiper', {
                // width: 716,
                grid: {
                    fill: 'row',
                    rows: 2,
                },

                slidesPerView: 1.12,
                spaceBetween: 8,
                speed: 1000,
                watchOverflow: false,
                updateOnWindowResize: true,

                pagination: {
                    el: ".swiper-pagination",
                    type: "progressbar",
                },

                breakpoints: {
                    992: {
                      slidesPerView: 1.4,
                      spaceBetween: 10
                    },

                    1200: {
                        slidesPerView: 1.9,
                        spaceBetween: 12
                    },

                    1400: {
                        slidesPerView: 2.3,
                        spaceBetween: 18,
                    },
                }
            })
        }

        // topSwiper.controller.control = bottomSwiper
    });
}
