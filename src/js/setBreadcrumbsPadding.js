export default () => {
    const breadcrumbs = document.querySelector('.page-header__breadcrumbs');

    if(breadcrumbs) {
        document.documentElement.style.setProperty('--breadcrumbs-height', breadcrumbs.offsetHeight + 'px');
    } else {
        document.documentElement.style.setProperty('--breadcrumbs-height', '0');
    }

    window.addEventListener('resize', () => {
        if(breadcrumbs) {
            document.documentElement.style.setProperty('--breadcrumbs-height', breadcrumbs.offsetHeight + 'px');
        } else {
            document.documentElement.style.setProperty('--breadcrumbs-height', '0');
        }
    });
}
