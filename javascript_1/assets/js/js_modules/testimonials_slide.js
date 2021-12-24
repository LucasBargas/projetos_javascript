export default class TestimonialsSlide {
  constructor() {
    this.slideControls = document.querySelectorAll('.jsEventsTestimonialsControl ul li');

    this.events = ['click', 'touchstart'];
    this.activeSlide = 'activeSlide';

    this.slideControls[0].classList.add(this.activeSlide);

    this.classOnControls = this.classOnControls.bind(this);
  }

  classOnControls(e) {
    e.preventDefault();
    this.slideControls.forEach(ctrl => {
      ctrl.classList.remove(this.activeSlide);
    })
    e.target.classList.add(this.activeSlide);
  }

  addEventOnBalls() {
    this.events.forEach(userEvent => {
      this.slideControls.forEach(ctrl => {
        ctrl.addEventListener(userEvent, this.classOnControls);
      })
    })
  }

  init() {
    this.addEventOnBalls();
    return this;
  }
}