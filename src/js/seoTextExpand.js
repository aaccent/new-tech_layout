export default () => {
    const seoBtn = document.querySelector('.js-seo-expand');

    if(!seoBtn) return;

    let seoBtnText = seoBtn.dataset.text;

    seoBtn.addEventListener('click', () => {
        seoBtn.closest('.seo-section__body').classList.toggle('seo-section__body--collapsed');
        let isExpand = !seoBtn.closest('.seo-section__body').classList.contains('seo-section__body--collapsed');
        isExpand ? ( seoBtn.dataset.text = 'Свернуть' ) : ( seoBtn.dataset.text = 'Показать все' );
    })
}