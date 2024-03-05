import './lazyload';
import detectTouch from './detectTouch';
import masks from './masks';
import menu from './menu';
import validation from './validation';
import fancybox from './fancybox.js';
import modals from './modals';

import mapInit from './mapInit.js';
import setScrollbarWidth from './setScrollbarWidth';
import setHeaderPadding from './setHeaderPadding';
import setBreadcrumbsPadding from './setBreadcrumbsPadding';
import changeLanguages from './changeLanguages';
import seoTextExpand from './seoTextExpand';
import heroDoubleSwiper from './heroDoubleSwiper.js';
import casesSwiper from './casesSwiper.js';
import gallerySwipers from './gallerySwipers.js';

document.addEventListener('DOMContentLoaded', function () {
    detectTouch();
    masks();
    menu();
    validation();
    fancybox();
    modals();

    mapInit();
    setScrollbarWidth();
    setHeaderPadding();
    setBreadcrumbsPadding();
    changeLanguages();
    seoTextExpand();
    heroDoubleSwiper();
    casesSwiper();
    gallerySwipers();
});
