document.addEventListener('DOMContentLoaded', ()=>{
    const pubsSlider = new Swiper('.pubs__slider', {
        slidesPerView: 6, 
        loop: true,
        initialSlide: 1,
        breakpoints: {
            0: {
                slidesPerView: 2.5,
                centeredSlides: true,
                spaceBetween: 0,
            },
            520: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            920: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 80,
            },
        }
    })

    const feedbackSlider = new Swiper('.feedback__slider', {
        
        navigation: {
            nextEl: '.feedback__slider-next',
            prevEl: '.feedback__slider-prev',
        },
        spaceBetween: 35,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    })

    const createSlider = new Swiper('.create__slider', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.create__slider-next',
            prevEl:'.create__slider-prev',
        }
    })
    
})

document.addEventListener('load', ()=>{
    let container = document.querySelector('.edge__body');
    var msnry = new Masonry( '.grid', {
    // options
    });
})