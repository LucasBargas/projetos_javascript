import Slider from './slider.js';
import TabNav from './tab_nav.js'

export default class ActiveSlider {
  constructor() {
    this.btns = document.querySelectorAll('.jsHeaderNav li a');
    this.handleClick = this.handleClick.bind(this);
  }

  initSliderCrew() {
    const slider = new Slider();
    slider.init();
    slider.activeControl(0);
  }

  initTabCrewImgs() {
    const tabCrewImgs = new TabNav('.jsSliderController li', '.jsCrewImgs figure');
    tabCrewImgs.init();
    tabCrewImgs.addClassOnContents(0);
  }

  getId(selectArea) {
    if (selectArea.id === 'crew') {
      const area = selectArea;

      setTimeout(() => {
        if (area.classList.contains('show')) {
          this.initSliderCrew();
          this.initTabCrewImgs();
        }
      }, 500)
    }
  }

  handleClick(e) {
    e.preventDefault();
    const el = e.target.closest('a');
    console.log(el)
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