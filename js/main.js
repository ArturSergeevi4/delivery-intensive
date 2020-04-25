const cartButton = document.querySelector('#cart-button')
const modal = document.querySelector('.modal')
const closeButton = document.querySelector('.close')
cartButton.addEventListener('click', toggleModal)
closeButton.addEventListener('click', toggleModal)
function toggleModal() {
	modal.classList.toggle('is-open')
}
function closeModal() {
	modal.classList.remove('is-open')
}

function openModal() {
	modal.classList.add('is-open')
}

let searchInput = document.querySelector('.input-from')
let additionalInput = document.querySelector('.search-wrapper-additional')
searchInput.onfocus = inputFocus
function inputFocus() {
	additionalInput.classList.add('search-wrapper-additional-visible')
}

new WOW().init()
