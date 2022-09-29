// Variables for header top
let header = document.getElementById('header');
let header_menu = document.getElementById('header_menu');
let header_logo = header_menu.querySelector('.header-top__logo').childNodes[1];

// Variables for header top menu 
let menu_items = document.querySelectorAll('.header-top__menu-item');
let dropdown_items = document.querySelectorAll('.header-top__menu-dropdown');
let dropdown_items_offerings = document.querySelectorAll('.header-top__dropdown-item.offerings');
let offerings_inner_items = document.querySelectorAll('.header-dropdown__item-inner');
let nav_menu = document.getElementById('nav_menu');
let burger_menu = document.querySelector('.header-top__burger');

// Variables for popup
let contact_popup = document.getElementById('contact_popup');
let contact_button = document.getElementById('contact_button');
let popup__close = document.querySelectorAll('.popup__close');




//
// Show/hide header top on scroll
// start
//
let show_header = function(){

    if(window.pageYOffset > header.clientHeight){

        if(!header_menu.classList.contains('fixed')){
            header_menu.classList.add('fixed')
            header_menu.classList.remove('fixed__off')
            header_logo.src = 'images/logo_fixed.svg'
        }

    }else{

        if(header_menu.classList.contains('fixed')){
            header_menu.classList.add('fixed__off')
            this.setTimeout(function(){
                header_menu.classList.remove('fixed')
                header_logo.src = 'images/logo.svg';
            },200)
        }

    }

    for(let i = 0; i < menu_items.length; i++){

        let dropdown = menu_items[i].nextElement.querySelector('.header-top__menu-dropdown')
        menu_items[i].classList.remove('active')
        
        if(dropdown != null){
            dropdown.classList.remove('active')
        }

    }

}

window.addEventListener('scroll', show_header, false);
//
// Show/hide header top on scroll
// finish
//




//
// Show/hide dropdown header top
// start
//
let last_hover_dropdown = null;

let show_dropdown = function(){

    if(last_hover_dropdown != null){
        last_hover_dropdown.parentElement.classList.remove('active')
        last_hover_dropdown.classList.remove('active');
    }

    if(this.querySelector('.header-top__menu-dropdown') != null){
        this.classList.add('active')
        let inner_list = this.querySelector('.header-top__menu-dropdown');
        inner_list.classList.add('active');
        last_hover_dropdown = inner_list;
    }

}

for(let i = 0; i < menu_items.length; i++){
    menu_items[i].addEventListener('mouseover', show_dropdown, false);
}


// Events for offerings in dropdown menu 
let last_hover_offerings = null;
for(let i = 0; i < dropdown_items_offerings.length; i++){

    dropdown_items_offerings[i].addEventListener('mouseover', function(){

        if(last_hover_offerings != null){   
            last_hover_offerings.classList.remove('active');
            for(let i = 0; i < dropdown_items_offerings.length; i++){
                if(last_hover_offerings.getAttribute('data-index') == dropdown_items_offerings[i].getAttribute('data-index')){
                    dropdown_items_offerings[i].classList.remove('active')
                }
            }
        }

        for(let j = 0; j < offerings_inner_items.length; j++){
            if(offerings_inner_items[j].getAttribute('data-index') == dropdown_items_offerings[i].getAttribute('data-index')){
                last_hover_offerings = offerings_inner_items[j];
                last_hover_offerings.classList.add('active');
                dropdown_items_offerings[i].classList.add('active')
            }
        }
        
    })

}

for(let i = 0; i < dropdown_items.length; i++){
    dropdown_items[i].addEventListener('mouseout', function(){
        this.classList.remove('active');
        this.parentElement.classList.remove('active')
    });
}

let show_mobile_menu = function(){
    nav_menu.classList.toggle('show');
    this.classList.toggle('active')
}

burger_menu.addEventListener('click', show_mobile_menu, false);


//
// Show/hide dropdown header top
// finish
//

// Open popup "contact"
// contact_button.addEventListener('click', function(){
//     contact_button.classList.add('stop');
//     contact_popup.classList.add('popup-open');
//     document.querySelector('body').style.overflow = 'hidden'
// });


// for(let i = 0; i < popup__close.length; i++){
//     popup__close[i].addEventListener('click', function(){
//         this.parentElement.classList.remove('popup-open')
//         document.querySelector('body').style.overflow= 'auto';
//         contact_button.classList.remove('stop')
//     })
// }