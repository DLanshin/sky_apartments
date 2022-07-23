window.addEventListener('load', () => {
    let allElems = document.querySelectorAll('.faq .faq__item-header');
    /*прогоняем из через цикл*/
    allElems.forEach((elem) => {
        /*вещаем на каждый элемент обработчик на событие click*/
        elem.addEventListener('click', function () {
            /*у нажатого элемента получаем родителя*/
            var parentElem = this.parentNode;
            if (parentElem.classList.contains("open")) {
                parentElem.classList.remove('open');
            } else {
                let item = document.querySelector('.faq .faq__item.open');
                if (item) {
                    item.classList.remove('open');
                }
                parentElem.classList.add('open');
            }
        })
    });
});
