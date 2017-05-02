var body = document.querySelector('body');
var navToggle = document.querySelectorAll('.navToggle');
var inputNav = document.querySelector('#navToggle');

navToggle.addEventListener('click', function(){
	for (inputNav = 0; index < inputNav.length; ++inputNav){
		if(inputNav.checked === true){
			body.classList.add('modal-open');
		} else {
			body.classList.remove('modal-open');
		}
	}
});

document.getElementById( 'setall' ).addEventListener( 'click', function(){
  for (index = 0; index < checkboxlist.length; ++index) {
    checkboxlist[index].setAttribute('checked', 'checked');
  }
});q