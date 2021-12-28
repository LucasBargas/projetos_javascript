import debounce from './debounce.js';

export default class Slide {
  constructor() {
    this.slide = document.querySelector('.eventsSection-slide');
    this.control = document.querySelectorAll('.control span');

    this.activeClass = 'active';
    this.events = ['click', 'touchstart']
    this.addControl();

    this.control[1].classList.add(this.activeClass);
  }

  // Slides config

  moveSlide(distX) {
    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
  }

  slidePosition(slide) {
    const calcPosition = slide.offsetLeft % this.slide.offsetWidth;
    return calcPosition;
  }

  slidesConfig() {
    this.slideArray = [...this.slide.children].map(element => {
      const calcPosition = this.slidePosition(element);
      const position = -(element.offsetLeft) + calcPosition;
      return { element, position };
    });
  }

  slidesIndexNav(index) {
    const last = this.slideArray.length - 1;
     
    this.index = {
      prev: index ? index - 1 : undefined,
      active: index,
      next: index === last ? undefined : index + 1
    }
  }

  changeSlide(index) {
    const activeSlide = this.slideArray[index];
    this.moveSlide(activeSlide.position );
    this.slidesIndexNav(index);
  }

  activeControlItem() {
    this.control.forEach(item => item.classList.remove(this.activeClass))
    this.control[this.index.active].classList.add(this.activeClass);
  }

  addControl() {
    this.events.forEach(userEvent => {
      this.control.forEach((item, index) => {
        item.addEventListener(userEvent, e => {
          e.preventDefault();
          this.changeSlide(index);
          this.activeControlItem();
        })
      })
    })
  }

  onResize() {
    setTimeout(() => {
      this.slidesConfig();
      this.changeSlide(this.index.active);
    }, 1000)
  }

  addSlideEvents() {
    window.addEventListener('resize', this.onResize);
  }

  bindEvents() {
    this.onResize = debounce(this.onResize.bind(this), 200);
  }

  init() {
    this.bindEvents();
    this.addSlideEvents();
    this.slidesConfig();
    this.changeSlide(1);
    return this;
  }
}