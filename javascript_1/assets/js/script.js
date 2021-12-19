import MobileMenu from "./js_modules/mobile_menu.js";
import SmoothScroll from "./js_modules/smooth_scroll.js";
import FilterMenu from "./js_modules/filter_menu.js";
import TabNav from "./js_modules/tabNav.js";

const mobileMenu = new MobileMenu();
mobileMenu.init();

const smoothScroll = new SmoothScroll();
smoothScroll.init();

const filterMenu = new FilterMenu();
filterMenu.init();

const tabNav = new TabNav();
tabNav.init();