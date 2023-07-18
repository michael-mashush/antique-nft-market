import Swiper, {Navigation, Pagination} from 'swiper'
import AOS                              from 'aos'
import NavigationModule                 from './modules/NavigationModule.js'
import HeaderModule                     from './modules/HeaderModule.js'
import controlsSupportInsideSwiper      from './helpers/controls-support-inside-swiper.js'

//#region AOS

AOS.init({
    duration: 750,
    easing: 'ease-out',
    offset: 0,
})

//#endregion

//#region Swiper

Swiper.use([Pagination, Navigation])

Swiper.defaults.slidesPerGroup = 1
Swiper.defaults.grabCursor     = true
Swiper.defaults.speed          = 500

const swipers = [

    new Swiper('.intro-slider', {
        slidesPerView: 'auto',
        spaceBetween: 40,
        centeredSlides: true,
        initialSlide: 2,
        navigation: {
            prevEl: '.intro-slider-prev-button',
            nextEl: '.intro-slider-next-button',
        },
        breakpoints: {
            0: {
                spaceBetween: 10,
            },
            426: {
                spaceBetween: 20,
            },
            769: {
                spaceBetween: 30
            },
            1025: {
                spaceBetween: 40
            }
        }
    }),

    new Swiper('.collections-slider', {
        slidesPerView: 4,
        spaceBetween: 20,
        pagination: {
            el: '.collections-slider-pagination',
            bulletElement: 'button',
            clickable: true
        },
        breakpoints: {
            0: {
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 10
            },
            769: {
                slidesPerView: 'auto',
                centeredSlides: false,
                spaceBetween: 20
            },
            1821: {
                slidesPerView: 4,
                centeredSlides: false,
                spaceBetween: 20
            }
        }
    }),

    new Swiper('.recent-drops-slider', {
        slidesPerView: 4,
        spaceBetween: 20,
        pagination: {
            el: '.recent-drops-slider-pagination',
            bulletElement: 'button',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 10
            },
            769: {
                slidesPerView: 'auto',
                centeredSlides: false,
                spaceBetween: 20
            },
            1821: {
                slidesPerView: 4,
                centeredSlides: false,
                spaceBetween: 20
            }
        }
    }),

    new Swiper('.latest-information-slider', {
        slidesPerView: 3,
        spaceBetween: 20,
        autoHeight: false,
        pagination: {
            el: '.latest-information-slider-pagination',
            bulletElement: 'button',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                autoHeight: true
            },
            601: {
                slidesPerView: 2,
                autoHeight: false
            },
            1025: {
                slidesPerView: 3,
                autoHeight: false
            },
        }
    })

]

controlsSupportInsideSwiper(swipers, ['a'])

//#endregion

//#region NavigationModule

const navigationModule = new NavigationModule({
    navigationElement: {
        sourceClassName: 'navigation',
        activeClassName: 'navigation--active',
    },
    burgerElement: {
        sourceClassName: 'burger-button',
        activeClassName: 'burger-button--active',
    },
    linkElement: {
        sourceClassName: 'navigation-link',
        activeClassName: 'navigation-link--active',
    },
    topIndentElementOnScroll: {
        sourceClassName: 'header-section'
    },
    isAnchorNavigation: false,
    immediatelyInitializeModule: true
})

//#endregion

//#region HeaderModule

const headerModule = new HeaderModule({
    headerElement: {
        sourceClassName: 'header-section',
        activeClassName: 'header-section--active',
    },
    immediatelyInitializeModule: true,
    triggerPoint: 0
})

//#endregion
