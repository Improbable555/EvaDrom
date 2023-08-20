window.addEventListener('DOMContentLoaded', function() {

    // Добавление товара на страницу корзины из localStorage
    const cartWrapper = document.querySelector('.left__wrapper');
    const existingProducts = JSON.parse(localStorage.getItem('productInfo')) || [];

    existingProducts.forEach(productInfo => {
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        if (itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]');
            // counterElement.innerText = ++counterElement.innerText;
        } else {
            // Создаем HTML-разметку для каждого товара
            const cartItemHTML = `<div class="left__wrapper-element" data-id="${productInfo.id}">
                                    <div class="item">
                                        <img class="item__icon" src="${productInfo.imgSrc}" alt="">
                                    </div>
                                    <div class="item">
                                        <div class="item__box">
                                        <div class="title">${productInfo.title}</div>
                                        <div class="text">${productInfo.hiddenText}</div>
                                        </div>
                                    </div>
                                    <div class="item_right">
                                        <button class="btn_minus"
                                        data-action="minus">
                                        <span class="stick"></span>
                                        </button>
                                        <div class="counter" data-counter>1</div>
                                        <button class="btn_plus"
                                        data-action="plus">
                                        <span class="stick"></span>
                                        <span class="stick_vert"></span>
                                        </button>
                                        <div class="price">
                                        <div class="price__title">${productInfo.price}</div>
                                        <div class="price__remove">Удалить</div>
                                        </div>
                                    </div>
                                    </div>`;
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        }
    });

    // Кнопки плюс и минус
    window.addEventListener('click', function(event){
        let counter;
        if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
            const counterWrapper = event.target.closest('.item_right');
            counter = counterWrapper.querySelector('[data-counter]');
        }
        // Проверяем является ли элемент Плюсом или Минусом
        if (event.target.dataset.action === 'plus') {
            counter.innerText = ++counter.innerText;
            calcCartPrice();
        }
        if (event.target.dataset.action === 'minus') {
            if (parseInt(counter.innerText) > 1) {
                counter.innerText = --counter.innerText;
                calcCartPrice();
            }
        }
    });


    // Удаление товара из корзины
    const removeBtn = document.querySelectorAll('.price__remove');
    const products = Array.from(document.querySelectorAll('.left__wrapper-element'));

    removeBtn.forEach(function(btn, i) {
        btn.addEventListener('click', function() {
            const clickedProduct = this.closest('.left__wrapper-element');

            if (clickedProduct) {
                clickedProduct.remove();

                // Удалить товар из localStorage
                const existingProducts = JSON.parse(localStorage.getItem('productInfo')) || [];
                const updatedProducts = existingProducts.filter(function(_, index) {
                    return index !== i;
                });
                localStorage.setItem('productInfo', JSON.stringify(updatedProducts));
            }
        });
    });

    // Удаление всех товаров из корзины
    const removeAllBtn = document.querySelector('.btn_remove_product');

    removeAllBtn.addEventListener('click', function(){
        // products берём из переменой выше 
        products.forEach(function(product) {
            product.remove();
            
        });
        localStorage.removeItem('productInfo');
    });

    // Подсчет общий стоимости всех товаров 
    function calcCartPrice() {
        const cartItems = document.querySelectorAll('.left__wrapper-element');
        let totalPrice = 0;
        
        cartItems.forEach(function (item) {
            const amountEl = item.querySelector('[data-counter]');
            const priceEl = item.querySelector('.price__title');

            const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText); 
            totalPrice += currentPrice; 
        });
        let blockPrice = document.querySelector('.price-three');
            blockPrice.innerText = totalPrice + '₽';
    }
    calcCartPrice();
});