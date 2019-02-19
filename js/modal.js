document.querySelector('#button-callback').addEventListener('click', function () {
	document.querySelector('#modal-callback').classList.toggle('modal_visible');
});
document.querySelector('.modal__close').addEventListener('click', function () {
	document.querySelector('#modal-callback').classList.toggle('modal_visible');
});