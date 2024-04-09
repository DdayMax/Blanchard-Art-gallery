// Hero swiper
const container = document.querySelector(".container")
const swiper = new Swiper('.swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2000,
  autoplay: {
    delay: 2000
  },
  effect: "fade",
  allowTouchMove: false
});

// Gallery swiper

const gallerySwiper = new Swiper('.gallery__swiper', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  direction: 'horizontal',
  loop: true,

  a11y: {
    prevSlideMessage: 'Переключить слайдер назад',
    nextSlideMessage: 'Переключить слайдер вперед',
    slideLabelMessage: '{{index}} из {{slidesLength}}',
  },

  // If we need pagination
  pagination: {
    el: '.gallery__pagination',
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.gallery__button-next',
    prevEl: '.gallery__button-prev',
  },

  breakpoints: {
    320: {
      spaceBetween: 10,
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      spaceBetween: 40,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1024: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1440: {
      spaceBetween: 60,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1920: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});

// Gallery choices

const galleryChoices = document.querySelector('#gallery__choices');
const choices = new Choices(galleryChoices, {
  searchEnabled: false,
  position: 'bottom',
  itemSelectText: '',
});


let radioBtn = document.querySelectorAll('.gallery__input');
let galleryLabel = document.querySelectorAll('.gallery__label')


 radioBtn.forEach(function (radio) {

  radio.addEventListener('click', function() {
    galleryLabel.forEach(function (radioelem) {
      radioelem.firstElementChild.removeAttribute('checked', ''),
      radioelem.firstElementChild.classList.remove('input-checked')
    })
    radio.classList.add('input-checked'),
    radio.setAttribute('checked', '')
  })
});



// Catalog accordion

new Accordion('.catalog__accordion')

// Events slider

const eventsSwiper = new Swiper('.events__swiper', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  direction: 'horizontal',
  loop: false,

  a11y: {
    prevSlideMessage: 'Переключить слайдер назад',
    nextSlideMessage: 'Переключить слайдер вперед',
    slideLabelMessage: '{{index}} из {{slidesLength}}',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.events__button-next',
    prevEl: '.events__button-prev',
  },

  pagination: {
    el: '.events__pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      spaceBetween: 10,
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      spaceBetween: 38,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1024: {
      spaceBetween: 27,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1440: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});

// Tippy

tippy('.projects__tippy', {
  content: 'Здесь могла быть ваша реклама',
  animation: 'fade',
  trigger: 'click',
});

const projectSwiper = new Swiper('.projects__swiper', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  direction: 'horizontal',
  loop: true,

  a11y: {
    prevSlideMessage: 'Переключить слайдер назад',
    nextSlideMessage: 'Переключить слайдер вперед',
    slideLabelMessage: '{{index}} из {{slidesLength}}',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.projects__button-next',
    prevEl: '.projects__button-prev',
  },

  breakpoints: {
    320: {
      spaceBetween: 16,
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      spaceBetween: 38,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1024: {
      spaceBetween: 50,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    1440: {
      spaceBetween: 30,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },

    1920: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
    }
  },
});

// Map

ymaps.ready(init);
function init() {
  // Создание карты.
  let myMap = new ymaps.Map("map", {
    center: [55.75846806898367, 37.60108849999989],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 17,
    controls: ['zoomControl', 'geolocationControl']
  }, {
    geolocationControlFloat: 'right',
    geolocationControlPosition: {
      top: 414,
      right: 10,
    },
    zoomControlSize: 'small',
    zoomControlFloat: 'none',
    zoomControlPosition: {
      top: 350,
      right: 10,
    }
  });

  let myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/map-point.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-10, -15]
  });
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom')
}

// simpleBar

document.querySelectorAll(".header__drop-down-wrapper").forEach(dropdown => {
  new SimpleBar(dropdown, {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 28,
  });
})


// drop-down-menu
document.querySelectorAll(".header__drop-down-btn").forEach(button => {
  button.addEventListener('click', function (event) {
    button.classList.toggle('header__drop-down-btn_active')
    document.querySelectorAll('.header__bottom-item').forEach(item => {
      if (item.querySelector('.header__drop-down-btn') !== button) {
        item.classList.remove('header__bottom-item_open')
        item.children[0].classList.remove('header__drop-down-btn_active')
      }
    })
    event._isClick == true

    button.parentElement.classList.toggle('header__bottom-item_open')
  })
})
const body = document.body;

body.addEventListener('click', function (event) {

  if (
    event._isClick == true ||
    event.target.classList.contains('header__drop-down-btn') == true ||
    event.target.classList.contains('header__drop-down-menu') == true
  ) return

  document.querySelectorAll('.header__bottom-item').forEach(item => {
    item.classList.remove('header__bottom-item_open')
    item.children[0].classList.remove('header__drop-down-btn_active')
  })
})


// gallery-modal
const galleryModal = document.querySelector('.gallery__modal');

document.querySelectorAll('.gallery__slide').forEach(function (modalTrig) {
  modalTrig.addEventListener('click', function () {
    galleryModal.classList.add('gallery__modal_open')
    body.classList.add('stop-scroll')
  })
});

document.querySelector('.gallery__modal-cross').addEventListener('click', function () {
  galleryModal.classList.remove('gallery__modal_open')
  body.classList.remove('stop-scroll')
});

window.addEventListener('keydown', (esc) => {
  if (esc.key === 'Escape') {
    galleryModal.classList.remove('gallery__modal_open')
    body.classList.remove('stop-scroll')
  }
});

document.querySelector('.gallery__modal .gallery__modal-box').addEventListener('click', ev => {
  ev._isClickWithinModal = true;
});

galleryModal.addEventListener('click', ev => {
  if (ev._isClickWithinModal) return;
  ev.currentTarget.classList.remove('gallery__modal_open')
  body.classList.remove('stop-scroll');
});



// Tabs

const tabsItem = document.querySelectorAll('.catalog__content');
const tabsBtn = document.querySelectorAll('.catalog__acc-content-btn');


tabsBtn.forEach(function (tabs) {
  tabs.addEventListener('click', function (tab) {
    const path = tab.currentTarget.dataset.path;

    tabsItem.forEach(function (tabs) {
      tabs.classList.remove('catalog__content_active')
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__content_active')
  })
})


// Validate

let selector = document.querySelector('#contacts__tel');
let im = new Inputmask('+7 (999)-999-99-99');
im.mask(selector)

const validate = new window.JustValidate('#contacts__form',
  {
    errorLabelStyle: {
      color: '#d11616',
    },
  }
);
validate.addField('#contacts__name', [
  {
    rule: 'required',
    errorMessage: 'Введите имя',
  },
  {
    rule: 'minLength',
    value: 2,
    errorMessage: 'Введите корректное имя',
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'Введите корректное имя',
  }
])

  .addField('#contacts__tel', [
    {
      rule: 'required',
      errorMessage: 'Укажите ваш телефон',
    },
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Boolean(Number(phone) && phone.length === 10);
      },
      errorMessage: 'Телефон не корректный',
    },
  ]);


  // Добавление href ссылкам

  if (window.innerWidth <= 1022) {
    tabsBtn.forEach(function (tabby) {
  tabby.setAttribute('href', '#catalog__left')
    })
  }


// Плавные переходы по ссылкам

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


// burger

const burger = document.querySelector('.header__burger');
const burgerNav = document.querySelector('.header__nav');
const burgerClose = document.querySelector('.header__nav-btn');

burger.addEventListener('click', function () {
  burgerNav.classList.add('header__nav_active')
  body.classList.add('stop-scroll')
})
burgerClose.addEventListener('click', function() {
  burgerNav.classList.remove('header__nav_active')
  body.classList.remove('stop-scroll')
})

document.querySelectorAll('.header__link').forEach(function(hdLink) {
  hdLink.addEventListener('click', function () {
    burgerNav.classList.remove('header__nav_active')
    body.classList.remove('stop-scroll')
  })
})

document.querySelector('.header__sign-in').addEventListener('click', function() {
  burgerNav.classList.remove('header__nav_active')
  body.classList.remove('stop-scroll')
})


// search-tablet

const openSearch = document.querySelector('.header__tablet-search-btn_to-open');
const headerSearch = document.querySelector('.header__search-wrapper');
const closeSearch = document.querySelector('.header__search-close-btn')

openSearch.addEventListener('click', function () {
  headerSearch.classList.add('header__search-wrapper_active')
  headerSearch.classList.add('header__search-wrapper-anim')
  openSearch.classList.add('header__tablet-search-btn_to-open-hidden')
})

closeSearch.addEventListener('click', function () {
  headerSearch.classList.remove('header__search-wrapper_active')
  headerSearch.classList.remove('header__search-wrapper-anim')
  openSearch.classList.remove('header__tablet-search-btn_to-open-hidden')
})

