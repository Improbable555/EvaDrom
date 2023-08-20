window.addEventListener('DOMContentLoaded', function  () {
    //Активатор
    let form_active = document.querySelectorAll('.icon-form');

    form_active.forEach(function(button) {
        button.addEventListener('click', function() {
            if (this.classList.contains('active')) {
            this.classList.remove('active');
            } else {
            form_active.forEach(function(button) {
                button.classList.remove('active');
            });
            this.classList.add('active');
            }
        });
    });

    // Активатор
    let rugs_active = document.querySelectorAll('.rugs-icon');

    rugs_active.forEach(function(button) {
        button.addEventListener('click', function() {
            if (this.classList.contains('active')) {
            this.classList.remove('active');
            } else {
            rugs_active.forEach(function(button) {
                button.classList.remove('active');
            });
            this.classList.add('active');
            }
        });
    });

    // Активатор 
    let color_active = document.querySelectorAll('.color-icon');

    color_active.forEach(function(button) {
        button.addEventListener('click', function() {
            if (this.classList.contains('active')) {
            this.classList.remove('active');
            } else {
            color_active.forEach(function(button) {
                button.classList.remove('active');
            });
            this.classList.add('active');
            }
        });
    });

    // Выплывающий скрытый текст (активуруется при нажатии на кнопку)
    const button = document.querySelectorAll('.button_plus');
    const texts = document.querySelectorAll('.hidden_text');

    button.forEach((button, i) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('active')) {
            button.classList.remove('active');
            texts[i].style.opacity = 0;
            texts[i].style.height = 0;
            } else {
            button.classList.add('active');
            texts[i].style.opacity = 1;
            texts[i].style.height = `${texts[i].scrollHeight}px`;
            }
        });
    });

    // Переключатель фото (Выбраная фотография больше других, остальные маленького размера под основной)
    const element = document.querySelectorAll('.main_photo'),
        imgbuttons = document.querySelectorAll('.carousel_photo'),
        point = document.querySelectorAll('.point');

    imgbuttons.forEach(function(button, i) {
        button.addEventListener('click', function() {
            element.forEach(function(element) {
            if (element.classList.contains('active')) {
                element.classList.remove('active');
            }
            });
            imgbuttons.forEach(function(imgbutton) {
            if (imgbutton.classList.contains('active')) {
                imgbutton.classList.remove('active');
            }
            });
            point.forEach(function(poitn){
            if (poitn.classList.contains('active')) {
                poitn.classList.remove('active')
            }
            });
            element[i].classList.add('active');
            point[i].classList.add('active');
            button.classList.add('active');
        });
    });

    // Переключатели
    const switchsr = document.querySelectorAll('.switch'),
        pricesr = document.querySelectorAll('.price-item');

    switchsr.forEach(function(button, i) {
        button.addEventListener('click', function() {
            if (button.classList.contains('active')) {
            button.classList.remove('active');
            pricesr[i].classList.remove('active');
            } else {
            button.classList.add('active');
            pricesr[i].classList.add('active');
            }
        });
    });

    

    // Подсчет итоговой стоимости 
    function calcPrice() {
        let basePrice = document.getElementById('select-options');
        basePrice = parseInt(basePrice.value);
        let priceItems = document.querySelectorAll('.price-item');
        let endTotalPrice = document.querySelector('.price-three');
        let priceValue = 0;
        // Подсчет аксессуаров
        priceItems.forEach(function(priceItem) {
            if (priceItem.classList.contains('active')) {
                priceValue += parseInt(priceItem.textContent);
            }
        });
        endTotalPrice.textContent = basePrice + priceValue + '₽';
    }
    calcPrice();

    

    const container = document.querySelector('.left__block');
    container.addEventListener('click', calcPrice);

    const description_blocks = document.querySelectorAll('.description_blocks'),
    description_text = document.querySelectorAll('.description_text');
    
    description_blocks.forEach(function(button, i) {
        button.addEventListener('click', function() {
            description_blocks.forEach(function(description_blocks) {
                if (description_blocks.classList.contains('active')) {
                    description_blocks.classList.remove('active');
                }
            });
            description_text.forEach(function(description_text) {
                if (description_text.classList.contains('active')) {
                    description_text.classList.remove('active')
                }
            });
            description_text[i].classList.add('active');
            button.classList.add('active');
        });
    });
        



    const icon_hover = document.querySelectorAll('.icon_hover'),
        hidden_texts = document.querySelectorAll('.hidden_texts');

    icon_hover.forEach(function(button, i) {
        button.addEventListener('mouseenter', function () {
            hidden_texts.forEach(function(hidden_text){
                hidden_text.classList.remove('active');
            });
            hidden_texts[i].classList.add('active');
        });
        
        button.addEventListener('mouseleave', function () {
            hidden_texts[i].classList.remove('active');
        });
    });

    

    window.addEventListener('click', function(event){
        if (event.target.classList.contains('btn_add-basket')) {
            const card = event.target.closest('.item_basket');
            const productInfo = {
                id: card.dataset.id,
                imgSrc: card.querySelector('.product-img').getAttribute('src'),
                title: card.querySelector('.basket-title').innerText,
                hiddenText: card.querySelector('.hidden_text-basket').innerText,
                price: card.querySelector('.price_basket').innerText,
            }
          // Преобразование объекта productInfo в строку JSON и сохранение ее в localStorage
            let existingProducts = JSON.parse(localStorage.getItem('productInfo'));
            // Проверка, что existingProducts является массивом
            if (!Array.isArray(existingProducts)) {
                existingProducts = [];
            }
            // Добавляем новый товар в список
            existingProducts.push(productInfo);
            // Преобразование списка товаров в строку JSON и сохранение ее в localStorage
            localStorage.setItem('productInfo', JSON.stringify(existingProducts));
        }
    });

    // Модельное окно "Купить в один клик"

    const buttonActive = document.querySelector('.btn_white');
    const modalPanelClose = document.querySelector('.modal__close');
    const modalPanel = document.querySelector('.overlay');
    const body = document.querySelector('body');

    buttonActive.addEventListener('click', function() {
        modalPanel.classList.add('show');
        body.style.overflow = 'hidden';
    });

    modalPanelClose.addEventListener('click', function() {
        modalPanel.classList.remove('show');
        body.style.overflow = 'visible';
    });


});