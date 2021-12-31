import HeaderFixed from "./js_modules/header_fixed.js";
import MobileMenu from "./js_modules/mobile_menu.js";
import ReturnScroll from "./js_modules/return_scroll.js";
import SmoothScroll from "./js_modules/smooth_scroll.js";
import AnimateNumbers from "./js_modules/animate_numbers.js";
import PortfolioFilter from "./js_modules/portfolio_filter.js";
import FormMessage from "./js_modules/form_message.js";
import ScrollAnimation from "./js_modules/scroll_animation.js";

const headerFixed = new HeaderFixed();
headerFixed.init();

const mobileMenu = new MobileMenu();
mobileMenu.init();

const returnScroll = new ReturnScroll();
returnScroll.init();

const smoothScroll = new SmoothScroll();
smoothScroll.init();

const animateNumbers = new AnimateNumbers();
animateNumbers.init();

const portfolioFilter = new PortfolioFilter();
portfolioFilter.init();

const formMessage = new FormMessage();
formMessage.init();

const scrollAnimation = new ScrollAnimation();
scrollAnimation.init();