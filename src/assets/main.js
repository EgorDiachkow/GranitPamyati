// slider
const swiper = new Swiper('.swiper-container', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-arrow-next',
        prevEl: '.swiper-arrow-prev',
    },
});

swiper.on('slideChange', slide => {
    let listSlide = slide.$wrapperEl[0];
    let activeSlide = listSlide.querySelector(".swiper-slide.swiper-slide-active");
    let activeSourceText = activeSlide.getAttribute('data-source-text');
    let sourceTarget = document.querySelector('[data-source-targer]');

    sourceTarget.textContent = activeSourceText;
});

// dropdown question
let questionList = document.querySelectorAll("[data-question-item]");

questionList.forEach(i => {
    i.addEventListener('click', ev => {
        ev.target.parentElement.classList.toggle("active");
    });
});

//dropdown
let listContainerDropdown = document.querySelectorAll("[data-dropdown-modal]");
let listDropdownShareItem = document.querySelectorAll("[data-modal-share-item]");
let listDropdownCategoryItem = document.querySelectorAll("[data-modal-category-item]");

listContainerDropdown.forEach(i => {
    let linkShare = i.querySelector("[data-modal-share]");
    let linkTriplets = i.querySelector("[data-modal-triplets]");

    if (linkShare) {
        linkShare.addEventListener('click', ev => {
            i.querySelector("[data-modal-share-item]").classList.toggle("active");
        });
    }

    if (linkTriplets) {
        linkTriplets.addEventListener('click', ev => {
            i.querySelector("[data-modal-category-item]").classList.toggle("active");
        });
    }

    document.addEventListener('click', ev => {
        if (!ev.target.closest('[data-modal-share-item]') && !ev.target.closest('[data-modal-category-item]') && !ev.target.closest("[data-modal-share]") && !ev.target.closest("[data-modal-triplets]")) {
            listDropdownShareItem.forEach(item => {
                item.classList.remove("active")
            });

            listDropdownCategoryItem.forEach(item => {
                item.classList.remove("active")
            });
        }
    });
});

//side menu fixed desktop
let locationMenu = document.querySelector('.location-menu');

document.addEventListener('scroll', () => {
    if (pageYOffset > 15) {
        locationMenu.classList.add('box-shadow');
    } else {
        locationMenu.classList.remove('box-shadow');
    }
});

// search modal open
document.addEventListener('click', ev => {
    if (ev.target.closest('[data-search-modal-btn]')) {
        let container = ev.target.closest('[data-search-modal-container]');
        let formModal = container.querySelector('[data-search-modal]');

        if (formModal) {
            formModal.classList.toggle('open');
        }
    }
});

// search modal close
document.addEventListener('click', ev => {
    if (!ev.target.closest('[data-search-modal]') && !ev.target.closest('[data-search-modal-btn]')) {
        let searchModalItems = document.querySelectorAll('[data-search-modal]');

        searchModalItems.forEach(item => {
            if (item.classList.contains('open')) {
                item.classList.remove('open');
            }
        });
    }

    if (ev.target.closest('[data-search-modal-close]')) {
        ev.target.closest('[data-search-modal]').classList.remove("open");
    }
});