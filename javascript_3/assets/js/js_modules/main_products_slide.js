export default class MainProductsSlide {
  constructor() {
    this.slider = document.querySelector('.jsProductsSlider');
    this.sliderControl = document.querySelectorAll('.jsMainSliderControl li');

    this.events = ['touchstart', 'click'];
    this.onResize = this.onResize.bind(this);
  }

  activeControl(e) {
    this.sliderControl.forEach(ctrl => {
      ctrl.classList.remove('active');
    })
    e.target.classList.add('active');
  }

  moveSlide(distX) {
    this.slider.style.transform = `translate3d(${distX}px, 0, 0)`;
  }

  slideConfig() {
    this.slideArray = [...this.slider.children].map(element => {
      const position = -(element.offsetLeft);
      return { element, position };
    })
    console.log(this.slideArray)
  }

  changeSlide(index) {
    const activeSlide = this.slideArray[index];
    this.moveSlide(activeSlide.position);
  }

  eventControl() {
    this.events.forEach(userEvent => {
      this.sliderControl.forEach((ctrl, index) => {
        ctrl.addEventListener(userEvent, e => {
          e.preventDefault();
          this.changeSlide(index);
          this.activeControl(e);
        })
      })
    })
  }

  onResize() {
    setTimeout(() => {
      this.slideConfig();
    }, 1000)
  }

  resizeEvent() {
    window.addEventListener('resize', this.onResize);
  }

  init() {
    this.slideConfig();
    this.changeSlide(0);
    this.resizeEvent();
    this.eventControl();
    return this;
  }
}
