import Swiper from 'swiper/bundle';

export default () => {
    const boxes = document.querySelectorAll('.js-cases-swiper-box');

    if(boxes.length > 0) {
        Array.from(boxes).forEach( (box) => {
            const tabsWrapper = box.querySelector('.cases-section__nav-swiper-wrapper');
            const casesNamesList = Array.from(box.querySelectorAll('.cases-section__swiper-slide .case-slide__name'));

            casesNamesList.forEach( (name, index, array) => {
                let li = document.createElement('li');
                li.classList.add('cases-section__nav-swiper-slide');
                li.classList.add('swiper-slide');

                let btn = document.createElement('button');
                btn.type = 'button';
                btn.classList.add('case-tab');
                btn.textContent = name.textContent.trim();
                btn.dataset.tab = index;

                li.append(btn);
                tabsWrapper.append(li);
            })

            const tabsSwiper = new Swiper(box.querySelector('.js-tabs-swiper'), {
                spaceBetween: 0,
                slidesPerView: 'auto',
                freeMode: true,
                watchSlidesProgress: true,
            })

            const casesSwiper = new Swiper(box.querySelector('.js-cases-swiper'), {
                speed: 400,
                autoHeight: true,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },

                navigation: {
                    nextEl: box.querySelector('.cases-section__swiper-button-next'),
                },

                thumbs: {
                    swiper: tabsSwiper,
                },

                breakpoints: {
                    1199: {
                        allowTouchMove: true,
                        autoHeight: true,
                    }
                }
            })
        })
    }
}
