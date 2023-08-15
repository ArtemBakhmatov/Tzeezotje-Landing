const hamburger = () => {
    const hamburger = document.querySelector('.header__hamburger'),
               menu = document.querySelector('.header__flex'),
               links = document.querySelectorAll('.header__item');

    const openMenu = () => {
        menu.classList.add('header__flex-active');
        hamburger.classList.add('header__hamburger-active');
        document.body.style.overflow = 'hidden';
    }

    const closeMenu = () => {
        menu.classList.remove('header__flex-active');
        hamburger.classList.remove('header__hamburger-active');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', () => {
        if(!hamburger.classList.contains('header__hamburger-active') && 
           !menu.classList.contains('header__flex-active')) {
                openMenu();
            } else {
                closeMenu();
            }
    });

    links.forEach(link => {
        link.addEventListener('click', closeMenu)
    })
}

export default hamburger;