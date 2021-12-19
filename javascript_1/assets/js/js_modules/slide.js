export default class Slide {
  constructor() {
    this.slide = document.querySelector('.jsSlide');
    this.slideItens = document.querySelectorAll('.jsSlide .eventsSection-slide-single');
    this.slideControls = document.querySelector('.jsSlideControl');

    this.events = ['click', 'touchstart'];
    this.activeSlide = 'activeSlide';

    this.classOnControls = this.classOnControls.bind(this);
  }

  createControl() {
    this.control = document.createElement('ul');

    this.slideItens.forEach((slide, index) => {
      this.control.innerHTML += `<li><a href="#slide${index + 1}">${index + 1}</a></li>`;
    })
    this.slideControls.appendChild(this.control);

    this.controlArray = [...this.control.children];
    this.controlArray[0].classList.add(this.activeSlide);
  }

  classOnControls(e) {
    e.preventDefault();

    this.controlArray.forEach(ctrl => {
      ctrl.classList.remove(this.activeSlide);
    })

    e.target.classList.add(this.activeSlide);
  }

  addEventOnBalls() {
    this.events.forEach(userEvent => {
      this.controlArray.forEach(ctrl => {
        ctrl.addEventListener(userEvent, this.classOnControls);
      })
    })
  }

  init() {
    this.createControl();
    this.addEventOnBalls();
    return this;
  }
}