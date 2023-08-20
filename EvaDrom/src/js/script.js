window.addEventListener('DOMContentLoaded', function(){

    const carouselContainer = document.querySelector('.carousel__inner');
    const carouselItems = document.querySelectorAll('.slick');
    const arrowLeft = document.querySelector('.arrow__left');
    const arrowRight = document.querySelector('.arrow__right');

    const itemWidth = carouselItems[0].offsetWidth;
    const containerWidth = carouselContainer.offsetWidth;
    const itemsPerSlide = Math.floor(containerWidth / itemWidth);

    let currentSlide = 0;

    arrowRight.addEventListener('click', () => {
    currentSlide = Math.min(currentSlide + 1, carouselItems.length - itemsPerSlide);
    carouselContainer.style.transform = `translateX(-${currentSlide * itemWidth}px)`;
    });

    arrowLeft.addEventListener('click', () => {
    currentSlide = Math.max(currentSlide - 1, 0);
    carouselContainer.style.transform = `translateX(-${currentSlide * itemWidth}px)`;
    });

    const select_brand = document.getElementById('first-selector');
    const select_model = document.getElementById('second-selector');

    select_brand.addEventListener('change', function() {
    const country = this.value;
    if (country) {
        select_model.innerHTML = '';
        const modelArray = model[country];
        modelArray.forEach(function(brand) {
        const option = document.createElement('option');
        option.value = brand;
        option.text = brand;
        select_model.add(option);
        });
        select_model.disabled = false;
    } else {
        select_model.innerHTML = '<option value="">-- Сначала выберите модель --</option>';
        select_model.disabled = true;
    }
    });


    let buttons = document.querySelectorAll('.item__button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
        buttons.forEach(function(button) {
            button.classList.remove('active');
        });
        this.classList.add('active');
        });
    });

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

    let switches = document.querySelectorAll('.switch');

    switches.forEach(function(button) {
        button.addEventListener('click', function() {
        switches.forEach(function(button) {
            button.classList.remove('active');
        });
        this.classList.add('active');
        });
    });
    
    const carouselContainer_2 = document.querySelector('.catalog__inner');
    const carouselItems_2 = document.querySelectorAll('.item__inner');
    const arrowLeft_2 = document.querySelector('.switch__left');
    const arrowRight_2 = document.querySelector('.switch__right');
    const itemWidth_2 = carouselItems_2[0].offsetWidth;
    const containerWidth_2 = carouselContainer_2.offsetWidth;
    const itemsPerSlide_2 = Math.floor(containerWidth_2 / itemWidth_2);

    let currentSlide_2 = 0;
    let hasClickedRight_2 = false;

    arrowRight_2.addEventListener('click', () => {
    if (!hasClickedRight_2) {
        currentSlide_2 = Math.min(currentSlide_2 + 1, carouselItems_2.length - itemsPerSlide_2);
        carouselContainer_2.style.transform = `translateX(-${currentSlide_2 * itemWidth_2 + 100}px)`;
        hasClickedRight_2 = true;
    }
    });

    arrowLeft_2.addEventListener('click', () => {
    currentSlide_2 = Math.max(currentSlide_2 - 1, 0);
    carouselContainer_2.style.transform = `translateX(-${currentSlide_2 * itemWidth_2}px)`;
    hasClickedRight_2 = false;
    });


    function materialInf() {
        let buttons_down = document.querySelectorAll('.information-down');
        let hidden_items = document.querySelectorAll('.hidden_item');
        buttons_down.forEach((button, i) => {
        button.addEventListener('click', function() {
            if (hidden_items[i].classList.contains('active')) {
                hidden_items[i].classList.remove('active');
                button.style.transform = 'rotate(0deg)';
            } else {
                hidden_items[i].classList.add('active');
                button.style.transform = 'rotate(180deg)';
            }
        });
    });
    }
    materialInf();
    
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

    $(document).ready(function(){
        $('.partners-carusel').slick({
            slidesToShow: 9,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
        });
    });



});




