// checkbox

let checkbox = Array.from(document.getElementsByClassName('checkbox'));
let checkboxRow = Array.from(document.getElementsByClassName('checkboxRow'));

checkboxRow.forEach((item) => {
    item.addEventListener('click', function () {
        item.querySelector('.checkbox').classList.toggle('active');
    })
})
// اسلایدر 
var brands = new Swiper(".brands", {
    slidesPerView: 2.8,
    loop: true,
    spaceBetween: 14,
    breakpoints: {
        576: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 6
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});
var time = new Swiper(".time", {
    slidesPerView: 1.8,
    loop: true,
    spaceBetween: 16,
    breakpoints: {
        576: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 4
        },
        1280: {
            slidesPerView: 6
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});
var mobile = new Swiper(".mobile", {
    slidesPerView: 1.6,
    loop: true,
    spaceBetween: 16,
    breakpoints: {
        1280: {
            slidesPerView: 6
        },
        1024: {
            slidesPerView: 4
        },
        992: {
            slidesPerView: 3
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});
var mobile2 = new Swiper(".mobile2", {
    slidesPerView: 2.4,
    loop: true,
    spaceBetween: 16,
    breakpoints: {
        1280: {
            slidesPerView: 6
        },
        1024: {
            slidesPerView: 4
        },
        992: {
            slidesPerView: 3
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});
var mobile = new Swiper(".blog", {
    slidesPerView: 1.1,
    loop: true,
    spaceBetween: 24,
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2
        },
        1280: {
            slidesPerView: 3
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});
var comments = new Swiper(".comments", {
    slidesPerView: 1.7,
    loop: true,
    spaceBetween: 24,
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2
        },
        1280: {
            slidesPerView: 3
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});
var swiper = new Swiper(".smallImgs", {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".gallery", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});
var brands = new Swiper(".payment", {
    slidesPerView: 2.8,
    loop: true,
    spaceBetween: 14,
    breakpoints: {
        576: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 5
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});
// see-more

let seeMore = Array.from(document.getElementsByClassName('see-more'));

seeMore.forEach((item) => {
    item.addEventListener('click', function () {
        item.previousElementSibling.classList.toggle('active');
        item.querySelector('svg').classList.toggle('active');
    })
})

// accardion

let accardionBtn = Array.from(document.getElementsByClassName('accardionBtn'));
let accardionContent = Array.from(document.getElementsByClassName('accardionContent'));
let footerBtn = Array.from(document.getElementsByClassName('footer-btn'));
let footerContent = Array.from(document.getElementsByClassName('footer-content'));
let toggleCatDropdown= Array.from(document.getElementsByClassName('toggleCatDropdown'));

accardionBtn.forEach((item) => {
    item.addEventListener('click', function () {
        item.nextElementSibling.classList.toggle('active');
    })
})
toggleCatDropdown.forEach((item) => {
    item.addEventListener('click', function () {
        item.nextElementSibling.classList.toggle('active');
        item.querySelector('svg').classList.toggle('active');
    })
})
footerBtn.forEach((item) => {
    item.addEventListener('click', function () {
        item.nextElementSibling.classList.toggle('active');
        item.querySelector('svg').classList.toggle('active');
    })
})

// tab

let tabs = Array.from(document.querySelectorAll('#myTab li'));
let tabsMenu = Array.from(document.querySelectorAll('.tabs'));
let catDropdownTab = Array.from(document.querySelectorAll('.catDropdownTab'));
let myTabContent = Array.from(document.querySelectorAll('#myTabContent > div'));
let tabContent = Array.from(document.querySelectorAll('.tabContent > div'));
let catDropdownContent = Array.from(document.querySelectorAll('.catDropdownContent > div'));

tabs.forEach((item) => {
    item.addEventListener('click', function () {
        tabs.forEach((items) => { items.classList.remove('active') });
        item.classList.add('active');
        let tabId = item.dataset.id;
        myTabContent.forEach((content) => {
            let contentId = content.dataset.id;
            if (tabId === contentId) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        })
    })
})

tabsMenu.forEach((item) => {
    item.addEventListener('mouseenter', function () {
        tabsMenu.forEach((items) => { items.classList.remove('active') });
        item.classList.add('active');
        let tabId = item.dataset.id;
        tabContent.forEach((content) => {
            let contentId = content.dataset.id;
            if (tabId === contentId) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        })
    })
})

catDropdownTab.forEach((item) => {
    item.addEventListener('click', function () {
        catDropdownTab.forEach((items) => { items.classList.remove('active') });
        item.classList.add('active');
        let tabId = item.dataset.id;
        catDropdownContent.forEach((content) => {
            let contentId = content.dataset.id;
            if (tabId === contentId) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        })
    })
})