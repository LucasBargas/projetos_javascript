import debounce from "./debounce.js";

export default class ScrollAnimation {
  constructor() {
    this.scrollAreas = document.querySelectorAll('.jsAnimaScroll');
    this.halfWindow = window.innerHeight * 0.6; 

    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  getDistance() {
    this.distance = [...this.scrollAreas].map(area => {
      const offset = area.offsetTop;
      return {
        element: area,
        offset: Math.floor(offset - this.halfWindow),
      };
    });
    return this.distance;
  }

  checkDistance() {
    const getDistnce = this.getDistance();

    getDistnce.forEach(item => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('animate');
      }
    })
  }

  init() {
    this.checkDistance();
    window.addEventListener('scroll', this.checkDistance)
    return this;
  }
}