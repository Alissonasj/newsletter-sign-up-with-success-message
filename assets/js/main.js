const input = document.querySelector('.input-email');
const errorMessage = document.querySelector('.error-message');
const form = document.querySelector('.form');

const closeModalButton = document.querySelector('#close-modal');
const modal = document.querySelector('#success-modal');
const fade = document.querySelector('#fade');

function toggleModal() {
    [modal, fade].forEach((elemento) => elemento.classList.toggle('hide'));
}

[closeModalButton, fade].forEach((element) =>
    element.addEventListener('click', () => toggleModal())
);

function addError() {
    errorMessage.style.display = 'block';
    input.classList.add('error-input');
}

function removeError() {
    errorMessage.style.display = 'none';
    input.classList.remove('error-input');
}

input.addEventListener('input', () => {
    const isValid = input.validity.valid;

    if (!isValid) {
        addError();
        return;
    }

    removeError();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
        addError();
        return;
    }

    removeError();
    input.value = '';
    toggleModal();
});
