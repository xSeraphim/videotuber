if(document.getElementById("js-main-slider")) {
    
    // var galleryThumbs = new Swiper('#js-main-slider-thumbs', {
    //     slidesPerView: 1.5,
    //     watchSlidesVisibility: true,
    //     watchSlidesProgress: true,
    //     spaceBetween: 0,
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 3
    //         },
    //         1200: {
    //             slidesPerView: 5
    //         },
    //         1024: {
    //             slidesPerView: 5
    //         }
    //     }
    // });
    var galleryTop = new Swiper('#js-main-slider', {
        spaceBetween: 0,
        preloadImages: false,
        lazy: true,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        autoplay: {
            delay: 15000,
            disableOnInteraction: true
        },
        breakpoints: {
            320: {
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                }
            }
        }
    });
}
if(document.getElementById("js-sponsor-slider")) {
    
    // var galleryThumbs = new Swiper('#js-main-slider-thumbs', {
    //     slidesPerView: 1.5,
    //     watchSlidesVisibility: true,
    //     watchSlidesProgress: true,
    //     spaceBetween: 0,
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 3
    //         },
    //         1200: {
    //             slidesPerView: 5
    //         },
    //         1024: {
    //             slidesPerView: 5
    //         }
    //     }
    // });
    var galleryTop = new Swiper('#js-sponsor-slider', {
        slidesPerView: 3,
        grid: {
            rows: 2,
        },
        spaceBetween: 30,
        preloadImages: false,
        lazy: true,
        loop: true,
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        //   },
        autoplay: {
            delay: 15000,
            disableOnInteraction: true
        },
        breakpoints: {
            320: {
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                }
            }
        }
    });
}