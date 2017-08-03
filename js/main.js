// BODY overflow hidden

var body = document.querySelector('body');
var modalToggle = document.querySelectorAll('.modalToggle');
var inputModal = document.querySelector('#toggle-modal-checkbox');

// Adds overflow hidden to the body tag when then nav and modal are open
inputNav.addEventListener('click', function () {
    if (this.checked === true) {
        body.classList.add('modal-open');
    } else {
        body.classList.remove('modal-open');
    }
});
