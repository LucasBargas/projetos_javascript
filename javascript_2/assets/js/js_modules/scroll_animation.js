export default class ScrollAnimation {
  constructor() {
    this.scrollAreas = document.querySelectorAll('.jsAnimaScroll');
    this.halfWindow = window.innerHeight * 0.7; 

    this.checkDistance = this.checkDistance.bind(this);
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
      if (window.pageYOffset > item.offset) item.element.classList.add('animate');
    })
  }

  init() {
    this.checkDistance();
    window.addEventListener('scroll', this.checkDistance)
    return this;
  }
}