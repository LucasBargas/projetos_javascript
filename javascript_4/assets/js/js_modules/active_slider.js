import Slider from './slider.js';

export default class ActiveSlider {
  constructor() {
    this.btns = document.querySelectorAll('.jsHeaderNav li a');
    this.handleClick = this.handleClick.bind(this);
  }

  getId(selectArea) {
    if (selectArea.id === 'crew') {
      const area = selectArea;

      setTimeout(() => {
        if (area.classList.contains('show')) {
          const slider = new Slider();
          slider.init();
        }
      }, 500)
    }
  }

  handleClick(e) {
    const el = e.target.closest('a');
    const idByHref = el.getAttribute('href');
    const selectArea = document.querySelector(idByHref);
    this.getId(selectArea);
  }

  addEvents() {
    ['touchstart', 'click'].forEach(userEvent => {
      this.btns.forEach(btn => {
        btn.addEventListener(userEvent, this.handleClick);
      })
    })
  }

  init() {
    this.addEvents();
    return this;
  }
}