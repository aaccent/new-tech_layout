import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';

export default function menu() {
    const burger = document.querySelector('.burger');

    window.menuOpen = false;

    if (!burger) return;

    const openMenu = () => {
        if (window.menuOpen) return;
        document.body.classList.add('mobile-menu-is-visible');
        disableBodyScroll(menu, {
            reserveScrollBarGap: true
        });
        window.menuOpen = true;
    };

    const closeMenu = () => {
        if (!window.menuOpen) return;
        document.body.classList.remove('mobile-menu-is-visible');
        clearAllBodyScrollLocks();
        window.menuOpen = false;
    };

    window.openMenu = openMenu;

    window.closeMenu = closeMenu;

    burger.addEventListener('click', event => {
        event.preventDefault();

        if (!window.menuOpen && !event.target.classList.contains('burger--modal-open')) {
            openMenu();
        } else {
            closeMenu();
        }

        if(event.target.classList.contains('burger--modal-open')) {
            document.getElementById('callback-modal').querySelector('.modal__close').click();
            event.target.classList.remove('burger--modal-open');
        }
    });
}
