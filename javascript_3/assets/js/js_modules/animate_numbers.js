export default class AnimateNumbers {
  constructor() {
    this.numbers = document.querySelectorAll('.jsCountsArea h2');
  }

  valueNumbers() {
    this.numbers.forEach(number => {
      const total = Number(number.innerText);
      this.setAnimate(total, number);
    })
  }

  setAnimate(total, number) {
    let start = 0;
    const incremento = Math.floor(total / 100);

    const timer = setInterval(() => {
      start = start + incremento;
      number.innerText = start;
      
      if (start > total) {
        number.innerText = total;
        clearInterval(timer);
      }

    }, 50 * Math.random());
  }

  init() {
    this.valueNumbers();
    return this;
  }
}