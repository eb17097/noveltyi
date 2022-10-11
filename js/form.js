// Variables for popup
let contact_button = document.getElementById('contact_button');
let contact_popup = document.getElementById('contact_popup');
let popup_close_btns = document.querySelectorAll('.popup__close');
let button_form = document.querySelector('.button__form');

// Open popup "contact"
let open_popup = function(){
    contact_button.classList.add('stop');
    contact_popup.classList.add('popup-open');
    body.style.overflow = 'hidden';
}
contact_button.addEventListener('click', open_popup, false);




// Close popup "contact"
let popup_close = function(){
    this.parentElement.classList.remove('popup-open')
    body.style.overflow= 'auto';
    contact_button.classList.remove('stop')
}
for(let i = 0; i < popup_close_btns.length; i++){
    popup_close_btns[i].addEventListener('click', popup_close, false);
}




// Send data from form
let send_data = function(e){
    e.preventDefault();
    contact_popup.classList.remove('popup-open')
    body.style.overflow= 'auto';
    contact_button.classList.remove('stop')
}
button_form.addEventListener('click', send_data, false);