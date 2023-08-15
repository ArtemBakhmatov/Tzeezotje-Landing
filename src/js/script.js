import modal from "./modules/modal";
import form from "./modules/form";
import hamburger from "./modules/hamburger";
import swider from "./modules/swiper"; // самовызывающая функция

window.addEventListener('DOMContentLoaded', () => {
    modal();
    form();
    hamburger();
});