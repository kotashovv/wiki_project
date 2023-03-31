document.addEventListener('DOMContentLoaded', ()=>{

    const callPopupBtns = document.querySelectorAll(".call-popup");
    const popupWindow = document.querySelector('.popup__window')
    const closeBtns = document.querySelectorAll('.close-popup');

    if (callPopupBtns.length != null) {

        if (closeBtns.length != null) {
            closeBtns.forEach((item)=>{
                item.addEventListener('click', ()=>{
                    ClosePopup();
                })
            })
        }

        callPopupBtns.forEach(function(item) {
            item.addEventListener('click', ()=>{
                OpenPopup(item);
            })
        });

       
    };

    function OpenPopup(item) {
        let currentPopup = document.querySelector(item.getAttribute('data-target'));
        currentPopup.classList.add('active');
        popupWindow.classList.add("active");
        document.body.style.overflow = "hidden";
        addEventListener('keydown', (e)=>{
            let target = e.key;
            if (e.key == "Escape") {
                ClosePopup();
            }
            
        })
        CloseMenu();
    }

    function ClosePopup() {
        let allPopups = document.querySelectorAll('.popup__item');
        allPopups.forEach(function(item){
            item.classList.remove('active');
        });
        popupWindow.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // showlist in mobile menu

        const showListBtn = document.querySelectorAll('.show-list');

        if (showListBtn.length != 0) {
            showListBtn.forEach(function(item){
                item.addEventListener('click', (e)=>{
                    e.preventDefault();
                    let target = e.target;
                    if (target.classList.contains('active')) {
                        HiddenList(target);
                    } else {
                        ShowList(target);
                    }
                })
            });
        }

        function ShowList(item) {
            item.classList.add('active');
            let currentList = item.nextElementSibling;
            currentList.style.maxHeight = currentList.scrollHeight + 'px';
            currentList.classList.add('active');
        }
        function HiddenList(item) {
            item.classList.remove('active');
            let currentList = item.nextElementSibling;
            currentList.style.maxHeight = 0;
            currentList.classList.remove('active');
        }


    //end

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

    // масонри сетка
    // отложенное выполенние скрипта из-за неправильного позционирования
    setTimeout(() => {
        let container = document.querySelector('.edge__body');
        var msnry = new Masonry( '.grid', {
        // options
        });
    }, 1000);


    const burgerBtn = document.querySelector('.burger-btn');
    const mobileMenu = document.querySelector('.header__mobile');

    if (burgerBtn) {
        burgerBtn.addEventListener('click', (e)=>{
            let target = e.target;
            if (target.classList.contains('active')) {
                CloseMenu();
            } else {
                OpenMenu();
            }
        })
    }

    function CloseMenu() {
        burgerBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style = 'hidden';
    };
    function OpenMenu() {
        burgerBtn.classList.add('active');
        mobileMenu.classList.add('active');
        document.body.style = 'auto';
    };
})
