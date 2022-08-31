import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const savedText = localStorage.getItem(STORAGE_KEY);
const parsedText = JSON.parse(savedText);

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onInputSave, 500));

addSavedData();

function onInputSave() {

    const formData = {
        email: formEl.email.value,
        message: formEl.message.value,
    }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt){
    evt.preventDefault();
    console.log('User: ', savedText);
    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
}


function addSavedData(){
 
    if(parsedText){
        formEl.email.value = parsedText.email;
        formEl.message.value = parsedText.message;
    }
};