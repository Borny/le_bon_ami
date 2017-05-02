var body = document.querySelector('body');
var navToggle = document.querySelectorAll('.navToggle');
var inputNav = document.querySelector('#navToggle');

inputNav.addEventListener('click', function () {
    if (this.checked === true) {
        body.classList.add('modal-open');
    } else {
        body.classList.remove('modal-open');
    }
});
