import HeaderFixed from "./js_modules/header_fixed.js";
import MobileMenu from "./js_modules/mobile_menu.js";
import ReturnScroll from "./js_modules/return_scroll.js";
import SmoothScroll from "./js_modules/smooth_scroll.js";
import AnimateNumbers from "./js_modules/animate_numbers.js";

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