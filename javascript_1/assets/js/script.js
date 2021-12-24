import MobileMenu from "./js_modules/mobile_menu.js";
import SmoothScroll from "./js_modules/smooth_scroll.js";
import FilterMenu from "./js_modules/filter_menu.js";
import TabNav from "./js_modules/tab_nav.js";
import Slide from "./js_modules/slide_events.js";
import FormMessage from "./js_modules/form-message.js";
import TestimonialsSlide from "./js_modules/testimonials_slide.js";

const mobileMenu = new MobileMenu();
mobileMenu.init();

const smoothScroll = new SmoothScroll();
smoothScroll.init();

const filterMenu = new FilterMenu();
filterMenu.init();

const tabNav = new TabNav();
tabNav.init();

const slide = new Slide();
slide.init();

const formMessage = new FormMessage();
formMessage.init();

const testimonialsSlide = new TestimonialsSlide();
testimonialsSlide.init();