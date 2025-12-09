const menuBtnsWrapper = document.querySelector('.sayros-nav-menu-icons-wrapper');

/* ---------------- Menu ---------------- */
menuBtnsWrapper.addEventListener('click', () => {
  const openMenuBtn = document.querySelector('.menuOpenBtn');
  const closeMenuBtn = document.querySelector('.menuCloseBtn');
  const menuNavWrapper = document.querySelector('.sayros-nav-links-wrapper');

  openMenuBtn.classList.toggle('active');
  closeMenuBtn.classList.toggle('active');
  menuNavWrapper.classList.toggle('active');
})

/* ---------------- Carousel ---------------- */
const buttons = document.querySelectorAll('[data-fnd-carousel-btn]');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const direction = btn.dataset.carouselBtn === 'next' ? 1 : -1;
    const slides = btn.closest('[data-carousel]').querySelector('[data-slides-container]');

    const activeSlide = slides.querySelector('[data-active-slide]');
    let newIndex = [...slides.children].indexOf(activeSlide) + direction;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.activeSlide = true;
    delete activeSlide.dataset.activeSlide;
  })
})