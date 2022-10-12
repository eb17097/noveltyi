// Variables for details vacancies
let details_buttons = document.querySelectorAll('.vacancies__card-details');
let details = document.querySelectorAll('.vacancies__item-details');
let last_click = null;

// Variables for resume popup
let resume_buttons = document.querySelectorAll('.vacancies__details-apply');
let resume_popup = document.getElementById('resume_popup');
let popup_close_btns = document.querySelectorAll('.popup__close');
let button_form = document.querySelector('.button__form');
let form_name = document.getElementById('form_name');
let form_surname = document.getElementById('form_surname');
let form_mail = document.getElementById('form_mail');
let form_check = document.getElementById('form_check')

// Variables for upload files
let file_select = document.getElementById('file_select');
let upload_file = document.getElementById('upload_file');
let file_resume = document.getElementById('file_resume');
let file_remove = document.getElementById('file_remove');


// Show/hide details vacancies
// start
let show_details = function(){

    if(last_click !== this.getAttribute('data-id')){
        for (let index = 0; index < details_buttons.length; index++) {
            details[index].classList.remove('active');
            details_buttons[index].classList.remove('active');
            last_click = this.getAttribute('data-id');
        }
    }

    for (let index = 0; index < details_buttons.length; index++) {
        if(this.getAttribute('data-id') == details[index].getAttribute('data-id')){
            details[index].classList.toggle('active');
            this.classList.toggle('active');
        }
    }

}
for (let index = 0; index < details_buttons.length; index++) {
    const element = details_buttons[index];
    element.addEventListener('click', show_details, false);
}
// Show/hide details vacancies
// finish




// Open popup "contact"
let open_popup = function(){
    resume_popup.classList.add('popup-open');
    body.style.overflow = 'hidden';
}
for (let index = 0; index < resume_buttons.length; index++) {
    const element = resume_buttons[index];
    element.addEventListener('click', open_popup, false);
    
}





// Close popup "contact"
let popup_close = function(){
    this.parentElement.classList.remove('popup-open')
    body.style.overflow= 'auto';
}
for(let i = 0; i < popup_close_btns.length; i++){
    popup_close_btns[i].addEventListener('click', popup_close, false);
}




// Send data from form
let send_data = function(e){

    e.preventDefault();
    let input_name = form_name.querySelector('.popup__content-input');
    let input_surname = form_surname.querySelector('.popup__content-input');
    let input_mail = form_mail.querySelector('.popup__content-input');

    function isEmpty(str) {
        return !str.trim().length;
    }

    if(isEmpty(input_name.value) || isEmpty(input_surname.value) || isEmpty(input_mail.value) || form_check.checked == false){

        if(isEmpty(input_name.value)){
            form_name.classList.add('error');
        }else{
            form_name.classList.remove('error');
        }

        if(isEmpty(input_surname.value)){
            form_surname.classList.add('error');
        }else{
            form_surname.classList.remove('error');
        }

        if(isEmpty(input_mail.value)){
            form_mail.classList.add('error');
        }else{
            form_mail.classList.remove('error');
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

    resume_popup.classList.remove('popup-open')
    body.style.overflow= 'auto';
}
button_form.addEventListener('click', send_data, false);




// Functions for upload document
// start
upload_file.addEventListener("click", function (e) {
    e.preventDefault();
    file_select.click();
});

file_select.addEventListener("change", function () {

    if(file_select.files[0].type.indexOf("") > -1) {
        let file_resume_name = file_resume.querySelector('.popup__file-name'); 
        file_resume_name.innerText = file_select.files[0].name;
        file_resume.classList.add('show')
    }
    
});

file_remove.addEventListener('click', ()=>{
    let file_resume_name = file_resume.querySelector('.popup__file-name'); 
    file_resume.classList.remove('show');
    file_resume_name.innerText = '';
    file_select.value = "";
})
// Functions for upload document
// finish