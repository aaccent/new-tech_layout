export default () => {
    const mobileBtn = document.querySelector('.js-mobile-languages-btn');
    const inputs = document.querySelectorAll('.languages input[type="radio"]');
    const textDesktopValue = document.querySelector('.languages__buttons-text');
    const textMobileValue = document.querySelector('.mobile-languages__value');


    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            mobileBtn.classList.toggle('mobile-languages__button--active');
        })
    }

    if(inputs.length > 0) {
        Array.from(inputs).forEach(input => {
            input.addEventListener('input', () => {
                if(textMobileValue) {
                    textMobileValue.textContent = input.value;
                    mobileBtn.classList.remove('mobile-languages__button--active');
                }

                if(textDesktopValue) {
                    switch (input.value ) {
                        case "Русский":
                            textDesktopValue.textContent = "Ru";
                            break;

                        case "English":
                            textDesktopValue.textContent = "En";
                            break;

                        case "中国人":
                            textDesktopValue.textContent = "中国人";
                            break;

                        default:
                            break;
                    }
                }
            })
        })
    }
}
