import debounce from './debounce.js';

export default class Slider {
  constructor() {
    this.sliderArea = document.querySelector('.jsSliderArea');
    this.sliderControl = document.querySelectorAll('.jsSliderController li');
    this.onResize = debounce(this.onResize.bind(this), 200);
    this.class = 'active';
  }

  activeControl(index) {
    this.sliderControl.forEach(ctrl => {
      ctrl.classList.remove(this.class);
    })
    this.sliderControl[index].classList.add(this.class);
  }

  moveSlide(distX) {
    this.sliderArea.style.transform = `translate3d(${distX}px, 0, 0)`;
  }

  slideConfig() {
    this.slideArray = [...this.sliderArea.children].map(element => {
      const position = -(element.offsetLeft);
      return { element, position };
    })
  }

  slidesIndexNav(index) {
    this.index = {
      active: index,
    }
  }

  changeSlide(index) {
    const activeSlide = this.slideArray[index];
    this.moveSlide(activeSlide.position);
    this.slidesIndexNav(index);
  }

  onResize() {
    setTimeout(() => {
      this.slideConfig();
      this.changeSlide(this.index.active);
    }, 1000)
  }

  addEvents() {
    window.addEventListener('resize', this.onResize);

    ['touchstart', 'click'].forEach(userEvent => {
      this.sliderControl.forEach((ctrl, index) => {
        ctrl.addEventListener(userEvent, e => {
          e.preventDefault();
          this.changeSlide(index);
          this.activeControl(index);
        })
      })
    })
  }

  init() {
    this.slideConfig();
    this.changeSlide(0);
    this.addEvents();
    return this;
  }
}