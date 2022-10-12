// Variables for popup
let contact_button = document.getElementById('contact_button');
let contact_popup = document.getElementById('contact_popup');
let popup_close_btns = document.querySelectorAll('.popup__close');
let button_form = document.querySelector('.button__form');
let form_name = document.getElementById('form_name');
let form_mail = document.getElementById('form_mail');
let form_company = document.getElementById('form_company');
let form_problem = document.getElementById('form_problem');
let form_check = document.getElementById('form_check');


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

    let input_name = form_name.querySelector('.popup__content-input');
    let input_mail = form_mail.querySelector('.popup__content-input');
    let input_company = form_company.querySelector('.popup__content-input');
    let input_problem = form_problem.querySelector('.popup__content-input');

    function isEmpty(str) {
        return !str.trim().length;
    }

    if(isEmpty(input_name.value) || isEmpty(input_mail.value) || isEmpty(input_company.value) || isEmpty(input_problem.value) || form_check.checked == false){
        
        if(isEmpty(input_name.value)){
            form_name.classList.add('error');
        }else{
            form_name.classList.remove('error');
        }

        if(isEmpty(input_mail.value)){
            form_mail.classList.add('error');
        }else{
            form_mail.classList.remove('error');
        }

        if(isEmpty(input_company.value)){
            form_company.classList.add('error');
        }else{
            form_company.classList.remove('error');
        }

        if(isEmpty(input_problem.value)){
            form_problem.classList.add('error');
        }else{
            form_problem.classList.remove('error');
        }

        if(form_check.checked == false){
            let form_check_text = form_check.parentElement.querySelector('.agreement__check-text');
            let form_check_style = form_check.parentElement.querySelector('.agreement__check--style');
            form_check_text.style.color = '#df1d17';
            form_check_style.style.borderColor = '#df1d17'
        }else{
            let form_check_text = form_check.parentElement.querySelector('.agreement__check-text');
            let form_check_style = form_check.parentElement.querySelector('.agreement__check--style');
            form_check_text.style.color = '#222222';
            form_check_style.style.borderColor = '#DF7517';
        }

        return;
    }


    contact_popup.classList.remove('popup-open');
    body.style.overflow= 'auto';
    contact_button.classList.remove('stop');
}
button_form.addEventListener('click', send_data, false);