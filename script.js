const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 15,
  centeredSlidesBounds: true,
  breakpoints: {
    //when window is >=1025px
    1025: {
      slidesPerView: 3,
    spaceBetween: 30,
  }},
  direction: 'horizontal',
    loop: true,
    centeredSlides: true,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  }
})