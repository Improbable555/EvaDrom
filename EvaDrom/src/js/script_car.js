window.addEventListener('DOMContentLoaded', function(){
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
});