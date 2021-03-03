'use strict';
document.addEventListener('DOMContentLoaded', ()=>{
const form = document.querySelector('.section__form'), //вся форма
      button = document.querySelector('.section__form-submit > span'),//кнопка формы
      modalProcessing = document.querySelector('.section__modal-processing'),
      modalEmptyForm = document.querySelector('.section__modal-emptyForm'),
      modalSucceed = document.querySelector('.section__modal-succeed'),
      inputEmail = document.querySelector('#email'),
      inputPassword = document.querySelector('#password'),
      close = document.querySelector('#close');
      console.log(modalSucceed);

function show(item) {
  item.classList.add('shown');
  item.classList.remove('hidden');
}

function hide(item) {
  item.classList.add('hidden');
  item.classList.remove('shown');
}

button.addEventListener('click', ()=> {
  hide(form);
  show(modalProcessing);
  function setForm(){
    if(inputEmail.value === '' || inputPassword.value === '') {
      hide(modalProcessing);
      show(modalEmptyForm);
      hide(form);
    } else {
      hide(modalProcessing);
      show(modalSucceed);
      hide(form);
      }  
    }
  setTimeout(setForm,5000)
});
 
close.addEventListener('click', () => {
  hide(modalEmptyForm);
  show(form);
});







 })
